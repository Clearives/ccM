import { handleActions } from 'redux-actions';

const defaultState = {
    todayData: {}
}

export default handleActions({
    [`get_today_success`]: (state, action) => {
        return {
            ...state,
            todayData: action.payload.data.data
        }
    },
}, defaultState)
