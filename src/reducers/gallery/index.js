import { handleActions } from 'redux-actions';

const defaultState = {
    Category: []
}

export default handleActions({
    [`GETCATEGORY_SUCCESS`]: (state, action) => {
        return {
            ...state,
            Category: action.payload.data.res.category
        }
    },
}, defaultState)
