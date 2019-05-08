import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import style from './HomeHeaderStyle';

export default class HomeHeader extends React.Component{
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../../../assets/photo.png')}
                style={style.photo}/>
                <View style={style.textContainer}>
                    <Text style={style.largeText}>Ostap Benko</Text>
                    <Text style={style.smallText}>5 active ICO</Text>
                </View>
            </View>
        )
    }
}


