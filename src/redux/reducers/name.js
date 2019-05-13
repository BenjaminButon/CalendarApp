import NAME_CHANGED from '../actions/types';

const initialState = {
    name: 'BlaBlaBla'
}

const nameReducer = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        
        case NAME_CHANGED: {
            console.log(action)
            return {...state, name: action.payload}
        }
        default: {
            return state
        }
    }
}

export default nameReducer