import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import style from './HomeHeaderStyle';
import {getUserInfo} from '../../services/services';
import {signOut, getToken} from '../../services/storage';
import {connect} from 'react-redux';
import {changeName} from '../../redux/actions/changeName';
import {NAME_CHANGED} from '../../redux/actions/types';

class HomeHeader extends React.Component{

    state = {
        info: {}
    }

    componentDidMount(){
        getToken()
        .then(token => {
            if (token){
                console.log(token)
                getUserInfo(token)
                .then(data => {
                    this.setState({info: data})
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
    render() {
        return (
            <View style={style.container}>
                <Image source={require(`../../../assets/avatar0.png`)}
                style={style.photo}/>
                <View style={style.textContainer}>
                    <Text style={style.largeText}>{this.props.name.name}</Text>
                    <Text style={style.smallText}>{this.state.info.email}</Text>
                </View>
                <View>
                    <TouchableHighlight onPress={() => {signOut(); this.props.navigation.navigate('SignIn')}}>
                        <Text style={style.smallText} >Sign out</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.changeName('Ostap benko')}>
                        <Text style={style.smallText}>Edit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { name } = state
    return { name }
};

const mapDispatchToProps = {
    changeName
}
// dispatch => {
//     return {
//       changeName: (name) => {
//         dispatch(changeName(name))
//       }
//     }
//   }

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)


