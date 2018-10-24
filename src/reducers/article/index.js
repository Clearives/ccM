import { handleActions } from 'redux-actions';

const defaultState = {
    todayData: {},
    randomData: {}
}

export default handleActions({
    [`get_today_success`]: (state, action) => {
        return {
            ...state,
            todayData: action.payload.data.data
        }
    },
    [`get_random_success`]: (state, action) => {
        return {
            ...state,
            randomData: action.payload.data.data
        }
    }
}, defaultState)
