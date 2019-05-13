import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import nameReducer from './reducers/name';

const reducers = {
    name: nameReducer,
    form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
export default store