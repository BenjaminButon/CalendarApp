import {PostAction} from '../actions/types'

const initialState = {
    posts: []
}

const PostReducer = (state = initialState, action) => {
    switch(action.type){
        case PostAction.GET_ALL_POSTS : {
            return {
                ...state,
                posts: [...action.payload]
            }
        }
        case PostAction.CHANGE_INFO : {
            const index = state.posts.findIndex(post => post.id == action.payload.id)
            if (index >= 0){
                state.posts[index] = {...state.posts[index], ...action.payload}
            return {
                ...state,
                posts: [...state.posts]
                
                
            }} else { return state}
        }
        case PostAction.ERROR : {
            console.log('PostReducer Error => ', action.payload)
            return state
        }
        default: {
            return state
        }
    }
}

export default PostReducer