import React, {Component} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {signIn} from '../../services/servicesPost';
import {style, warning} from './SignInStyle';
import {setToken, getToken} from '../../services/storage';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';
import {required, validateEmail, validatePassword} from '../../validation/validators';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const _validate = values => {
    const errors = {}
    if(!values.email){
        errors.email = 'Required'
    } else if (!emailRegex.test(value.email)){
        errors.email = 'Invalid email address'
    }
    if (!values.password){
        errors.password = 'Required'
    }
    return errors
}

const correctEmail = [style.textInput, style.email]
const correctPassword = [style.textInput, style.password]
const wrongInput = style.wrong
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

    renderField = ({input, style, placeholder, autoCapitalize, secured, meta: {touched, error}}) => {
             return (   <View>
                     <TextInput {...input} autoCapitalize={autoCapitalize} secureTextEntry={secured} style={[...style, touched && error && warning.wrong]} placeholderTextColor='white' placeholder={placeholder}/>
                     {touched && error && <Text style={warning.warning}>{error}</Text>}
                 </View>
             )
    }

    componentDidMount() {
        this.props.navigation.setParams({ signIn: this._signIn})
    }

    _signIn = () => {
        console.log(this.props.valid)
        if (this.props.valid){
            signIn(this.props.email, this.props.password)
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
                <Field name='email' component={this.renderField} autoCapitalize='none' style={correctEmail} placeholder='Email' validate={[required, validateEmail]}/>
                <Field name='password' component={this.renderField} style={correctPassword} placeholder='Password' secured={true} validate={[required, validatePassword]}/>
                <Button title="SignUp" onPress={() => {this.props.navigation.navigate('SignUp')}} marginTop={100}/>
            </View>
        )
    }
}

const SimpleForm = reduxForm({
    form: 'SignIn'
    //_validate
})(SignInScreen)


const mapStateToProps = (state) => {
    const selector = formValueSelector('SignIn')
    const email = selector(state, 'email')
    const password = selector(state, 'password')
    return {email, password}
}
export default connect(mapStateToProps, null)(SimpleForm)