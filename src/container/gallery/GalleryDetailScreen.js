import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, ListView, Dimensions, ActivityIndicator, Modal, TouchableHighlight} from "react-native";
import BaseScreen from "../../components/screen/BaseScreen";
import ImageViewer from 'react-native-image-zoom-viewer';
import Http from "../../service/http";
import LoadImage from "../../components/LoadImage";
import AppUtils from "../../utils/AppUtils";

const {width, height} = Dimensions.get('window');
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
});
export default class GalleryIndexScreen extends BaseScreen {
    static navigationOptions = ({navigation}) => {
        return {
            header: null
        }
    };

    constructor(props) {
        super(props)
        this.navType = 0;
        this.navTitle = props.navigation.state.params.title;
        this.navShowLine = true;
        this.state = {isModal: false, ready: true, galleryDetail: [], index: 0}
    }

    componentWillMount() {
        super.componentWillMount()
        this.showLoadingView()
        this.getGalleryDetail()
    }

    componentDidMount() {
        super.componentDidMount()
    }

    itemView = (rowData, sectionId, rowId) => {
        return (
            <TouchableOpacity onPress={() => {
                this.setState({isModal: true, index: rowId})
            }}>
                <View style={{width: width / 2 - 2, marginBottom: 4, backgroundColor: '#fff', minHeight: 100}}>
                    <LoadImage
                        placeholderColor={'#f8f8f8'}
                        animationStyle={`fade`}
                        source={{uri: rowData.thumb}}
                        style={{width: width / 2 - 2, height: (width / 2 - 2) * (540 / 350)}}
                    />
                </View>
            </TouchableOpacity>)
    };

    getGalleryDetail = () => {
        let cid = this.props.navigation.state.params.cid
        let url = !cid ? "http://service.picasso.adesk.com/v1/vertical/vertical?limit=30&skip=180&adult=false&first=0&order=hot" :
            "http://service.picasso.adesk.com/v1/vertical/category/" + cid + "/vertical?limit=30&adult=false&first=1&order=new"
        Http.get(url)
            .then(res => {
                this.setState({galleryDetail: res.data.res.vertical})
                setTimeout(() => {
                    this.setState({ready: false})
                    this.showNormalView()
                }, 500)
            })
            .catch(error => {
                console.error(error);
            });
    }

    getImagesArr = (img) => {
        let imagesArr = []
        img.map((item) => {
            imagesArr.push({
                url: item.img
            })
        })
        return imagesArr
    }

    _render = () => {
        let c = ds.cloneWithRows(this.state.galleryDetail)
        const images = this.getImagesArr(this.state.galleryDetail)
        return (
            <View style={{flex: 1, backgroundColor: '#f8f8f8'}}>
                {
                    this.state.isModal
                        ? <View style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}>
                            <Modal
                                animationType={"fade"}
                                transparent={true}
                                visible={this.state.isModal}
                            >
                                <ImageViewer imageUrls={images}
                                             index={parseInt(this.state.index)}
                                             onClick={() => {
                                                 this.setState({isModal: false})
                                             }}
                                />
                            </Modal>
                        </View>
                        :
                        <View style={styles.itemContainer}>
                            <ListView
                                enableEmptySections
                                initialListSize={4}
                                contentContainerStyle={styles.list}
                                dataSource={c}
                                renderRow={this.itemView}
                            />
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    loadding: {
        marginTop: 100
    },
    itemContainer: {
        flex: 1,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    }
});
