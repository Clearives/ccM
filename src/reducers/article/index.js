import { handleActions } from 'redux-actions';
import Hud from '../../utils/Hud';

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
    },
    [`get_random_error`]: (state, action) => {
        alert(action.payload);
        Hud.hidden();
        return {
            ...state,
            randomData: {}
        }
    }
}, defaultState)
