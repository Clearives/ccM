import * as types from '../constants/ActionTypes';
import { createAction } from 'redux-actions';

const increment = createAction(types.INCREMENT)
const decrease = createAction(types.DECREASE)

const actionCreators = {
    increment,
    decrease
}

export default {actionCreators}