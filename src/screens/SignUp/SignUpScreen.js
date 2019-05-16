import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {style, warning} from './SignUpStyle';
import {signUp} from '../../services/servicesPost';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {setToken} from '../../services/storage';
import {connect} from 'react-redux';
import {required, validateEmail, validatePassword, lowerCase, capitalizeWords} from '../../validation/validators';
import { TabRouter } from 'react-navigation';


class SignUpScreen extends React.Component{
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

    renderField = ({input, style, placeholder, autoCapitalize, secured, meta: {touched, error}}) => {
        return (   <View>
            <TextInput {...input} autoCapitalize={autoCapitalize} secureTextEntry={secured} style={[...style, touched && error && warning.wrong]} placeholderTextColor='white' placeholder={placeholder}/>
            {touched && error && <Text style={warning.warning}>{error}</Text>}
        </View>
    )
    }

    componentDidMount() {
        this.props.navigation.setParams({ signUp: this._signUp})
    }
    _signUp = () => {
        if (this.props.valid){
            signUp(this.props.email, this.props.password, this.props.fullName)
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
    render() {
        return (
            <View style={style.background}>
                <Field name='fullName' 
                component={this.renderField} 
                style={[style.textInput, style.email]} 
                placeholder='Full Name' 
                validate={[required]}
                autoCapitalize='words'/>
                <Field name='email' 
                component={this.renderField} 
                style={[style.textInput, style.password]} 
                placeholder='Email' 
                validate={[required, validateEmail]}
                autoCapitalize='none'/>
                <Field name='password' component={this.renderField} style={[style.textInput, style.password]} placeholder='Password' validate={[required, validatePassword]} secured={true}/>
                <Field name='confirmPassword' component={this.renderField} style={[style.textInput, style.password]} placeholder='Confirm password' validate={[required, validatePassword]} secured={true}/>
            </View>
        )
    }
}

const SignUpForm = reduxForm({
    form: 'SignUp'
})(SignUpScreen)

const mapStateToProps = (state) => {
    const selector = formValueSelector('SignUp')
    const fullName = selector(state, 'fullName')
    const email = selector(state, 'email')
    const password = selector(state, 'password')
    const confirmPassword = selector(state, 'confirmPassword')
    return {email, password, fullName, confirmPassword}
}
export default connect(mapStateToProps, null)(SignUpForm)