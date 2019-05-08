import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginLeft: 10
    }, 
    background: {
        backgroundColor: 'rgb(16, 90, 249)',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 1
    },
    textContainer: {
        flexDirection: 'column'
    },
    author: {
        color: 'white'
    },
    body: {
        color: 'white'
    },
    title: {
        color: 'white'
    }
})