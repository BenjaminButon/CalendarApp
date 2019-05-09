/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator, NavigationActions, SwitchNavigator} from 'react-navigation';
import SignIn from './src/screens/SignIn/SignInScreen';
import SignUpScreen from './src/screens/SignUp/SignUpScreen';
import Home from './src/screens/Home/HomeScreen';
import Post from './src/screens/PostScreen/PostScreen';
import { getToken } from './src/services/storage';


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

const MainNavigator = createSwitchNavigator({
  App: AppNavigator,
  Auth: AuthNavigator
},
{
  initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(MainNavigator)

export default class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      isEmpty: true,
      isSignedIn: false
    }
    
    setInterval(() => (
      this.setState(previousState => (
        { isEmpty: !previousState.isEmpty}
      ))
    ), 1000);
  }
  
  render(){
    
    return (
        <AppContainer />
    )
  }
}
