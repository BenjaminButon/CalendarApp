import React, {Component} from 'react';
import {FlatList, ActivityIndicator, View, Button, ScrollView} from 'react-native';
import HomeHeader from '../HomeHeader/HomeHeader';
import ListElement from '../../modals/ListElement/ListElement';
import style from './HomeScreenStyle';
import { getPosts, getUsers } from '../../services/services';
import {connect} from 'react-redux';
import {loadPosts} from '../../redux/actions/postActions';



class HomeScreen extends React.Component{
    state = {
        //posts: [],
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
        this.props.loadPosts()
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
        if (!this.props.posts.length ){
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
                    data={this.props.posts}
                    renderItem={({item}) => (
                        <ListElement title={item.title} author='Owner' postId={item.id} body={item.body} navigation={this.props.navigation}/>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    //const {posts} = state.post.posts;
    console.log(state.post.posts)
    return {posts: state.post.posts}
}

const mapDispatchToProps = {
    loadPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)