import axios from 'axios';

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
    console.log(token.data)
    return token.data
    } catch(error) {
        console.log(error)
    }
}

export async function getUserInfo(token){
    try{
        var headers = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "Cookie": ""
            }
        }
        const info = await axios.get('https://ski-rent-api.herokuapp.com/api/users/me', headers)
        console.log(info.data)
        return info.data
    } catch (error) {
        console.log(error)
    }
}

export async function update(token){
    try{
        var headers = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "Cookie": ""
            }
        }
        var data = {
            user: {
                name: "Ostap Benko",
                city_id: 41
            }
        }
        const response = await axios.patch('https://ski-rent-api.herokuapp.com/api/users', data, headers)
        console.log(info.data)
        return info.data
    } catch (error) {
        console.log(error)
    }
}

