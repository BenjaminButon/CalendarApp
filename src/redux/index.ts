import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import UserReducer from './reducers/UserReducer';
import ReduxThunk from 'redux-thunk';

const reducers = {
    user: UserReducer,
    form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(ReduxThunk))
export default store