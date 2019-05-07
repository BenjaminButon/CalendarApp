import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
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