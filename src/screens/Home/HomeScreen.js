import React, {Component} from 'react';
import {FlatList, ActivityIndicator, View, Button, ScrollView} from 'react-native';
import HomeHeader from '../HomeHeader/HomeHeader';
import ListElement from '../../modals/ListElement/ListElement';
import style from './HomeScreenStyle';
import { getPosts, getUsers } from '../../services/services';
import {signUp, signIn, getUserInfo, update} from '../../services/servicesPost';




export default class HomeScreen extends React.Component{
    state = {
        posts: [],
        users: [],
        info: {}
    }
    static navigationOptions = {
        // headerTitle: <HomeHeader/>
        headerStyle: {
            height: 0,
            backgroundColor: 'rgb(16, 90, 249)'
        }
    }

    componentDidMount() {
        const {navigation} = this.props
        getUserInfo(navigation.getParam('jwt'))
        .then(data => {
            console.log(data)
            this.setState({info: data})
        })
        .catch(error => {
            console.log(error)
        })
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
            <View>
                <HomeHeader email={this.state.info.email} id={this.state.info.id}/>
                <FlatList
                    style={style.background}
                    data={this.state.posts}
                    renderItem={({item, index}) => (
                        <ListElement title={item.title} author='Owner' postId={item.id} body={item.body} navigation={this.props.navigation}/>
                    )}
                />
            </View>
        )
    }
}

