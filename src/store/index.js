import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import AppReducers from '../reducers';


const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
    duration: true
})
const middlewares = [
    loggerMiddleware
]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(AppReducers)

export default store