import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';
import {update} from '../../services/servicesPost';
import {getToken} from '../../services/storage';
import {style} from '../SignIn/SignInStyle';
import {connect} from 'react-redux';
import {changePost} from '../../redux/actions/postActions'


class EditPostScreen extends React.Component{
    state = {
        title: '',
        body: ''
    }
    post

    componentDidMount(){
        const {navigation} = this.props
        this.post = navigation.getParam('post')
        console.log(this.post)
    }

    render() {
        return (
            <View style={style.background}>
                <TextInput style={style.textInput} placeholder='Title' placeholderTextColor='white' marginTop={20} onChangeText={(text) => {this.setState({title: text})}}/>
                <TextInput style={style.textInput} placeholder='Body' placeholderTextColor='white' marginTop={20} onChangeText={(text) => {this.setState({body: text})}}/>
                <Button title='Submit' onPress={() => {
                    this.props.changePost({
                        userId: this.post.userId,
                        id: this.post.id,
                        title: this.state.title || this.post.title,
                        body: this.state.body || this.post.body
                    })
                    this.props.navigation.goBack()
                    }}/>
            </View>
        )
    }
}

const mapDispatchToProps = {
    changePost
}


export default connect(null, mapDispatchToProps)(EditPostScreen)