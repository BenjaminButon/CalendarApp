import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux'; 
import style from './style';

class Post extends React.Component{

    navigation
    constructor(props){
        super(props)
        console.log('Props => ', props)
        this.navigation = props.navigation
        console.log('Navigation => ', this.navigation)
    }
    render () {
        return (
            <View style={style.background}>
                <Image source={require(`../../../assets/photo.png`)} style={style.image}/>
                <View>
                    <Text style={style.title}>{this.props.posts[this.props.postId].title}</Text>
                    <Text style={style.body}>{this.props.posts[this.props.postId].body}</Text>
                    <Text style={style.author}>{this.props.posts[this.props.postId].author}</Text>
                </View>
                <TouchableHighlight onPress={() => {this.navigation.navigate('EditPost', {
                    post: this.props.posts[this.props.postId]
                }) }}>
                    <Text>Edit title</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.post.posts)
    return {posts: state.post.posts}
}

export default connect(mapStateToProps)(Post)