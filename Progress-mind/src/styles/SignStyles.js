import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { COLORS } from './constants/Theme';

const SignStyles = StyleSheet.create({
    Conteiner: {
        flex: 1,
        flexDirection: 'column'
    },
    Topconteiner: {
        padding: 20,
        backgroundColor: COLORS.white,
        flex: 2,
    },
    Bottonconteiner: {
        padding: 20,
        backgroundColor: COLORS.darkblue,
        flex: 2,
    },
    Topconteiner2: {
        padding: 20,
        backgroundColor: COLORS.white,
        flex: 1,
    },
    Bottonconteiner2: {
        padding: 20,
        backgroundColor: COLORS.darkblue,
        flex: 4,
    },
    Inputstyle: {
        padding: 10,
        borderColor: '#FFF',
        borderWidth: 1,
        width: '100%',
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: COLORS.white,
        marginBottom: 10
    },
    Buttonstyle: {
        paddingVertical: 10,
        backgroundColor: COLORS.green,
        borderWidth: 1,
        borderColor: COLORS.green,
        borderRadius: 5,
        marginTop: 10,
        borderRadius: 20,
        marginHorizontal:80,
    },
    Errorstyle: {
        marginTop: 1,
        color: 'red',
    },
    Textsigninstyle: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center'
    },
    Textsignupstyle: {
        fontSize: 22,
        color: '#C4FF63',
        marginTop: 10,
        textAlign: 'center',
        fontWeight:'800',
    },
    Textsigninstyle2: {
        marginLeft: 50,
        fontSize: 18,
        color: '#000000',
        width: 300
    },
    Textsignupstyle2: {
        //marginLeft: 43,
        fontSize: 18,
        color: '#C4FF63',
        //width: 300,
        textAlign:'center',
        marginTop: 10,
    },
    Textgooglestyle:{
        marginLeft: 43,
        fontSize: 18,
        color: '#C4FF63',
        width: 300,
        marginLeft: 88,
        marginTop: 10,
    },
    Buttonstyledrawer: {
        paddingVertical: 10,
        backgroundColor: COLORS.green,
        borderWidth: 1,
        borderColor: COLORS.green,
        borderRadius: 5,
        marginTop:40,
        marginHorizontal:20,
    },
    Textdrawerstyle: {
        marginLeft:55,
        fontSize: 18,
        color: COLORS.darkblue,
        width: 300
    },
    ForgotStyle:{
        color: COLORS.white,
        textAlign: 'center',
        fontSize:30,
        marginBottom: 10, 
        marginTop:60,
        fontWeight:'600'
    },
    ForgotStyle2:{
        color: COLORS.white,
        textAlign: 'center',
        fontSize:20,
        marginBottom: 10, 
        marginTop:10,
        fontWeight:'300'
    },
    Buttonstylef:{
        backgroundColor:COLORS.green,
        marginTop: 30,
        paddingVertical:10,
        marginHorizontal:40,
        borderRadius:20
    },
    ButtonEmail:{
        paddingVertical:20,
        backgroundColor:COLORS.darkblue,
        marginVertical:20,
        borderWidth:2,
        borderColor:COLORS.green,
        marginHorizontal:20
    },
    TextLog:{
        color:COLORS.green,
        textAlign:'center'
    },
    TextSing:{
        color:COLORS.green,
        textAlign:'center',
        fontSize:30,
        marginTop:30,
        marginBottom:30
    },
    TextAccount:{
    textAlign:'center',
    color:COLORS.white,
    marginTop:190
    },
    LogSignOut:{
        marginRight:10
    },
    TextName:{
        color:COLORS.darkblue,
        fontSize:20,
        padding:16,
        textAlign:'left'
    },
    TextEmail:{
        color:COLORS.green,
        marginTop:9,
        fontSize:18,
        textAlign:'left',
        marginBottom:10
    },
    TextlogOut:{
        color:COLORS.darkblue,
        //marginTop:400
        textAlign:'center'
    },
    ConteinerName:{
        backgroundColor:COLORS.white,

    },
    TextOptions:{
        color:COLORS.white,
        fontSize:16,
        fontWeight:'600'
    },
    ConteinerOptions:{
        marginTop:30
    },
    error: {
        marginTop: 10,
        color: 'red',
    },
});

export default SignStyles