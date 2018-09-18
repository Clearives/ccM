import React, {Component} from 'react';
import {Text, View} from "react-native";

export default class HomeScreen extends Component {
    static navigationOptions = {
        header:null,  //隐藏顶部导航栏
    };
    constructor(props) {
        super(props);
    }
    goGalleryIndex = () => {
        this.props.navigation.push('Gallery', { transition: 'forInitial' });
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f2a0ff', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 50}} onPress={() => this.goGalleryIndex()}>
                    Gallery
                </Text>
            </View>
        );
    }
}