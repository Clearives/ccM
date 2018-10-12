import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";
import BaseScreen from "../../components/screen/BaseScreen";

export default class GalleryScreen extends BaseScreen {
    constructor(props) {
        super(props);
        this.navType = 0;
        this.navTitle = '图库';
        this.navHideBack = true;
        this.navShowLine = true;
        this.navShowRight = true;
        // this.navRightView = <Text onPress={() => {alert('我是美图入口')}}>美图</Text>
    }
    componentWillMount() {
        this.showLoadingView();
    }
    componentDidMount() {
        setTimeout(() => {
            this.showNormalView();
        }, 1000)
    }
    _render = () => {
        return (
            <View style={styles.container}>
                <Text style={{color: '#f60', fontSize: 24}}>Gallery</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});