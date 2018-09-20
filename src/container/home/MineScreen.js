import React, {Component} from 'react';
import {Text, View, Button} from "react-native";
export default class MineScreen extends Component {
    constructor(props) {
        super(props)
    }
    goWeb = (item) => {
        this.props.navigation.push('Web', {
            url: item.url,
            title: item.title
        });
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 50}}>
                    我的
                    我的
                </Text>
                <Button
                    title="Go to baidu"
                    onPress={() => this.goWeb({url: 'https://www.baidu.com',title: ''})}
                />
            </View>
        );
    }
}