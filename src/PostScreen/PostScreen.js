import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import axios from 'axios';
import Post from '../../models/Post/Post';
import Comment from '../../models/Comment/Comment';
import { ScrollView } from 'react-native-gesture-handler';

export default class PostScreen extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        persons: []
      }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=` + this.props.postId)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(persons);
          })
    }

    render() {
        const { navigation } = this.props
        const author = navigation.getParam('postId', 'unknown id')
        const title = navigation.getParam('title', 'unknown title')
        const body = navigation.getParam('body', 'unknown body')
        return (
          <View>
              <Post author={JSON.stringify(author)} title={JSON.stringify(title)} body={JSON.stringify(body)}/>
          </View>
        )
      }
}