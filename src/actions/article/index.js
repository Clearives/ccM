import { createAction } from 'redux-actions';
import actions from '../../actionCreators/article';

const getToday = createAction(`get_today`, actions.articleToday)

const actionCreators = {
    getToday
}

export default {actionCreators}