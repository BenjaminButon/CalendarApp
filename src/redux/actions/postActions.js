import {PostAction} from './types';
import {getPosts} from '../../services/services';

export const loadPosts = () => (dispatch) => {
    console.log('loadPosts action')
    getPosts()
    .then(posts => {
        dispatch({
            type: PostAction.GET_ALL_POSTS,
            payload: posts
        })
    })
    .catch(error => {
        dispatch({
            type: PostAction.ERROR,
            payload: error
        })
    })
}