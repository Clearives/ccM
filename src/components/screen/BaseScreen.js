import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import BaseHeader from '../BaseHeader'

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
        this.navType = 0; // 0线上 1隐藏
        this.navBackImageSource = null; // 返回按钮图片
        this.navTitle = ''; // 导航栏标题文本
        this.navStyle = {}; // 导航栏样式
        this.navTitleStyle = {}; // 导航栏标题样式
        this.navShowLine = false; // 是否显示导航栏底部分割线,默认不显示
        this.navHideBack = false; // 是否隐藏返回按钮
        this.navShowRight = false; // 是否显示右侧按钮
        this.navRightView = null; // 右侧按钮组件视图
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

    renderNormalContentView = () => null

    handleBack = () => {
        this.props.navigation.pop();
    }

    handleNavRightPress = () => {

    }

    render() {
        let headerView = null;
        let contentView = null;
        if (this.navType === 0) {
            headerView = (
                <BaseHeader
                    source={this.navBackImageSource}
                    title={this.navTitle}
                    backPress={() => {this.handleBack()}}
                    style={this.navStyle}
                    titleStyle={this.navTitleStyle}
                    isShowLine={this.navShowLine}
                    isHideBack={this.navHideBack}
                    isShowRight={this.navShowRight}
                    rightView={this.navRightView}
                    rightPress={() => {this.handleNavRightPress()}}
                />
            );
        }
        contentView = this.renderNormalContentView();
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    {headerView}
                    {contentView}
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    }
});
