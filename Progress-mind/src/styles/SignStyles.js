import { StyleSheet } from 'react-native';
import { COLORS } from './constants/Theme';

const SignStyles = StyleSheet.create({
    Conteiner: {
        flex: 1,
        flexDirection: 'column'
    },
    Topconteiner: {
        padding: 20,
        backgroundColor: COLORS.white,
        flex: 3,
    },
    Bottonconteiner: {
        padding: 20,
        backgroundColor: COLORS.darkblue,
        flex: 3,
    },
    Topconteiner2: {
        padding: 20,
        backgroundColor: COLORS.white,
        flex: 1,
    },
    Bottonconteiner2: {
        padding: 20,
        backgroundColor: COLORS.darkblue,
        flex: 3,
    },
    Inputstyle: {
        padding: 10,
        borderColor: '#FFF',
        borderWidth: 1,
        width: '100%',
        borderRadius: 20,
        marginTop: 25,
        backgroundColor: COLORS.white,
        marginBottom: 10
    },
    Buttonstyle: {
        paddingVertical: 10,
        backgroundColor: COLORS.green,
        borderWidth: 1,
        borderColor: COLORS.green,
        borderRadius: 5,
        marginTop: 30,
        borderRadius: 20,
        width: 200,
        marginLeft: 70,
    },
    Errorstyle: {
        marginTop: 10,
        color: 'red',
    },
    Textsigninstyle: {
        marginLeft: 43,
        fontSize: 18,
        color: '#000000',
        width: 300
    },
    Textsignupstyle: {
        marginLeft: 43,
        fontSize: 18,
        color: '#C4FF63',
        width: 300,
        marginLeft: 120,
        marginTop: 10,
    },
    Textsigninstyle2: {
        marginLeft: 50,
        fontSize: 18,
        color: '#000000',
        width: 300
    },
    Textsignupstyle2: {
        marginLeft: 43,
        fontSize: 18,
        color: '#C4FF63',
        width: 300,
        marginLeft: 91,
        marginTop: 10,
    },
    Textgooglestyle:{
        marginLeft: 43,
        fontSize: 18,
        color: '#C4FF63',
        width: 300,
        marginLeft: 88,
        marginTop: 10,
    }
});

export default SignStyles