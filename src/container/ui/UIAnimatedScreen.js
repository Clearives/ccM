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
        this.navRightView = <Text onPress={() => {}}>设置</Text>

        this.state = {
            rotateValue: new Animated.Value(0),
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

    _render = () => {
        const rotate = this.state.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <ScrollView>
                <View style={styles.container}>
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
                </View>
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
    }
});