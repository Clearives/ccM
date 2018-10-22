import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from '../store/index';
import MainComponent from './MainComponent';

export default class App extends Component {
    constructor(props) { //
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <Provider store={store}>
                <MainComponent />
            </Provider>
        );
    }
}

