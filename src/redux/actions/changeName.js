import {NAME_CHANGED, GET_USER_INFO, UPDATE_USER} from './types';
import {getUserInfo} from '../../services/services';
import {update} from '../../services/servicesPost';

export const changeName = (newName) => (dispatch) => {
    update(newName)
    .then(data => {
        dispatch({
            type: UPDATE_USER,
            payload: data
        })
    })
    .catch(error => {
        dispatch({
            type: 'ERROR'
        })
    })
}

export const _getUserInfo = () => (dispatch, getState) => {
    console.log(getState())
    getUserInfo()
    .then(info => { 
        console.log(info)
        dispatch({
            type: GET_USER_INFO,
            payload: info
        })
    })
    .catch(error => {
        dispatch({
            type: 'ERROR'
        })
    })
}