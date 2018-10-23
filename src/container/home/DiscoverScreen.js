import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView} from "react-native";
import BaseScreen from '../../components/screen/BaseScreen';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import AppUtils from "../../utils/AppUtils";
import DailyArticle from "../article/DailyArticle"


export default class DiscoverScreen extends BaseScreen {
    constructor(props) {
        super(props);
        this.navType = 1;
    }
    componentWillMount() {
        this.showLoadingView();
    }
    componentDidMount() {
        this.showNormalView();
    }

    _render = () => {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    style={{marginTop: (AppUtils.isIOSPlatform() ? AppUtils.getStatusBarHeight() : 0)}}
                    initialPage={0}
                    renderTabBar={() => <DefaultTabBar
                        activeTextColor={`#f60`}
                        inactiveTextColor={`#000`}
                        textStyle={{fontFamily: 'PingFangSC-Regular',}}
                        underlineStyle={{backgroundColor:'#f60',height: 1}}
                        style={{borderColor: '#d1d5d8'}}
                    />}
                >
                    <View tabLabel="每日一文" style={styles.tabView}>
                        <ScrollView style={[styles.card, {}]}>
                            <DailyArticle {...this.props}/>
                        </ScrollView>
                    </View>
                    <ScrollView tabLabel="基金" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>基金</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="组合" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>组合</Text>
                        </View>
                    </ScrollView>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabView: {
        flex: 1,
        padding: 10,
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }
});