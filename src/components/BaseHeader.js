import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import ImageButton from '../components/ImageButton'
import AppUtils from '../utils/AppUtils';

/**
 * 导航栏视图
 */
export default class BaseHeader extends Component {
    static propTypes = {
        style: PropTypes.any, // 样式对象
        title: PropTypes.string, // 导航栏标题文字
        titleStyle: PropTypes.any, // 导航栏标题文字样式
        source: PropTypes.any, // 左侧返回按钮图片
        backPress: PropTypes.func, // 返回按钮点击事件处理函数
        isShowLine: PropTypes.bool, // 是否显示导航栏底部的分割线
        isHideBack: PropTypes.bool, // 是否隐藏返回按钮
        isShowRight: PropTypes.bool, // 是否显示右侧按钮
        rightView: PropTypes.any, // 右侧按钮组件视图
        rightPress: PropTypes.func, // 右侧按钮点击事件处理函数
    };

    constructor(props) {
        super(props);
    }

    render() {
        let backImageDefaultSource = require('../resources/icon/back_btn.png');
        let views = null;
        if (this.props.isShowRight == true) {
            views = <TouchableWithoutFeedback key='right' onPress={this.props.rightPress}>
                <View style={styles.rightButton}>
                    {this.props.rightView}
                </View>
            </TouchableWithoutFeedback>
        }
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.content}>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.title, this.props.titleStyle]} numberOfLines={1}>
                            {this.props.title}
                        </Text>
                    </View>
                    {this.props.isHideBack == true ? null :
                        <ImageButton
                            source={this.props.source == null ? backImageDefaultSource : this.props.source}
                            style={styles.leftButton}
                            onPress={this.props.backPress}
                        />
                    }
                    {views}
                </View>
                {this.props.isShowLine == true ? <View style={styles.line} /> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: AppUtils.isIOSPlatform() ? 0 : AppUtils.getStatusBarHeight(),
        height: AppUtils.getNavBarHeight() + (AppUtils.isIOSPlatform() ? AppUtils.getStatusBarHeight() : 0)
    },
    content: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: AppUtils.getNavBarHeight()
    },
    titleContainer: {
        flexDirection: 'row',
        position: 'absolute',
        left: 50,
        right: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#444648',
        fontSize: 17,
        fontFamily: 'PingFangSC-Regular'
    },
    leftButton: {
        position: 'absolute',
        left: 0,
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    rightButton: {
        position: 'absolute',
        alignItems: 'center',
        right: 0,
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
    },
    line: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 1,
        backgroundColor: '#d1d5d8'
    }
});
