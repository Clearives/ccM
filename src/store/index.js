import {createStore, applyMiddleware} from 'redux';
import AppReducers from '../reducers';

const middlewares = []

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(AppReducers)

export default store