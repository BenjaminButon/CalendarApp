import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import style from './SignUpStyle'

export default class SignUpScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'SignUp',
            headerRight: (
                <Button
                    onPress={navigation.getParam('goHome')}
                    title='Next'
                    color='white'
                />
            ),
            headerLeft: null
        }
    };

    componentDidMount() {
        this.props.navigation.setParams({ goHome: this._goHome});
    }

    _goHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={style.background}>
                <TextInput autoCapitalize='words' style={style.textInput} placeholder='Full Name' placeholderTextColor='white' marginTop={50}/>
                <TextInput autoCapitalize='none' style={style.textInput} placeholder='Email' placeholderTextColor='white' marginTop={20}/>
                <TextInput secureTextEntry={true} style={style.textInput} placeholder='Password' placeholderTextColor='white' marginTop={20}/>
                <TextInput secureTextEntry={true} style={style.textInput} placeholder='Confirm password' placeholderTextColor='white' marginTop={20}/>
            </View>
        )
    }
}
