import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import HomeHeader from '../HomeHeader/HomeHeader';
import ListElement from '../ListElement/ListElement';
import style from './HomeScreenStyle';


export default class HomeScreen extends React.Component{
    static navigationOptions = {
        headerTitle: <HomeHeader/>,
        headerLeft: (
            <Button title='<' style={{backgroundColor: 'red', width: 30, height: 40, borderRadius: 20}}/>
        )
    }
    render() {
        return (
            <View style={style.background}>
                <ListElement/>
                <ListElement/>
                <ListElement/>
                <ListElement/>
                <ListElement/>
                <ListElement/>
            </View>
        )
    }
}

