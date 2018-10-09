import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import AppUtils from '../../utils/AppUtils'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: 0,
            ScreenHeight: 0,
            statusBarHeight: 0,
            navBarHeight: 0,
            tabBarHeight: 0,
            bottomMargin: 0
        }
    }

    componentDidMount() {
        this.setState({
            screenWidth: AppUtils.getScreenWidth(),
            ScreenHeight: AppUtils.getScreenHeight(),
            statusBarHeight: AppUtils.getStatusBarHeight(),
            navBarHeight: AppUtils.getNavBarHeight(),
            tabBarHeight: AppUtils.getTabBarHeight(),
            bottomMargin: AppUtils.getBottomMargin()
        })
    }

    goGalleryIndex = () => {
        this.props.navigation.push('Gallery', {transition: 'forInitial'});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    AppUtils
                </Text>
                <View style={{paddingLeft: 60,paddingRight: 60}}>
                    <Text style={{fontSize: 20}}>screenWidth: {this.state.screenWidth}</Text>
                    <Text style={{fontSize: 20}}>ScreenHeight: {this.state.ScreenHeight}</Text>
                    <Text style={{fontSize: 20}}>statusBarHeight: {this.state.statusBarHeight}</Text>
                    <Text style={{fontSize: 20}}>navBarHeight: {this.state.navBarHeight}</Text>
                    <Text style={{fontSize: 20}}>tabBarHeight: {this.state.tabBarHeight}</Text>
                    <Text style={{fontSize: 20}}>bottomMargin: {this.state.bottomMargin}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,
        marginBottom: 30,
        color: '#f60'
    }
});