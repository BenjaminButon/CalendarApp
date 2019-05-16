import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import Post from '../../modals/Post/Post';
import Comment from '../../modals/Comment/Comment';
import style from './style'
import { getCommentForPost } from '../../services/services';
import { ScrollView } from 'react-native-gesture-handler';

export default class PostScreen extends React.Component{
    author
    title
    body
    postId
    
    static navigationOptions = {
      headerStyle: {
        height: 40,
        backgroundColor: 'rgb(16, 90, 249)'
      },
      headerTitle: 'Post',
      headerTint: {
        color: 'white'
      }
    }
    state = {
        comments: []
      }
    componentDidMount() {
        const {navigation} = this.props
        this.postId = navigation.getParam('postId')
        this.title = navigation.getParam('title')
        this.author = navigation.getParam('author')
        this.body = navigation.getParam('body')
        console.log('ID => ', this.postId)
        console.log('Title => ', this.title)
        console.log('Author => ', this.author)
        console.log('Body => ', this.body)
        getCommentForPost(this.postId + 1)
        .then(response => {
          this.setState({comments: response})
        })
        .catch(error => {
          console.log(error.message)
        })
    }

    render() {

        if (!this.state.comments.length){
          return (
            <View>
              <Post postId={this.props.navigation.getParam('postId')} navigation={this.props.navigation}/>
              <ActivityIndicator/>
            </View>
          )
        }
        return (
          
          <View style={style.commentsScroll}>
              <Post postId={this.props.navigation.getParam('postId')}/>
              <ScrollView>
                <FlatList 
                style={{paddingLeft: 5, paddingRight: 5}}
                data={this.state.comments}
                renderItem={({item}) => (
                  <Comment name={item.name} email={item.email} body={item.body}/>
                )}
                />
              </ScrollView>
          </View>
        )
      }
}