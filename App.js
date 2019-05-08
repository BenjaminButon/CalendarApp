/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import SignIn from './src/screens/SignIn/SignInScreen';
import SignUpScreen from './src/screens/SignUp/SignUpScreen';
import Home from './src/screens/Home/HomeScreen';
import Post from './src/screens/PostScreen/PostScreen';

const AuthNavigator = createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignIn
  }, 
  {
  initialRouteName: 'SignIn',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(16, 90, 249)',
      height: 120
    }, 
    headerTintColor: '#fff'
  }
  }
)
const AppNavigator = createStackNavigator({
    Home: {
      screen: Home
    },
    Post: {
      screen: Post
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(16, 90, 249)',
        height: 120
      },
      headerTintColor: '#fff'
    }
  }
)

const AppContainer = createAppContainer(createSwitchNavigator({
  App: AppNavigator,
  Auth: AuthNavigator
},
{
  initialRouteName: 'App'
}))

export default class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      isEmpty: true
    }
    
    setInterval(() => (
      this.setState(previousState => (
        { isEmpty: !previousState.isEmpty}
      ))
    ), 1000);
    
  }

  
  getGreating() {
    if (this.state.text == 'Hello there!') {
      this.setState(previousState => ({text: ''}))
    } else { this.setState(previousState => ({text: 'Hello there'}))}
  } 
  render(){
    return (
        <AppContainer/>
    )
  }
}
