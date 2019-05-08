import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
    photo: {
        width: 60, 
        height: 60, 
        borderRadius: 30, 
        borderColor: 'white', 
        borderWidth: 1
    },
    largeText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }, 
    smallText: {
        color: 'white',
        fontSize: 12,
        marginLeft: 2
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10
    }
})