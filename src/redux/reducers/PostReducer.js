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