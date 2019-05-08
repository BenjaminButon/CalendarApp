import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, TextInput, Button, Image, TouchableHighlight, List, FlatList} from 'react-native';
import HomeHeader from '../HomeHeader/HomeHeader';
import ListElement from '../../models/ListElement/ListElement';
import style from './HomeScreenStyle';
import axios from 'axios';
import { getPosts, getUsers } from '../../services/services';



export default class HomeScreen extends React.Component{

    posts = [];
    users = [];
    state = {
        stateUsersToBeSure: [],
        elements: []
    }
    static navigationOptions = {
        headerTitle: <HomeHeader/>,
        headerLeft: (
            <Button title='<' style={{backgroundColor: 'red', width: 30, height: 40, borderRadius: 20}}/>
        )
    }

    async componentDidMount() {
        this.posts = await getPosts()
        .then(response => {
            console.log('got posts')
            return response.data;
            })
        .catch(error => {
            console.log(error.message)
        })
        this.users = await getUsers()
        .then(response => {
            console.log('got users')
            return response.data.map(user => user.name)
        })
        .catch(error => {
            console.log(error.message)
        })
        this.setState({stateUsersToBeSure: []})
    }

    createElement(post){
        console.log('create Element')
        return <ListElement title={post.title} author={this.users[post.userId - 1]} postId={post.id} body={post.body} navigation={this.props.navigation}/>
    }
    render() {
        console.log('in render')
        // return (
        //     <List>
        //         <FlatList
        //             data={this.posts}
        //             renderItem={({item}) => (
        //                 <ListElement title={item.title} author={this.users[item.userId - 1]} postId={item.id} body={item.body} navigation={this.props.navigation}/>
        //             )}
        //         />
        //     </List>
        // )
        return (
            <ScrollView style={style.background}>
                {this.posts.map(post => this.createElement(post))}
            </ScrollView>
        )
    }
}

