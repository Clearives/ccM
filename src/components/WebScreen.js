import React from 'react';
import {
    StyleSheet,
    View,
    WebView,
    ActivityIndicator
} from 'react-native';
import ccMethod from '../constants/ccMethod'

const WEBVIEW_REF = 'webview';
export default class WebScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title,
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
        console.disableYellowBox = true;
    }

    componentDidMount() {
        this.setState({
            url: this.props.navigation.state.params.url ? this.props.navigation.state.params.url : ''
        })
    }

    onMessage = e => {
        console.log(e.nativeEvent.data);
    }
    setTitle = e => {
        let title = this.props.navigation.state.params.title
        if (!title || title == '正在载入...') {
            this.props.navigation.setParams({
                title: e.title || '正在载入...'
            });
        }
    }
    renderJsCode = () => ccMethod

    render() {
        let jsCode = this.renderJsCode()
        return (
            <View style={{flex: 1}}>
                <WebView
                    ref={WEBVIEW_REF}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    injectedJavaScript={jsCode}
                    onMessage={this.onMessage}
                    onNavigationStateChange={this.setTitle}
                    renderLoading={() => {
                        return (
                            <ActivityIndicator style={styles.loading} color="#999" size="large"/>
                        )
                    }}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    webView: {
        backgroundColor: '#fff',
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    }

});
