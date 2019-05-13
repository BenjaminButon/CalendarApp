import axios from 'axios';

export async function getPosts(){
    try{
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data.data
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
        console.log('got info from services')
        return info.data
    } catch (error) {
        console.log(error)
    }
}