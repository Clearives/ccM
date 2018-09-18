import React, {Component} from 'react';
import MainComponent from './MainComponent'

export default class App extends Component {
    constructor(props) { //
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <MainComponent />
        );
    }
}

