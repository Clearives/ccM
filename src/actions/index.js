import {bindActionCreators} from 'redux';
import counterActions from './counter.js';
import galleryActions from './gallery'

const actions = {
    counter: counterActions,
    gallery: galleryActions
}

const camelCase = (str) => {
    let re = /-(\w)/g
    str = str.replace(re, ($0, $1) => {
        return $1.toUpperCase()
    });
    return str
};

const convert = (actionCreators, name) => {
    let ret = {}
    for (let k in actionCreators) {
        let newActionName = camelCase(name + '-' + k)
        ret[newActionName] = actionCreators[k]
    }
    return ret
}

const dispatch = name => dispatch => {
    if (Array.isArray(name)) {
        let tempActionCreators = {}
        for (let i = 0; i < name.length; i++) {
            Object.assign(tempActionCreators, actions[name[i]].actionCreators)
        }
        return bindActionCreators(convert(tempActionCreators, name), dispatch)
    } else {
        return bindActionCreators(convert(actions[name].actionCreators, name), dispatch)
    }
}

export default {dispatch}
