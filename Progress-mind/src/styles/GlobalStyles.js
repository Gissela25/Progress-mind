import {StyleSheet} from 'react-native';
import { COLORS } from './constants/Theme';
const GlobalStyles = StyleSheet.create({
    buttons:{
        width: 324,
        height: 150,
        backgroundColor:COLORS.darkblue,
        borderRadius:20,
        marginVertical:20,
        borderWidth:3,
        borderColor:'#FFF700'
    },
    buttons2:{
        width: 50,
        height: 50,
        backgroundColor:COLORS.darkblue,
        borderRadius:20,
        top: 5,
        marginHorizontal: 10,
        borderWidth:3,
        borderColor:'#FFF700',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonsCategory:{
        width: 320,
        height: 106,
        backgroundColor:COLORS.darkblue,
        borderRadius:20,
        marginVertical:20,
        borderWidth:3,
        borderColor:'#FFF700'
    },
    textButtons:{
        textAlign:'center',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        top:70,
        color: COLORS.green,
        fontSize:20,
    },
    textButtonsCaterogry:{
        textAlign:'center',
        fontSize: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        top:45,
        color:COLORS.green,
        fontSize:20,
    },
    quizCategoryContainer:{
        paddingHorizontal:35,
        paddingVertical:10,
    },
    quizContainer:{
        paddingHorizontal:40,
        paddingVertical:50
    }
});

export default GlobalStyles;