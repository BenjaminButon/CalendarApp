import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import UserReducer from './reducers/UserReducer';
import PostReducer from './reducers/PostReducer';
import ReduxThunk from 'redux-thunk';

const reducers = {
    user: UserReducer,
    post: PostReducer,
    form: formReducer,
    signUpForm: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(ReduxThunk))
export default store