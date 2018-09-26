import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import TextButton from '../../components/TextButton';
import ListItem from '../../components/ListItem'
export default class MineScreen extends Component {
    constructor(props) {
        super(props)
    }
    goWeb = (item) => {
        this.props.navigation.push('Web', {
            url: item.url,
            title: item.title
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    <View style={styles.avtar}>
                        <Image
                            source={require('../../resources/img/avtar.jpg')}
                            style={styles.avtarImg}/>
                    </View>
                </View>
                <View style={[styles.content, {marginTop: 80}]}>
                    <View style={styles.cell}>
                        <Text style={styles.cellText}>我的相册</Text>
                        <View style={styles.cellImage}><Image source={require('../../resources/icon/next.png')} style={styles.cellImg}/></View>
                    </View>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => this.goWeb({url: 'https://github.com/Clearives/ccM',title: 'ccM'})}>
                        <View style={styles.cell}>
                            <Text style={styles.cellText}>Github</Text>
                            <View style={styles.cellImage}>
                                <Image source={require('../../resources/icon/next.png')} style={styles.cellImg}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.cell}>
                        <Text style={styles.cellText}>WeiBo</Text>
                        <View style={styles.cellImage}><Image source={require('../../resources/icon/next.png')} style={styles.cellImg}/></View>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellText}>WeiChat</Text>
                        <View style={styles.cellImage}><Image source={require('../../resources/icon/next.png')} style={styles.cellImg}/></View>
                    </View>
                </View>
                <View style={[styles.content]}>
                    <View style={styles.cell}>
                        <Text style={styles.cellText}>我的组件</Text>
                        <View style={styles.cellImage}><Image source={require('../../resources/icon/next.png')} style={styles.cellImg}/></View>
                    </View>
                </View>
                <View>
                    <TextButton
                        style={{marginBottom: 20}}
                        text={`按钮`}
                        onPress={() => {alert('点击')}}
                    />
                    <ListItem
                        listTitle={`我的投资`}
                        style={styles.listItem}
                        onPress={() => {alert('我的投资')}}
                    >
                        <Text style={styles.textOther}>跳转</Text>
                    </ListItem>
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
    banner: {
        height: 150,
        backgroundColor: '#73c1f9',
        alignItems: 'center'
    },
    avtar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: -50,
    },
    avtarImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        position: 'absolute',
        left: 10,
        top: 10
    },
    content: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    cell: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8',
    },
    cellText: {
        fontSize: 16
    },
    cellImage: {
        width: 100,
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    cellImg: {
        width: 10,
        height: 17
    },
    listItem: {
        marginLeft: 10,
        marginRight: 10,
    },
    textOther: {

    }
})