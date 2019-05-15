import {UserAction} from '../actions/types';
const initialState = {

    info: {
        name: '',
        email: ''
    }
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case UserAction.NAME_CHANGED: {
            console.log(action)
            return {
                ...state, 
                info: {
                    ...state,
                    name: action.payload
                }
            }
        }
        case UserAction.UPDATE_USER: {
            console.log(action)
            return {
                ...state,
                info: {
                    ...state.info,
                    name: action.payload.name
                }
            }
        }
        case UserAction.GET_USER_INFO: {
            return {
                ...state,
                info: action.payload
            }
        }
        case UserAction.ERROR: {
            return state
        }
        default: {
            return state
        }
    }

}

export default UserReducer