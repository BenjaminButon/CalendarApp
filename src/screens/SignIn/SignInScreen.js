import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import style from './SignInStyle'

export default class SignInScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'SignIn',
            headerRight: (
                <Button
                    onPress={navigation.getParam('goHome')}
                    title='Next'
                    color='white'
                />
            )
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
                <TextInput autoCapitalize='none' style={style.textInput} placeholder='Email' placeholderTextColor='white' marginTop={50}/>
                <TextInput secureTextEntry={true} style={style.textInput} placeholder='Password' placeholderTextColor='white' marginTop={20}/>
                <Button title="SignUp" onPress={() => this.props.navigation.navigate('SignUp')} marginTop={100}/>
            </View>
        )
    }
}

