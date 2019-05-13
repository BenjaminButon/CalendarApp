import React, {Component} from 'react';
import {FlatList, ActivityIndicator, View, Button, ScrollView} from 'react-native';
import HomeHeader from '../HomeHeader/HomeHeader';
import ListElement from '../../modals/ListElement/ListElement';
import style from './HomeScreenStyle';
import { getPosts, getUsers } from '../../services/services';



export default class HomeScreen extends React.Component{
    state = {
        posts: [],
        users: [],
        info: {},
        token: ''
    }
    static navigationOptions = {
        // headerTitle: <HomeHeader/>
        headerStyle: {
            height: 0,
            backgroundColor: 'rgb(16, 90, 249)'
        }
    }

    componentDidMount() {
        getPosts()
        .then(response => {
            console.log('got posts')
            this.setState({posts: response});
            })
        .catch(error => {
            console.log(error.message)
        })
        getUsers()
        .then(response => {
            console.log('got users')
            this.setState({users: response})
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    render() {
        if (!this.state.posts.length ){
            return (
                <View>
                    <HomeHeader/>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View style={{flex: 1}}>
                <HomeHeader navigation={this.props.navigation}/>
                <FlatList
                    style={style.background}
                    data={this.state.posts}
                    renderItem={({item}) => (
                        <ListElement title={item.title} author='Owner' postId={item.id} body={item.body} navigation={this.props.navigation}/>
                    )}
                />
            </View>
        )
    }
}

