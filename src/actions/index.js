import _ from 'lodash';
import {bindActionCreators}  from 'redux';
import counterActions from './counter.js';

const actions = {
  counter: counterActions
}

const convert = (actionCreators, name) => {
  let ret = {}
  _.each(actionCreators, function (action, funcName) {
    let newActionName = _.camelCase(name + '_' + funcName)
    ret[newActionName] = action
  })
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
