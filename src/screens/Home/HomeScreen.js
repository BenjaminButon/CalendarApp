import React, {Component} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import HomeHeader from '../HomeHeader/HomeHeader';
import ListElement from '../../modals/ListElement/ListElement';
import style from './HomeScreenStyle';
import { getPosts, getUsers } from '../../services/services';




export default class HomeScreen extends React.Component{
    state = {
        posts: [],
        users: []
    }
    static navigationOptions = {
        headerTitle: <HomeHeader/>
    }

    componentDidMount() {
        getPosts()
        .then(response => {
            this.setState({posts: response});
            })
        .catch(error => {
            console.log(error.message)
        })
        getUsers()
        .then(response => {
            this.setState({users: response})
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    render() {
        if (!this.state.posts.length || !this.state.users.length){
            return <ActivityIndicator/>
        }
        return (
                <FlatList
                    style={style.background}
                    data={this.state.posts}
                    renderItem={({item, index}) => (
                        <ListElement title={item.title} author='Owner' postId={item.id} body={item.body} navigation={this.props.navigation} image={`../../../assets/avatar${index%5}.png`}/>
                    )}
                />
        )
    }
}

