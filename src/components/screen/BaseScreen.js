import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";

/**
 * 页面基类
 *
 * @export
 * @class BaseScreen
 * @extends {Component}
 */
export default class BaseScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('《========' + this.constructor.name + ': componentWillMount' + '========》');
    }

    componentDidMount() {
        console.log('《========' + this.constructor.name + ': componentDidMount' + '========》');
    }

    componentWillUnmount() {
        console.log('《========' + this.constructor.name + ': componentWillUnmount' + '========》');
    }

}
