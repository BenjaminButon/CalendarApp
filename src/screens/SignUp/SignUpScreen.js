import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import style from './SignUpStyle';
import {signUp, signIn} from '../../services/servicesPost';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class SignUpScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'SignUp',
            headerRight: (
                <Button
                    onPress={navigation.getParam('signUp')}
                    title='Next'
                    color='white'
                />
            ),
            headerLeft: null
        }
    };

    state = {
        fullName: "",
        email: "",
        password: "",
        confirmPass: ""
    }
    componentDidMount() {
        this.props.navigation.setParams({ goHome: this._goHome});
        this.props.navigation.setParams({ signUp: this._signUp})
    }

    _goHome = () => {
        this.props.navigation.navigate('Home');
    }
    _signUp = () => {
        signUp(this.state.email, this.state.password)
        .then(data => {
            if (data.jwt){
                this.props.navigation.navigate('Home')
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    validateEmail(){
        return emailRegex.test(this.state.email)
    }
    validatePassword(){
        return this.state.password.length >=4 && this.state.password === this.state.confirmPass ? true : false
    }
    render() {
        return (
            <View style={style.background}>
                <TextInput autoCapitalize='words' style={style.textInput} placeholder='Full Name' placeholderTextColor='white' marginTop={50} onChangeText={(text) => this.setState({fullName: text})}/>
                <TextInput autoCapitalize='none' style={style.textInput} placeholder='Email' placeholderTextColor='white' marginTop={20} onChangeText={(text) => this.setState({email: text})}/>
                <TextInput secureTextEntry={true} style={style.textInput} placeholder='Password' placeholderTextColor='white' marginTop={20} onChangeText={(text) => this.setState({password: text})}/>
                <TextInput secureTextEntry={true} style={style.textInput} placeholder='Confirm password' placeholderTextColor='white' marginTop={20} onChangeText={(text) => this.setState({confirmPass: text})}/>
            </View>
        )
    }
}
