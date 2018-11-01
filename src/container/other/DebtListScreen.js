import React from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import BaseScreen from '../../components/screen/BaseScreen';
import AppUtils from "../../utils/AppUtils";
import Http from "../../service/http";

let width = AppUtils.getScreenWidth();
export default class DebtListScreen extends BaseScreen {
    static navigationOptions = ({navigation}) => {
        return {
            header: null
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            pageIndex: 1,
            pageSize: 10,
            refreshing: false,
            loading: 1, // 1初始；2加载中；3到底了
            data: [],
        };
        this.navTitle = 'DebtList';
        this.navShowLine = true;
        this.onEndReachedCalledDuringMomentum = false
    }

    componentWillMount() {
        this.showLoadingView()
        this.getAssetDebtList(this.state.pageIndex)
    }

    componentDidMount() {
        this.showNormalView()
    }

    getAssetDebtList = (i) => {
        let url = 'https://www.zyxr.com/WapWeb/product/getAssetDebtList.json'
        let param = {pageIndex: i, pageSize: this.state.pageSize}
        Http.postData(url, param)
            .then(res => {
                let tempData = i === 1 ? [] : this.state.data

                this.setState({
                    refreshing: false,
                    loading: tempData.length >= 90 ? 3 : 1,
                    data: tempData.concat(res.data.data.data),
                    pageIndex: i + 1
                }, () => {console.log(this.state)})
            })
            .catch(error => {
                console.error(error);
            });
    }

    _refresh = () => {
        this.setState({
            refreshing: true,
        });
        setTimeout(() => {
            this.getAssetDebtList(1)
        }, 1500)
    }
    _loadMore = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            if (this.state.loading === 1) {
                this.setState({
                    loading: 2,
                });
                setTimeout(() => {
                    this.getAssetDebtList(this.state.pageIndex)
                }, 500);
            }
            this.onEndReachedCalledDuringMomentum = true;
        }
    }
    _renderItem = ({ item }) => (
        <View style={{height: 120, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
            <Text>{item.id}</Text>
        </View>
    )

    _renderHeader = () => {
        return (
            <View style={{
                height: 44,
                width: width,
                justifyContent: 'center',
                backgroundColor: '#f60',
                alignItems: 'center'
            }} activeOpacity={1}>
                <Text onPress={this.Refresh}>{'我是头部'}</Text>
            </View>
        )
    };
    _renderFooter = () => {
        if (this.state.data.length !== 0 && this.state.loading === 2) {
            return (
                <View style={[styles.box]}>
                    <Text>{'正在加载....'}</Text>
                </View>
            )
        } else if (this.state.loading === 3) {
            return (
                <View style={[styles.box, {backgroundColor: '#f60'}]}>
                    <Text>{'到底了'}</Text>
                </View>
            )
        } else {
            return null
        }

    };

    _render = () => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    ListHeaderComponent={this._renderHeader}
                    ListFooterComponent={this._renderFooter}
                    keyExtractor={(item, index) => index.toString()}
                    onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                    onEndReachedThreshold={0}
                    onEndReached={this._loadMore}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._refresh}
                            title="加载中..."/>
                    }
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8'
    },
    box: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
