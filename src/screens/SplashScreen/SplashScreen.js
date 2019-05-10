import React, {Component} from 'react';
import {ActivityIndicator, View, StatusBar} from 'react-native';
import {getToken} from '../../services/storage'

export default class SplashScreen extends React.Component{
    constructor(){
        super()
        this._signedIn()
    }

    _signedIn = () =>{
        getToken()
        .then(token => {
            if(token){
                this.props.navigation.navigate('Home')
            } else {
                this.props.navigation.navigate('SignIn')
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        return (
            <View style={style.container}>
                <ActivityIndicator/>
                <StatusBar barStyle='default'/>
            </View>
        )
    }
}
