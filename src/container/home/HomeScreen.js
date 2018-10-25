import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import AppUtils from '../../utils/AppUtils';
import TextButton from '../../components/TextButton';
import Toast from '../../utils/Toast';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import Actions from '../../actions/index'


class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: 0,
            ScreenHeight: 0,
            statusBarHeight: 0,
            navBarHeight: 0,
            tabBarHeight: 0,
            bottomMargin: 0
        }
    }

    componentDidMount() {
        this.setState({
            screenWidth: AppUtils.getScreenWidth(),
            ScreenHeight: AppUtils.getScreenHeight(),
            statusBarHeight: AppUtils.getStatusBarHeight(),
            navBarHeight: AppUtils.getNavBarHeight(),
            tabBarHeight: AppUtils.getTabBarHeight(),
            bottomMargin: AppUtils.getBottomMargin()
        })
        /** 调试code */
        // this.props.navigation.push('UIAnimated')
    }

    handleClick = (i) => {
        Toast.showToast('12')
        this.props.counterIncrement(i)
    }
    handleClick2 = () => {
        this.props.counterDecrease()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    AppUtils
                </Text>
                <View style={{paddingLeft: 60,paddingRight: 60}}>
                    <Text style={{fontSize: 20}}>screenWidth: {this.state.screenWidth}</Text>
                    <Text style={{fontSize: 20}}>ScreenHeight: {this.state.ScreenHeight}</Text>
                    <Text style={{fontSize: 20}}>statusBarHeight: {this.state.statusBarHeight}</Text>
                    <Text style={{fontSize: 20}}>navBarHeight: {this.state.navBarHeight}</Text>
                    <Text style={{fontSize: 20}}>tabBarHeight: {this.state.tabBarHeight}</Text>
                    <Text style={{fontSize: 20}}>bottomMargin: {this.state.bottomMargin}</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={{fontSize: 20, color: '#f00', marginBottom: 20}}>
                        {this.props.counter.count}
                    </Text>
                    <View style={{flexDirection: 'row'}}>

                        <View style={{width: 100, height: 50, flex: 1}}>
                            <TextButton
                                onPress={() => this.handleClick(2)}
                                text={`+`}
                            />
                        </View>
                        <View style={{width: 100, height: 50, flex: 1}}>
                            <TextButton
                                onPress={this.handleClick2}
                                text={`-`}
                            />
                        </View>
                    </View>
                </View>
                <Button onClick={() => Toast.showLoadingToast('加载中...')}>antd-mobile</Button>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = () => (Actions.dispatch('counter'))

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,
        marginBottom: 30,
        color: '#f60'
    },
    counter: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    }
});

