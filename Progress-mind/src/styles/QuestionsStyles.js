import {StyleSheet} from 'react-native';
import { COLORS } from './constants/Theme';

const QuestionsStyles = StyleSheet.create({
    ViewQuestions:{
        flex:1,
        paddingVertical: 40,
        paddingHorizontal:15,
        backgroundColor: COLORS.background,
        position:'relative'
    },
    NextButtonStyle:{
        backgroundColor:COLORS.green, 
        padding:15, 
        width:'90%',
        borderRadius:35, 
        borderColor:COLORS.black, 
        borderWidth:4,
        marginLeft:12, 
        marginTop:8
    },
    TextNextButtonStyle:{
        fontSize:20, 
        color:COLORS.black, 
        textAlign:'center', 
        fontWeight:'bold'
    },
    ViewRenderProgressBarStyle:{
        width:'100%',
        height:20,
        borderRadius:20,
        backgroundColor:'#FFFFFF',
    },
    AnimatedViewRenderProgressBarStyle:{
        height:20,
        borderRadius:20,
        backgroundColor:'#C4FF63'
    },
    TextRenderQuestionsStyle:{
        fontSize:25,
        fontWeight:'bold',  
        marginRight:2, 
        color:COLORS.white
    },
    ViewTextRenderQuestionsStyle:{
        flexDirection:'row',
        alignItems:'flex-end',
        marginTop:10
    },
    ContentQuestionsStyles:{   
        marginBottom:25, 
        alignContent:'center', 
        justifyContent:'center'
    },
    TextQuestionStyle:{
        fontSize:25, 
        color:COLORS.white, 
        textAlign:'center', 
        marginTop:23
    },
    ImageQuestionStyle:{   
        width:230, 
        height:100, 
        marginLeft:75, 
        marginTop:10
    },
    ModalViewStyle:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center',
        justifyContent:'center'
    },
    ModalViewContentStyle:{
        backgroundColor:COLORS.primary,
        width: '90%',
        borderRadius:25,
        padding:25,
        alignItems:'center'
    },
    TextMessageStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:COLORS.white
    },
    ViewResultStyle:{
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:'center',
        marginVertical:20
    },
    TextResultStyle:{
        fontSize:30, 
        color:COLORS.white, 
        fontWeight:'bold'
    },
    ButtonBackStyle:{
        backgroundColor:COLORS.green,                 
        padding:20, 
        width:'90%',
        borderRadius:35, 
        borderColor:COLORS.black, 
        borderWidth:4, 
        marginVertical:5
    },
    TextButtonBackStyle:{
        textAlign:'center', 
        color:COLORS.black, 
        fontSize:20, 
        fontWeight:'bold'
    },
    CorrectOptionStyle:{
        width:30, height:30, borderRadius:30/2,
        backgroundColor:COLORS.success,
        justifyContent:'center', alignItems:'center'
    },
    SelectedOptionStyle:{
        width:30, height:30, borderRadius:30/2,
        backgroundColor:COLORS.error,
        justifyContent:'center', alignItems:'center'
    },
    IconCorrectOptionStyle:{
        color: COLORS.white,
        fontSize: 20
    },
    IconSelectedOptionStyle:{
        color: COLORS.white,
        fontSize: 20
    }

});

export default QuestionsStyles;