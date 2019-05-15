import axios from 'axios';
import {getToken} from './storage';

export async function getPosts(){
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
    } catch (err){
        return []
    }
}

export async function getUsers(){
    try{
        const data = await axios.get('https://jsonplaceholder.typicode.com/users');
        return data.data
    } catch (err){
        return []
    }
}

export async function getCommentForPost(postId){
    try{
        const data = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        return data.data
    } catch (err){
        return []
    }
}

export async function getUserInfo(){
    try{
        let token = await getToken().then(storageToken => {return storageToken}).catch(error => {console.log(error)})
        var headers = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "Cookie": ""
            }
        }
        console.log('my token', token)
        const info = await axios.get('https://ski-rent-api.herokuapp.com/api/users/me', headers)
        console.log(info.data)
        console.log('got info from services')
        return info.data
    } catch (error) {
        console.log(error)
    }
}


