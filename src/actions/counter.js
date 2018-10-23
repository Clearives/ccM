import { createAction } from 'redux-actions';

const increment = createAction(`increment`)
const decrease = createAction(`decrease`)

const actionCreators = {
    increment,
    decrease
}

export default {actionCreators}