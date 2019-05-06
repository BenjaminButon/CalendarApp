import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default class ListElement extends React.Component{
    render() {
        return (
            <View style={style.background}>
                <Image source={require('../HomeHeader/photo.png')} style={style.photo}/>
                <View style={style.textContainer}>
                    <View style={style.headTextContainer}>
                    <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Xentavo</Text>
                    <Text style={{color: 'white'}}>  |     banking     |   4.1</Text>
                    </View>
                    <Text style={style.smallText}>"Some very interesting text"</Text>
                </View>
                <View style={style.date}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>28.05</Text>
                    <Text style={{color: 'white'}}>2018</Text>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    smallText: {
        color: 'white',
        fontSize: 12
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingTop: 15,
        paddingBottom: 20
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginLeft: -10,

    }, 
    background: {
        backgroundColor: 'rgb(59, 59, 59)',
        height: 90,
        //flex: 0.9, 
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    }, 
    headTextContainer: {
        color: 'white',
        flexDirection: 'row',
        flex: 1
    },
    date: {
        width: 60,
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})