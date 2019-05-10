import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage} from 'react-native';
import {signIn, signUp} from '../../services/servicesPost';
import style from './SignInStyle';
import {setToken, getToken} from '../../services/storage';

export default class SignInScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'SignIn',
            headerRight: (
                <Button
                    onPress={navigation.getParam('signIn')}
                    title='Next'
                    color='white'
                />
            )
        }
    };

    state = {
        email: "",
        password: ""
    }
    componentDidMount() {
        this.props.navigation.setParams({ signIn: this._signIn})   
        getToken()
        .then(token => {
            if(token){
                console.log('signed in')
            } else {
                console.log('to token')
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    _signIn = () => {
        signIn(this.state.email, this.state.password)
        .then(data => {
            if (data.jwt){
                setToken(data.jwt)
                this.props.navigation.navigate('Home')
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return (
            <View style={style.background}>
                <TextInput autoCapitalize='none' style={style.textInput} placeholder='Email' placeholderTextColor='white' marginTop={50} onChangeText={(text) => this.setState({email: text})}/>
                <TextInput secureTextEntry={true} style={style.textInput} placeholder='Password' placeholderTextColor='white' marginTop={20} onChangeText={(text) => this.setState({password: text})}/>
                <Button title="SignUp" onPress={() => this.props.navigation.navigate('SignUp')} marginTop={100}/>
            </View>
        )
    }
}

