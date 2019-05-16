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
            console.log(action.payload)
            const newPosts = state.posts
            newPosts[action.payload.is - 1] = action.payload
            return {
                ...state,
                ...state.posts[action.payload.id - 1] = action.payload,
                posts: [...state.posts]
                
                
            }
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