import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import style from './style'

export default class Post extends React.PureComponent{

    
    render () {
        return (
            <View style={style.background}>
                <Image source={require(`../../../assets/photo.png`)} style={style.image}/>
                <View>
                    <Text style={style.title}>{this.props.title}</Text>
                    <Text style={style.body}>{this.props.body}</Text>
                    <Text style={style.author}>{this.props.author}</Text>
                </View>
            </View>
        )
    }
}