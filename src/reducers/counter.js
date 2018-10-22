import { handleActions } from 'redux-actions';
import { INCREMENT, DECREASE} from '../constants/ActionTypes';

const defaultState = {
    count: 0
}

export default handleActions({
    [INCREMENT]: state => ({...state, count: state.count + 1}),
    [DECREASE]: state => ({...state, count: state.count - 1})
}, defaultState)
