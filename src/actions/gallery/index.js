import { createAction } from 'redux-actions';
import actions from '../../actionCreators/gallery';

const getCategory = createAction(`GETCATEGORY`, actions.galleryCategory)

const actionCreators = {
    getCategory
}

export default {actionCreators}