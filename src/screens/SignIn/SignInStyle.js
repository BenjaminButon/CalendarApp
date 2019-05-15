import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(41, 41, 41)', 
        flex: 1
    },
    textInput: {
        height: 50,
        marginLeft: 20,
        backgroundColor: 'rgb(69, 69, 69)',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        color: 'white',
        paddingLeft: 30,
        fontSize: 20
    },
    customButton: {
        color: 'white'
    },
    email: {
        marginTop: 50
    },
    password: {
        marginTop: 20
    }
})

export const warning = StyleSheet.create({
    wrong: {
        borderColor: 'red',
        borderWidth: 1
    },
    warning: {
        fontSize: 14,
        color: 'red',
        marginLeft: 50
    }
})