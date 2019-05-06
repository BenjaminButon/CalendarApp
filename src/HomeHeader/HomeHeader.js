import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default class HomeHeader extends React.Component{
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image source={require('./photo.png')}
                style={style.photo}/>
                <View style={style.textContainer}>
                    <Text style={style.largeText}>Ostap Benko</Text>
                    <Text style={style.smallText}>5 active ICO</Text>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    photo: {
        width: 60, 
        height: 60, 
        borderRadius: 30, 
        borderColor: 'white', 
        borderWidth: 1
    },
    largeText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }, 
    smallText: {
        color: 'white',
        fontSize: 12,
        marginLeft: 2
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10
    }
})