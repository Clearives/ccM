import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';

/**
 * 可点击的文本按钮
 *
 * @export
 * @class TextButton
 * @extends {Component}
 */
export default class TextButton extends Component {
    static propTypes = {
        /** 点击事件 */
        onPress: PropTypes.func,
        /** 按钮样式 */
        style: PropTypes.any,
        /** 文本样式 */
        textStyle: PropTypes.any,
        /** 按钮文本 */
        text: PropTypes.string,
    };

    static defaultProps = {
        text:'Button',
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={[styles.container, this.props.style]}>
                    <Text style={[styles.title, this.props.textStyle]}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'PingFangSC-Regular',
        textAlign: 'center'
    },
    container: {
        alignSelf: 'stretch',
        height: 44,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#41ABFE',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});