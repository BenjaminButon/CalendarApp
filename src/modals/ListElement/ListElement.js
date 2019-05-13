import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import style from './ListElementStyle';

export default class ListElement extends React.PureComponent{
    static counter = 0

    render() {
        return (
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Post', {
            title: this.props.title,
            author: this.props.author,
            body: this.props.body,
            postId: this.props.postId
        })}>
        <View style={style.background}>
                <Image source={require(`../../../assets/photo.png`)} style={style.photo}/>
                <View style={style.textContainer}>
                    <View style={style.headTextContainer}>
                    <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>{this.props.author}</Text>
                    <Text style={{color: 'white'}}>  |     banking     |   4.1</Text>
                    </View>
                    <Text style={style.smallText} numberOfLines={2}>{this.props.title}</Text>
                </View>
                <View style={style.date}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>28.05</Text>
                    <Text style={{color: 'white'}}>2018</Text>
                </View>
                </View>
                </TouchableHighlight>
        )
    }
}

