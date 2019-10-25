import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerItem: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    scrollView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
        padding: 10
    },
    content: {
        fontSize: 24,
        color: '#999',
        textAlign: 'center'
    },
    containerContent: {
        width: '100%',
        height: '30%',
        padding: 7,
    },
    button: {
        fontSize: 18,
        marginHorizontal: 5,
        color: 'blue'
    }
})