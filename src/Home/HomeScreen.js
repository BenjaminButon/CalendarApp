import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, TextInput, Button, Image, TouchableHighlight} from 'react-native';
import HomeHeader from '../HomeHeader/HomeHeader';
import ListElement from '../ListElement/ListElement';
import style from './HomeScreenStyle';
import axios from 'axios';


export default class HomeScreen extends React.Component{

    static elements = [];
    state = {
        posts: [],
        users: [],
        elements: []
    }
    static navigationOptions = {
        headerTitle: <HomeHeader/>,
        headerLeft: (
            <Button title='<' style={{backgroundColor: 'red', width: 30, height: 40, borderRadius: 20}}/>
        )
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const gotPosts = response.data;
            this.setState({posts: gotPosts});
        })
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const gotUsers = response.data;
            this.setState({users: gotUsers})
        })
    }
    render() {
        
        var elements = []
        var users = this.state.users.map(user => user.name)
        
        for (var i = 0; i < this.state.posts.length; i++){
            var post = this.state.posts[i]
            
            elements.push(
                <ListElement title={post.title} author={users[post.userId - 1]} postId={post.id} body={post.body} navigation={this.props.navigation}/>
            )
        }
        
        
        
        
        
        
        return (
            <ScrollView style={style.background}>
                {elements}
            </ScrollView>
        )
    }
}

