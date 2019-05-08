import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import style from './style'


export default class Comment extends React.PureComponent{
    render() {
        return (
            <View style={style.comment}>
                <Text>{this.props.name}</Text>
                <Text>{this.props.email}</Text>
                <Text>{this.props.body}</Text>
            </View>
        )
    }
}