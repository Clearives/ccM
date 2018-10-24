import {combineReducers} from 'redux';
import counter from './counter';
import gallery from './gallery';
import article from './article'

export default combineReducers({
    counter,
    gallery,
    article
})
