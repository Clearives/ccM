import React, { Component } from 'react';
import {Dimensions, ScrollView, Image, ListView, PixelRatio, StyleSheet, Text, View,} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import BaseScreen from '../../components/screen/BaseScreen';
import BaseHeader from "../../components/BaseHeader";
import AppUtils from "../../utils/AppUtils";
import ListItem from "../../components/ListItem";
import TextButton from "../../components/TextButton";

export default class UIParallaxScreen extends BaseScreen {
    static navigationOptions = ({navigation}) => {
        return {
            header: null,
            backgroundColor: '#fff'
        }
    };
    constructor(props) {
        super(props);
        this.state =  {

        };
    }

    render() {
        return (
            <ParallaxScrollView
                    backgroundColor="#fff"
                    fadeOutForeground={false}
                    backgroundScrollSpeed={100}
                    contentBackgroundColor="#f8f8f8"
                    stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                    parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                    renderBackground={() => (
                        <View key="background">
                            <View style={{position: 'absolute',
                                top: 0,
                                width: window.width,
                                backgroundColor: '#73c1f9',
                                height: PARALLAX_HEADER_HEIGHT}}/>
                        </View>
                    )}
                    renderForeground={() => (
                        <View key="parallax-header" style={ styles.parallaxHeader }>
                            <View style={styles.avtar}>
                                <Image
                                    source={require('../../resources/img/avtar.jpg')}
                                    style={styles.avtarImg}/>
                            </View>
                            <Text style={ styles.sectionSpeakerText }>
                                Clearives
                            </Text>
                            <Text style={ styles.sectionTitleText }>
                                果粒奶优不好喝
                            </Text>
                        </View>
                    )}
                    renderStickyHeader={() => (
                        <BaseHeader
                            style={{backgroundColor: '#fff'}}
                            title={`果粒奶优不好喝`}
                            isShowLine={true}
                        />
                    )}
                    renderFixedHeader={() => null}>
                <View style={[styles.content]}>
                    <ListItem
                        listTitle={`我的组件`}
                        style={styles.listItem}
                        onPress={() => {this.props.navigation.push('UiIndex')}}
                    >
                        <Text style={styles.textOther}>UI</Text>
                    </ListItem>
                    <ListItem
                        listTitle={`我的投资`}
                        style={styles.listItem}
                        onPress={() => {alert('我的投资')}}
                    >
                        <Text style={styles.textOther}>跳转</Text>
                    </ListItem>
                    <ListItem
                        listTitle={`Github`}
                        style={styles.listItem}
                    >
                    </ListItem>
                    <ListItem
                        listTitle={`Weibo`}
                        style={styles.listItem}
                    >
                    </ListItem>
                    <ListItem
                        listTitle={`WeiChat`}
                        style={styles.listItem}
                    >
                    </ListItem>
                </View>
                <View>

                    <TextButton
                        style={{marginTop: 50}}
                        text={`按钮`}
                        onPress={() => {alert('点击')}}
                    />
                </View>
            </ParallaxScrollView>
        );
    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 300;
const STICKY_HEADER_HEIGHT = AppUtils.getNavBarHeight() + (AppUtils.isIOSPlatform() ? AppUtils.getStatusBarHeight() : 0);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#73c1f9'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: 300,
        justifyContent: 'flex-end',
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10,
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 160
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    },
    avtar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 60
    },
    avtarImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        position: 'absolute',
        left: 10,
        top: 10
    },
});

