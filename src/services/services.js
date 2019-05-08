import axios from 'axios';

export async function getPosts(){
    try{
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    if (data['status'] != 200){
        throw('bad status')
    }
    return data
    } catch (err){
        return []
    }
}

export async function getUsers(){
    try{
        const data = await axios.get('https://jsonplaceholder.typicode.com/users');
        if(data['status'] != 200){
            throw('bad status')
        }
        return data
    } catch (err){
        return []
    }
}