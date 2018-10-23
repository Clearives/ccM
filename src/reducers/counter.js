import {handleActions} from 'redux-actions';

const defaultState = {
    count: 0
}

export default handleActions({
    increment: (state, action) => {
        return {
            ...state,
            count: state.count + action.payload
        }
    },
    decrease: state => {
        return {
            ...state,
            count: state.count - 1
        }
    }
}, defaultState)

