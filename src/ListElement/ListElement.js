import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import style from './ListElementStyle'

export default class ListElement extends React.Component{
    render() {
        return (
            <View style={style.background}>
                <Image source={require('../HomeHeader/photo.png')} style={style.photo}/>
                <View style={style.textContainer}>
                    <View style={style.headTextContainer}>
                    <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Xentavo</Text>
                    <Text style={{color: 'white'}}>  |     banking     |   4.1</Text>
                    </View>
                    <Text style={style.smallText}>"Some very interesting text"</Text>
                </View>
                <View style={style.date}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>28.05</Text>
                    <Text style={{color: 'white'}}>2018</Text>
                </View>
            </View>
        )
    }
}

