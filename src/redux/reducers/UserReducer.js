import {NAME_CHANGED, GET_USER_INFO, UPDATE_USER} from '../actions/types';
const initialState = {

    info: {
        name: '',
        email: ''
    }
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case NAME_CHANGED: {
            console.log(action)
            return {
                ...state, 
                info: {
                    ...state,
                    name: action.payload
                }
            }
        }
        case UPDATE_USER: {
            console.log(action)
            return {
                ...state,
                info: {
                    ...state.info,
                    name: action.payload.name
                }
            }
        }
        case GET_USER_INFO: {
            return {
                ...state,
                info: action.payload
            }
        }
        case 'ERROR': {
            console.log('reducer error')
            return state
        }
        default: {
            return state
        }
    }

}

export default UserReducer