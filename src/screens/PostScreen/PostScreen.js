import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import axios from 'axios';
import Post from '../../models/Post/Post';
import Comment from '../../models/Comment/Comment';
import { ScrollView } from 'react-native-gesture-handler';
import style from './style'

export default class PostScreen extends React.Component{
    constructor(props){
        super(props)
    }

    
    state = {
        comments: []
      }

    componentDidMount() {
        const {navigation} = this.props
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=` + navigation.getParam('postId', ''))
          .then(response => {
            const gotComments = response.data;
            this.setState({ comments: gotComments });
            console.log(gotComments);
          })
    }

    render() {
        const { navigation } = this.props
        const postId = navigation.getParam('postId', 1)
        const author = navigation.getParam('author', 'unknown author')
        const title = navigation.getParam('title', 'unknown title')
        const body = navigation.getParam('body', 'unknown body')

        var comments = []
        //console.log(this.state.comments.length)
        for (var i = 0; i < this.state.comments.length; i++){
            var comment = this.state.comments[i]
            console.log(comment)
            comments.push(<Comment name={comment.name} email={comment.email} body={comment.body}/>)

        }
        return (
          <View>
              <Post author={JSON.stringify(author)} title={JSON.stringify(title)} body={JSON.stringify(body)}/>
              <ScrollView style={style.commentsScroll}>
                {comments}
              </ScrollView>
          </View>
        )
      }
}