import {UserAction} from './types';
import {getUserInfo} from '../../services/services';
import {update} from '../../services/servicesPost';

export const changeName = (newName) => (dispatch) => {
    update(newName)
    .then(data => {
        dispatch({
            type: UserAction.UPDATE_USER,
            payload: data
        })
    })
    .catch(error => {
        dispatch({
            type: UserAction.ERROR,
            payload: error
        })
    })
}

export const _getUserInfo = () => (dispatch, getState) => {
    console.log(getState())
    getUserInfo()
    .then(info => { 
        console.log(info)
        dispatch({
            type: UserAction.GET_USER_INFO,
            payload: info
        })
    })
    .catch(error => {
        dispatch({
            type: UserAction.ERROR,
            payload: error
        })
    })
}