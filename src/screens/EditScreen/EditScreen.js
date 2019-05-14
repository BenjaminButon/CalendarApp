import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';
import {update} from '../../services/servicesPost';
import {getToken} from '../../services/storage';
import style from '../SignIn/SignInStyle';
import {connect} from 'react-redux';
import {changeName} from '../../redux/actions/changeName'


class EditScreen extends React.Component{
    state = {
        username: ''
    }

    changeData(){
        if(this.state.username != ''){
            getToken()
            .then(token => {
                if(token){
                    update(token, this.state.username)
                    .then(info => {
                        console.log(info)
                        this.props.navigation.navigate('Home')
                    })
                    .catch(error => {
                        console.log(error)
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    render() {
        return (
            <View style={style.background}>
                <TextInput style={style.textInput} placeholder='Name' placeholderTextColor='white' marginTop={50} onChangeText={(text) => {this.setState({username: text})}}/>
                <Button title='Submit' onPress={() => {
                    this.props.changeName(this.state.username)
                    this.props.navigation.goBack()
                    }}/>
            </View>
        )
    }
}

const mapDispatchToProps = {
    changeName
}


export default connect(null, mapDispatchToProps)(EditScreen)