
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default function(props){
    /*if (!this.props.isEmpty){
        text = 'Hello'
      } 
      */
     console.log(props)
      return (
        <View>
          <Text style={{marginTop: 100}}>
            Hello there!
          </Text>
        </View>
      )
}