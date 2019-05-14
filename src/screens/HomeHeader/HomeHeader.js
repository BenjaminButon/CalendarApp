import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import style from './HomeHeaderStyle';
import {getUserInfo} from '../../services/services';
import {signOut, getToken} from '../../services/storage';
import {connect} from 'react-redux';
import {changeName, _getUserInfo} from '../../redux/actions/changeName';
import { GET_USER_INFO } from '../../redux/actions/types';

class HomeHeader extends React.Component{

    state = {
        info: {}
    }

    componentDidMount(){
        this.props._getUserInfo()
    }
    render() {
        return (
            <View style={style.container}>
                <Image source={require(`../../../assets/avatar0.png`)}
                style={style.photo}/>
                <View style={style.textContainer}>
                    <Text style={style.largeText}>{this.props.user.name}</Text>
                    <Text style={style.smallText}>{this.props.user.email}</Text>
                </View>
                <View>
                    <TouchableHighlight onPress={() => {signOut(); this.props.navigation.navigate('SignIn')}}>
                        <Text style={style.smallText} >Sign out</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit')}>
                        <Text style={style.smallText}>Edit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

// const mapStateToProps = (state) => {
//     const { userInfo } = state.userInfo
//     return { userInfo }
// };

// const mapDispatchToProps = {
//     changeName
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)

const setUserInfo = (info) => {
    return {
        type: GET_USER_INFO,
        payload: info
    }
}
const mapStateToProps = (state) => {
    return { user: state.user.info }
};

const mapDispatchToProps = {
    changeName,
    setUserInfo,
    _getUserInfo
}
// dispatch => {
//     return {
//       changeName: (name) => {
//         dispatch(changeName(name))
//       }
//     }
//   }

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)


