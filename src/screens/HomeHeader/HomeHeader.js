import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import style from './HomeHeaderStyle';
import {signOut} from '../../services/storage';
import {connect} from 'react-redux';
import {changeName, _getUserInfo} from '../../redux/actions/changeName';

class HomeHeader extends React.Component{

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
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', paddingLeft: 30}}>
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

const mapStateToProps = (state) => {
    return { user: state.user.info }
};

const mapDispatchToProps = {
    changeName,
    _getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)


