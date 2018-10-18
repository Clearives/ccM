import React from 'react';
import {ScrollView, Animated, Text, View, StyleSheet, Easing} from 'react-native';
import BaseScreen from '../../components/screen/BaseScreen';

export default class UIAnimatedScreen extends BaseScreen {
    static navigationOptions = ({navigation}) => {
        return {
            header: null
        }
    };

    constructor(props) {
        super(props);

        this.navTitle = 'UIAnimated';
        this.navShowLine = true;
        this.navShowRight = true;
        this.navRightView = <Text onPress={() => {this.tabView()}}>蹦跶一下</Text>

        this.state = {
            rotateValue: new Animated.Value(0),
            animData: [1,2,3].map(() => new Animated.Value(0)),
            viewID: true
        }
    }

    componentWillMount() {
        this.showLoadingView();
    }

    componentDidMount() {
        this.showNormalView();
        this.handleRotate();
    }

    handleRotate = () => {
        this.state.rotateValue.setValue(0)
        Animated.timing(
            this.state.rotateValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.handleRotate())
    }

    handleAnim = () => {
        let timing = Animated.timing;
        Animated.sequence([
                Animated.stagger(200, this.state.animData.map(left => {
                    return timing(left, {
                        toValue: 1,
                    });
                }).concat(
                    this.state.animData.map(left => {
                        return timing(left, {
                            toValue: 0,
                        });
                    })
                )),
                Animated.delay(400),
                timing(this.state.animData[0], {
                    toValue: 1
                }),
                timing(this.state.animData[1], {
                    toValue: -1
                }),
                timing(this.state.animData[2], {
                    toValue: 0.8
                }),
                Animated.delay(400),
                Animated.parallel(this.state.animData.map((anim) => timing(anim, {
                    toValue: 0
                })))
            ]
        ).start();
    }

    tabView = () => {
        let viewID = this.state.viewID;
        this.setState({viewID: !this.state.viewID})
        if (viewID) {
            this.handleAnim();
        }
    }

    _render = () => {
        const rotate = this.state.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        let views = this.state.animData.map((value, i) => {
            return (
                <Animated.View
                    key={i}
                    style={[styles.card, {
                        left: value.interpolate({
                            inputRange: [0,1],
                            outputRange: [0,200]
                        })
                    }]}>
                    <Text style={styles.text}>我是第{i + 1}个View</Text>
                </Animated.View>
            );
        });
        return (
            <ScrollView>
                {
                    this.state.viewID ? <View style={styles.container}>
                        <Animated.Image
                            style={{
                                width: 200,
                                height: 200,
                                transform: [{rotate: rotate}] }}
                            source={{uri: 'http://pc1g4qy0i.bkt.clouddn.com/upload/1233222.png'}}
                        />
                        <Animated.Image
                            style={{
                                width: 300,
                                height: 300,
                                marginTop: 50,
                                transform: [{rotate: rotate}] }}
                            source={{uri: 'http://pc1g4qy0i.bkt.clouddn.com/upload/1233222.png'}}
                        />
                    </View> : <View style={styles.container}>
                        <Text>sequence/delay/stagger/parallel演示</Text>
                        {views}
                    </View>
                }
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18
    }
});