import React from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import BaseScreen from '../../components/screen/BaseScreen';
import AppUtils from "../../utils/AppUtils";

let width = AppUtils.getScreenWidth();
export default class UIFlatListScreen extends BaseScreen {
    static navigationOptions = ({navigation}) => {
        return {
            header: null
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            refreshing: false,
            isLoadMoreing: 'LoadMoreing',
        };
        this.responseData = [];
        this.isLoadMore = false;

        this.navTitle = 'UIFlatList';
        this.navShowLine = true;
        this.navShowRight = true;
        this.navRightView = <Text onPress={() => {this._refresh()}}>刷新</Text>
    }

    componentWillMount() {
        this.showLoadingView();
        this.Refresh();
    }

    componentDidMount() {

    }

    Refresh = () => {
        this.setState({
            refreshing: true,
        });
        let timer = setTimeout(() => {
            clearTimeout(timer)
            this.showNormalView();
            this.responseData = [
                {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}
            ];
            this.setState({
                refreshing: false,
                data: this.responseData
            });
            this.isLoadMore = false;
        }, 1000);
    };

    LoadMore = () => {
        let newData = [];
        for (let i = 6; i < 10; i ++) {
            let obj = {
                id: `新数据${i}`
            };
            newData.push(obj);
        }
        if (this.isLoadMore === false) {
            this.setState({
                isLoadMoreing: 'LoadMoreing',
            });
            this.isLoadMore = true;
            this.responseData = this.responseData.concat(newData);
            setTimeout(() => {
                this.setState({
                    data: this.responseData,
                    isLoadMoreing: 'LoadMoreEmpty'
                })
            }, 500);
        }
    };

    _renderItem = ({item}) => {
        return (
            <View style={{height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Text>{item.id}</Text>
            </View>
        )
    };

    _renderSeparator = () => {
        return (
            <View style={{height: 1, backgroundColor: 'rgb(200,200,200)',}}/>
        )
    };

    _renderHeader = () => {
        return (
            <View style={{
                height: 44,
                width: width,
                justifyContent: 'center',
                backgroundColor: '#FF557F',
                alignItems: 'center'
            }} activeOpacity={1}>
                <Text onPress={this.Refresh}>{'我是头部'}</Text>
            </View>
        )
    };

    _renderFooter = () => {
        if (this.state.data.length !== 0 && this.state.isLoadMoreing === 'LoadMoreing') {
            return (
                <View style={[styles.box]}>
                    <Text>{'正在加载....'}</Text>
                </View>
            )
        } else if (this.state.isLoadMoreing === 'LoadMoreEmpty') {
            return (
                <View style={[styles.box, {backgroundColor: '#FF557F'}]}>
                    <Text>{'到底了'}</Text>
                </View>
            )
        } else {
            return null
        }

    };

    _refresh = () => {
        this._flatList.scrollToIndex({viewPosition: 44, index: 0});
        this.Refresh();
    }

    _render = () => {
        return (
            <View style={styles.container}>

                <FlatList
                    showsVerticalScrollIndicator={false}//是否显示垂直滚动条
                    showsHorizontalScrollIndicator={false}//是否显示水平滚动条
                    numColumns={1}//每行显示1个
                    ref={(flatList) => this._flatList = flatList}
                    ListHeaderComponent={this._renderHeader}//头部
                    ListFooterComponent={this._renderFooter}//尾巴
                    renderItem={this._renderItem}//每行显示一项
                    ItemSeparatorComponent={this._renderSeparator}//每行底部
                    enableEmptySections={true}//数据可以为空
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={0}//执行上啦的时候10%执行
                    onEndReached={this.LoadMore}
                    data={this.state.data}
                    extraData={this.state}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.Refresh}
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