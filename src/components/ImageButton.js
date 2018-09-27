import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

/**
 * 图片按钮
 *
 * @export
 * @class ImageButton
 * @extends {Component}
 */
export default class ImageButton extends Component {
    static propTypes = {
        /** 样式对象 */
        style: PropTypes.any,
        /** 图片样式 */
        imageStyle: PropTypes.any,
        /** 图片source */
        source: PropTypes.any,
        /** 点击事件 */
        onPress: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={[styles.container, this.props.style]}>
                    <Image style={[this.props.imageStyle]} source={this.props.source} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
