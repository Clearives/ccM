import { combineReducers } from 'redux';
import counter from './counter';
import gallery from './gallery'

export default combineReducers({
  counter,
  gallery
})
