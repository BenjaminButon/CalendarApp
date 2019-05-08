import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import Post from '../../models/Post/Post';
import Comment from '../../models/Comment/Comment';
import style from './style'
import { getCommentForPost } from '../../services/services';

export default class PostScreen extends React.Component{
    author
    title
    body
    postId
    
    state = {
        comments: []
      }

    componentDidMount() {
        const {navigation} = this.props
        this.postId = navigation.getParam('postId')
        this.title = navigation.getParam('title')
        this.author = navigation.getParam('author')
        this.body = navigation.getParam('body')
        getCommentForPost(this.postId)
        .then(response => {
          this.setState({comments: response})
        })
        .catch(error => {
          console.log(error.message)
        })
    }

    render() {
        if (!this.state.comments.length){
          return <ActivityIndicator/>
        }
        return (
          <View>
              <Post author={this.author} title={this.title} body={this.body}/>
              <FlatList 
                data={this.state.comments}
                renderItem={({item}) => (
                  <Comment name={item.name} email={item.email} body={item.body}/>
                )}
              />
          </View>
        )
      }
}