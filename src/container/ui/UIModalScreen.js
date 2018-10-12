import React from 'react';
import {ScrollView, Modal, StyleSheet, Text, View, TouchableHighlight, Switch, Platform} from 'react-native';
import BaseScreen from '../../components/screen/BaseScreen';
import TextButton from '../../components/TextButton';
import AppUtils from "../../utils/AppUtils";

let width = AppUtils.getScreenWidth();
export default class UIModalScreen extends BaseScreen {
    static navigationOptions = ({navigation}) => {
        return {
            header: null
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: false,
        };
        this.navTitle = 'UIModal';
        this.navShowLine = true;
        this.navShowRight = true;
        this.navRightView = <Text onPress={() => {
            this._setModalVisible(true)
        }}>弹窗</Text>
    }

    componentWillMount() {
        this.showLoadingView();
    }

    componentDidMount() {
        this.showNormalView();
    }

    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    _setAnimationType = (type) => {
        this.setState({animationType: type});
    }

    _toggleTransparent = () => {
        this.setState({transparent: !this.state.transparent});
    }

    renderNormalContentView = () => {
        let modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        }
        let innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: '#fff', padding: 20}
            : null;
        let activeTextStyle = {
            backgroundColor: '#ddd',
            color: '#f60'
        }
        return (
            <ScrollView>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this._setModalVisible(false)}
                >
                    <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <Text>This modal was
                                presented {this.state.animationType === 'none' ? 'without' : 'with'} animation.</Text>
                            <TextB
                                onPress={this._setModalVisible.bind(this, false)}
                                style={styles.modalText}>
                                Close
                            </TextB>
                        </View>
                    </View>
                </Modal>

                <View style={styles.tabContainer}>
                    <View style={{height: 44,alignItems: 'center', justifyContent: 'center',}}>
                        <Text>Animation Type</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text onPress={() => {this._setAnimationType('none')}}
                              style={[styles.tabText, this.state.animationType === 'none' ? activeTextStyle : {}]}>
                            none
                        </Text>
                        <Text onPress={() => {this._setAnimationType('slide')}}
                              style={[styles.tabText, this.state.animationType === 'slide' ? activeTextStyle : {}]}>
                            slide
                        </Text>
                        <Text onPress={() => {this._setAnimationType('fade')}}
                              style={[styles.tabText, this.state.animationType === 'fade' ? activeTextStyle : {}]}>
                            fade
                        </Text>
                    </View>
                </View>

                <View style={{marginTop: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'grey',marginRight: 20}}>Transparent</Text>
                    <Switch value={this.state.transparent} onValueChange={() => {this._toggleTransparent()}}/>
                </View>
                <TextButton
                    style={{marginTop: 100}}
                    text={`弹窗`}
                    onPress={() => {this._setModalVisible(true)}}
                />
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        marginTop: 10,
    },
    pickerItem: {
        fontSize: 16,
    },

    tabContainer: {
        height: 88
    },
    tabText: {
        height: 44,
        flex: 1,
        backgroundColor: '#ccc',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        textAlignVertical:'center',
        ...Platform.select({
            ios:{
                lineHeight:44,
            },
            android:{
            }
        })
    }
});