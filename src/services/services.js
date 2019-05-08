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