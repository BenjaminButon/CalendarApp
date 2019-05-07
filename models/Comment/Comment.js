import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';


export default class Comment extends React.Component{
    render() {
        return (
            <View>
                <Text>name</Text>
                <Text>email</Text>
                <Text>body</Text>
            </View>
        )
    }
}