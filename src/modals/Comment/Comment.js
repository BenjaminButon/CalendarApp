import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import style from './style';


export default class Comment extends React.PureComponent{
    componentDidMount(){
        console.log(this.props.body)
    }
    render() {
        return (
            <View style={style.comment}>
                <Text style={style.name}>{this.props.name}</Text>
                <Text style={style.email}>{this.props.email}</Text>
                <Text style={style.body}>{this.props.body}</Text>
            </View>
        )
    }
}