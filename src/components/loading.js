import React from "react";
import {ActivityIndicator, StyleSheet, Text, View, Dimensions} from "react-native";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
export default class MyLoading extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={{
                flex: 1,
                width: width,
                height: height,
                position: 'absolute',
                backgroundColor: '#10101099'
            }}>
                <View style={styles.loading}>
                    <ActivityIndicator color="white"/>
                    <Text style={styles.loadingTitle}>正在加载...</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        backgroundColor: '#10101099',
        height: 80,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (height - 80) / 2,
        left: (width - 100) / 2,
    },
    loadingTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'white'
    }
});