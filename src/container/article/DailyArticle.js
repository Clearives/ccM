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
        const htmlContent = `<p>醉人的夜，一枚枚飞弹划破夏日夜空。</p><p>我们部落的人都住在茅草、泥巴搭起来的棚屋里。采完椰子收工后晚上回到家，疲惫不堪的我们待在门口，或蹲，或躺在草席上，望着星空发呆，身边是顶着圆滚滚的肚子在地上玩耍的小孩。许久以来，或许一直以来，我们感</p><p><a href="https://www.baidu.com">百度</a></p>`;
        return (
            <View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>我是标题</Text>
                </View>
                <HTMLView
                    value={htmlContent}
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
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    a: {
        color: '#41ABFE',
        fontSize: 18
    },
    p: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000'
    }
});