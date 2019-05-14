import {AsyncStorage} from 'react-native';

export async function setToken(token){
    try {
        await AsyncStorage.setItem('token', token)
    } catch(error) {
        console.log(error)
    }
}

export async function getToken(){
    try {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            return token
        }
    } catch(error) {
        console.log(error)
    }
}

export async function signOut(){
    try {
        await AsyncStorage.clear()
    } catch (error) {
        console.log(error)
    }
}

