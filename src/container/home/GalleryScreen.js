import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, Dimensions} from "react-native";
import BaseScreen from "../../components/screen/BaseScreen";
import Swiper from 'react-native-swiper'
import Http from "../../service/http";
import LoadImage from "../../components/LoadImage";
const {width, height} = Dimensions.get('window');
import { connect } from 'react-redux';
import Actions from '../../actions/index'

class GalleryScreen extends BaseScreen {
    constructor(props) {
        super(props);
        this.navType = 0;
        this.navTitle = '图库';
        this.navHideBack = true;
        this.navShowLine = true;
        this.navShowRight = true;
        this.navRightView = <Text onPress={() => {this.refresh()}}>刷新</Text>
    }
    componentWillMount() {
        this.showLoadingView();
        this.props.galleryGetCategory();
    }
    componentDidMount() {
        this.showNormalView();
    }
    refresh = () => {
        this.showLoadingView();
        this.props.galleryGetCategory();
        setTimeout(() => {
            this.showNormalView();
        }, 1000)
    }

    _renderItem = ({item ,index}) => {
        let mr = index % 2 === 0 ? 4 : 0
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.push('GalleryDetail', {
                        transition: 'forInitial',
                        cid: item.id,
                        title: item.name
                    });
                }}
            >
                <View style={{width: width / 2 - 2, marginTop: 20, marginRight: mr, backgroundColor: '#fff', minHeight: 100}}>
                    <LoadImage
                        placeholderColor={'#f8f8f8'}
                        animationStyle={`fade`}
                        source={{uri: item.cover}}
                        style={{width: width / 2 - 2, height: (width / 2 - 2) * 480 / 640}}
                    />
                    <Text
                        style={{fontSize: 14, color: '#888586', marginTop: 12, textAlign: 'center'}}
                        numberOfLines={3}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _render = () => {
        return (
            <ScrollView>
                <View style={{height: 120}}>
                    <Swiper style={styles.wrapper} height={120} paginationStyle={{bottom: 23, left: null, right: 10}}
                            autoplay>
                        <View style={[styles.slide, {backgroundColor: '#9DD6EB'}]}>
                            <Text style={styles.text}>slide1</Text>
                        </View>
                        <View style={[styles.slide, {backgroundColor: '#42b4eb'}]}>
                            <Text style={styles.text}>slide2</Text>
                        </View>
                        <View style={[styles.slide, {backgroundColor: '#eba788'}]}>
                            <Text style={styles.text}>slide3</Text>
                        </View>
                    </Swiper>
                </View>
                <View style={[styles.flexContainer, {padding: 20, backgroundColor: '#fff'}]}>
                    <View style={[styles.card, styles.card1]}>
                        <Text style={{color: '#fff'}}>创建相册</Text>
                    </View>
                    <View style={[styles.card, styles.card2]}>
                        <Text style={{color: '#fff'}} onPress={() => {alert('我的相册')}}>我的相册</Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#fff', marginTop: 0}}>
                    <View style={[styles.flexContainer, {height: 50, paddingLeft: 20, paddingRight: 20}]}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start',}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}
                                  onPress={() => {
                                      this.props.navigation.push('GalleryDetail', {
                                          transition: 'forInitial',
                                          title: '热门图库'
                                      });
                                  }}
                            >热门</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end',}}>
                            <Text style={{color: '#73c1f9'}}>查看全部</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <FlatList
                        data={this.props.gallery.Category}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    gallery: state.gallery
})

const mapDispatchToProps = () => (Actions.dispatch('gallery'))

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    flexContainer: {
        flexDirection: 'row'
    },
    card: {
        flex: 1,
        height: 60,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card1: {
        backgroundColor: '#73c1f9'
    },
    card2: {
        backgroundColor: '#f0c945'
    },
    itemContainer: {
        flex: 1,
        marginBottom: 20
    },
    list: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    }
});