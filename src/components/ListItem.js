import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types';

/**
 * ListItem
 *
 * @export
 * @class ListItem
 * @extends {Component}
 */
export default class ListItem extends Component {
    static propTypes = {
        /** 点击事件 */
        onPress: PropTypes.func,
        /** 按钮样式 */
        style: PropTypes.any,
        /** 左侧文本 */
        listTitle: PropTypes.string,
        /** 自定义内容 */
        children: PropTypes.any
    };

    static defaultProps = {
        listTitle:'ListItem',
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight
                activeOpacity={1}
                underlayColor={`transparent`}
                onPress={this.props.onPress}
            >
                <View style={[styles.cell, this.props.style]}>
                    <View>
                        <Text>{this.props.listTitle}</Text>
                    </View>
                    <View style={styles.rightView}>
                        {this.props.children}
                        <View style={styles.cellImage}><Image source={require('../resources/icon/next.png')} style={styles.cellImg}/></View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8',
        backgroundColor: '#fff',
        borderRadius: 5
    },
    cellText: {
        fontSize: 16
    },
    cellImage: {
        paddingLeft: 15,
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    cellImg: {
        width: 10,
        height: 17
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});