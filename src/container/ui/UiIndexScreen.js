import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from "react-native";
import BaseScreen from '../../components/screen/BaseScreen';
import ListItem from "../../components/ListItem"
import AppUtils from "../../utils/AppUtils"

export default class MineScreen extends BaseScreen {
    static navigationOptions = ({navigation}) => {
        return {
            header: null
        }
    };

    constructor(props) {
        super(props);
        this.navType = 0;
        this.navTitle = '我的组件';
        this.navShowLine = true;

        this.state = {
            UIData: [
                {
                    key: '1',
                    title: 'FlatList',
                    url: 'UIFlatList'
                },
                {
                    key: '2',
                    title: 'Modal',
                    url: 'UIModal'
                },
                {
                    key: '3',
                    title: 'Button',
                    url: 'UIButton'
                },
                {
                    key: '4',
                    title: 'Animated',
                    url: 'UIAnimated'
                },
                {
                    key: '5',
                    title: 'Parallax',
                    url: 'UIParallax'
                }
            ]
        }
    }

    componentWillMount() {
        this.showLoadingView();
    }

    componentDidMount() {
        this.showNormalView();
    }
    _renderItem = ({item}) => {
        return (
            <ListItem
                listTitle={item.title}
                onPress={() => {this.props.navigation.push(item.url)}}
            >
            </ListItem>
        )
    }

    _render = () => {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize: 16, color: '#f60'}}>下面是组件列表</Text>
                </View>
                <View style={styles.flatList}>
                    <FlatList
                        data={this.state.UIData}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    title: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20
    },
    flatList: {
        height: AppUtils.getScreenHeight() - 60,
        backgroundColor: '#fff'
    }
})