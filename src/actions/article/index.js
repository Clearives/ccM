import { createAction } from 'redux-actions';
import actions from '../../actionCreators/article';

const getToday = createAction(`get_today`, actions.articleToday)
const getRandom = createAction(`get_random`, actions.articleRandom)

const actionCreators = {
    getToday,
    getRandom
}

export default {actionCreators}