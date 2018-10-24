import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';

/**
 * 每日一文
 *
 * @export
 * @class DailyArticle
 * @extends {Component}
 */
export default class DailyArticle extends Component {
    static propTypes = {

    };

    constructor(props) {
        super(props);
    }
    renderNode = (node, index, siblings, parent, defaultRenderer) => {
        switch (node.name) {
            case 'a':
            let href = node.attribs.href
            return (
                <Text
                    key={index}
                    style={[styles.a]}
                    onPress={() => {
                        this.props.navigation.push('Web', {
                            url: href,
                            title: node.children[0].data
                        })
                    }}
                >
                    {defaultRenderer(node.children, parent)}
                </Text>
            )
            break
            case 'p':
                return (
                    <Text
                        key={index}
                        style={[styles.p]}
                    >
                        {defaultRenderer(node.children, parent)}
                    </Text>
                )
        }
    }

    render() {
        return (
            <View style={{paddingBottom: 20}}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{this.props.data.title}</Text>
                    <Text style={styles.dateText}>{this.props.data.date.curr}</Text>
                </View>
                <HTMLView
                    value={this.props.data.content || ''}
                    renderNode={this.renderNode}
                    paragraphBreak={''}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 44,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#41ABFE',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    dateText: {
        fontSize: 16,
        color: '#000',
        margin: 8
    },
    a: {
        color: '#41ABFE',
        fontSize: 18
    },
    p: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000',
        lineHeight: 24
    }
});