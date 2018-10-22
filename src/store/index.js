import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import AppReducers from '../reducers';


const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
    duration: true
})
const middlewares = [
    loggerMiddleware,
    promiseMiddleware({promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']})
]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(AppReducers)

export default store