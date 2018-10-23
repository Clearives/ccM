import { handleActions } from 'redux-actions';

const defaultState = {
    Category: []
}

export default handleActions({
    [`get_category_success`]: (state, action) => {
        return {
            ...state,
            Category: action.payload.data.res.category
        }
    },
}, defaultState)
