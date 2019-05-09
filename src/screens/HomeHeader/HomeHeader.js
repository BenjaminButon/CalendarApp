import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import style from './HomeHeaderStyle';

export default class HomeHeader extends React.PureComponent{
    render() {
        return (
            <View style={style.container}>
                <Image source={require(`../../../assets/avatar0.png`)}
                style={style.photo}/>
                <View style={style.textContainer}>
                    <Text style={style.largeText}>{this.props.name}</Text>
                    <Text style={style.smallText}>{this.props.email}</Text>
                </View>
            </View>
        )
    }
}


