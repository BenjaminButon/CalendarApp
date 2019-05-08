import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import style from './style'

export default class Post extends React.PureComponent{

    
    render () {
        return (
            <View style={style.background}>
                <Text>{this.props.title}</Text>
                <Text>{this.props.body}</Text>
                <Text>{this.props.author}</Text>
            </View>
        )
    }
}