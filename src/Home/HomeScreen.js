import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import HomeHeader from '../HomeHeader/HomeHeader';
import ListElement from '../ListElement/ListElement';


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

const style = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(41, 41, 41)',
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    }
})