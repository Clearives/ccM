import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";
export default class DiscoverScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flexContainer}>
                    <View style={styles.cell}>
                        <Text style={styles.welcome}>
                            cell1
                        </Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.welcome}>
                            cell2
                        </Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.welcome}>
                            cell3
                        </Text>
                    </View>
                </View>
                <View style={[styles.box, {height: 100, backgroundColor: '#f60'}]}><Text style={styles.text}>1</Text></View>
                <View style={[styles.box, {height: 100, backgroundColor: '#c7bcff'}]}><Text>2</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    },
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        height: 50,
        backgroundColor: '#7faa7f',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
});