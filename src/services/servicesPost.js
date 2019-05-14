import axios from 'axios';
import {changeName} from '../redux/actions/changeName';
import {getToken} from './storage';

const signHeaders = {
    headers: {
        "Content-Type": "application/json",
        "Cookie": ""
    }
}

export async function signUp(email, password){
    try{
    var data = {
        user: {
            email: email,
            password: password
        }
    }
    const token = await axios.post('https://ski-rent-api.herokuapp.com/api/sign_up', data, signHeaders)
    console.log(token.data)
    return token.data
    } catch(error) {

    }
}

export async function signIn(email, password){
    try{
    var data = {
        auth: {
            // email: "email2@email.com",
            // password: "password"
            email: email,
            password: password
        }
    }
    const token = await axios.post('https://ski-rent-api.herokuapp.com/api/user_token', data, signHeaders)
    return token.data
    } catch(error) {
        console.log(error)
    }
}


export async function update(userName){
    try{
        let token = await getToken().then(storageToken => {return storageToken}).catch(error => {console.log(error)})
        var headers = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "Cookie": ""
            }
        }
        var data = {
            user: {
                name: userName
            }
        }
        const response = await axios.patch('https://ski-rent-api.herokuapp.com/api/users', data, headers)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

