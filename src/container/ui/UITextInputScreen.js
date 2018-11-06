import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from "react-native";
import BaseScreen from '../../components/screen/BaseScreen';

export default class UITextInputScreen extends BaseScreen {
    static navigationOptions = ({navigation}) => {
        return {
            header: null
        }
    };

    constructor(props) {
        super(props);
        this.navType = 0;
        this.navTitle = 'TextInput';
        this.navShowLine = true;

        this.state = {
            text: ''
        }
    }

    componentWillMount() {
        this.showLoadingView();
    }

    componentDidMount() {
        this.showNormalView();
    }

    search = () => {
        console.log("您输入的内容为：" + this.state.text);
    }

    _render = () => {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize: 16, color: '#f60'}}>TextInput</Text>
                </View>
                <View style={styles.flex}>
                    <View style={[styles.flexDirection, styles.inputHeight]}>
                        <View style={styles.flex}>
                            <TextInput
                                style={styles.input}
                                returnKeyType="search"
                                placeholder="请输入关键字"
                                onChangeText={(text) => this.setState({text})}/>
                        </View>
                        <View style={styles.btn}>
                            <Text style={styles.search} onPress={() => {
                                this.search()
                            }}>搜索</Text>
                        </View>
                    </View>
                    <Text style={styles.tip}>已输入{this.state.text.length}个文字</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    title: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20
    },
    flex: {
        flex: 1,
    },
    flexDirection: {
        flexDirection: 'row'
    },
    topStatus: {
        marginTop: 25,
    },
    inputHeight: {
        height: 45,
    },
    input: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    btn: {
        width: 55,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    tip: {
        marginLeft: 5,
        marginTop: 5,
        color: '#C0C0C0',
    }
})
