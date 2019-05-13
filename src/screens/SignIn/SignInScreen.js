import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage} from 'react-native';
import {signIn, signUp} from '../../services/servicesPost';
import style from './SignInStyle';
import {setToken, getToken} from '../../services/storage';
import { email } from 'redux-form-validators';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';



const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const required = (str) => {
    if (str) {
        return null
    } else {
        return 'required'
    }
}

const validateEmail = (email) => {
    if (emailRegex.test(email)) {
        return null
    } else {
        return 'wrong email'
    }
}

 class SignInScreen extends React.Component{
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

    renderField = ({input, style, meta: {error}}) => (
        <View>
            <TextInput {...input} style={style} onChangeText/>
        </View>
      )

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
        if (this.props.valid){
            signIn(this.props.email, this.state.password)
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
    }

    validatePassword(){
        return this.state.password.length >= 4 ? true : false
    }
    render() {
        return (
            <View style={style.background}>
                <Field name='email' component={this.renderField} style={style.textInput} validate={[required, validateEmail]}/>
                <Field name='password' component={this.renderField} style={style.textInput} validate={[required]}/>
                <Button title="SignUp" onPress={() => {this.props.navigation.navigate('SignUp')}} marginTop={100}/>
            </View>
        )
    }
}

const SimpleForm = reduxForm({
    form: 'SignIn'
})(SignInScreen)


const mapStateToProps = (state) => {
    const selector = formValueSelector('SignIn')
    const email = selector(state, 'email')
    return {email}
}
export default connect(mapStateToProps, null)(SimpleForm)