import { createAction } from 'redux-actions';
import actions from '../async/gallery';

const getCategory = createAction(`GETCATEGORY`, actions.galleryCategory)

const actionCreators = {
    getCategory
}

export default {actionCreators}