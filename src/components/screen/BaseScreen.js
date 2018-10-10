import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from "react-native";
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

        this.rotateValue = new Animated.Value(0);
        this.isAnimating = false;

        this.showType = 1;
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
    /** 更新视图，重新render */
    updateScreen = () => {
        this.setState({screenId: new Date().getTime().toString()})
    }

    startAnimation() {
        if (this.showType === 0) {
            this.isAnimating = true;
            this.rotateValue.setValue(0);
            Animated.timing(this.rotateValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            }).start(() => this.startAnimation());
        } else {
            this.isAnimating = false;
        }
    }

    updateAnimation() {
        if (this.isAnimating === false) {
            this.startAnimation();
        }
    }

    showLoadingView = () => {
        this.showType = 0;
        this.updateAnimation();
        this.updateScreen();
    }

    showNormalView = () => {
        this.showType = 1;
        this.updateScreen();
    }

    showERrrorView = () => {
        this.showType = 1;
        this.updateScreen();
    }

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
        if (this.showType === 0) {
            // 加载中
            let loadingImageWidthOrHeight = 44;
            contentView = (
                <View style={styles.loadingAndErrorViewContainer}>
                    <View style={styles.loadingImageContainer}>
                        <Animated.Image
                            source={require('../../resources/icon/loading.png')}
                            style={{
                                width: loadingImageWidthOrHeight,
                                height: loadingImageWidthOrHeight,
                                transform: [
                                    {
                                        rotateZ: this.rotateValue.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', '360deg']
                                        })
                                    }
                                ]
                            }}
                        />
                    </View>
                </View>
            );
        } else if (this.showType === 1) {
            // 加载成功
            contentView = this.renderNormalContentView();
        } else if (this.showType === 2) {
            // 加载失败
            contentView = null;
        }
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
    },
    loadingAndErrorViewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    loadingImageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});
