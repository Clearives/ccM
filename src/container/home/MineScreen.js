import React, {Component} from 'react';
import {Text, View, Button} from "react-native";
export default class MineScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 50}}>
                    我的
                    我的
                </Text>
            </View>
        );
    }
}