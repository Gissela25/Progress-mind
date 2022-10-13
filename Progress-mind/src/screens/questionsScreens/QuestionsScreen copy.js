import { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, StatusBar, Animated, Modal, Alert, Pressable, Image } from "react-native";
import {List} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from "../../styles/constants/Theme";
import RenderQuestion from "../../components/componentsQuiz/RenderQuestion";
import RenderProgressBar from "../../components/componentsQuiz/RenderProgressBar";
const QuestionsScreen = ({route, navigation}) =>{
    const {questions} = route.params;
    const [allQuestions, setAllQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [currentQuestionIndex,setCurrentQuestionIndex ] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption]=useState(null);
    const[isOptionDisabled,setIsOptionDisabled] = useState(false);
    const[showNextButton, setShowNextButton] = useState(false);
    const[score, setScore]= useState(0);
    const[syncQO, setSyncQO] = useState(false)
    const[showScoreModal, setShowScoreModal]= useState(false);
    const[progress, setProgress]=useState(new Animated.Value(0));
    const[existImg, setExistImg]=useState(false);
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange:['0%','100%'],
    })

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
      };
      
    const validateAnswer = (selectedOption) =>{
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionDisabled(true);
        if(selectedOption===correct_option){
                setScore(score+1)
        }
        setShowNextButton(true);
    } 
    const handleNext = () =>{
        if(currentQuestionIndex===allQuestions.length-1){
            setShowScoreModal(true);
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue:currentQuestionIndex+1,
            duration:1000,
            useNativeDriver:false
        }).start();
    }



    // const renderQuestion = () =>{
    //     return(
    //         <View style={{ marginBottom:25, alignContent:'center', justifyContent:'center'}}>
    //         <View
    //         style={{
    //           flexDirection:'row',
    //           alignItems:'flex-end',
    //           marginTop:10
    //         }}>
    //             <Text style={{ fontSize:25,fontWeight:'bold',  marginRight:2, color:COLORS.white}}>Pregunta: </Text>
    //             <Text style={{ fontSize:25,fontWeight:'bold',  marginRight:2, color:COLORS.white}}>{  currentQuestionIndex + 1}</Text>
    //             <Text style={{ fontSize:25,fontWeight:'bold',  marginRight:2, color:COLORS.white}}>/ {allQuestions.length}</Text>
    //         </View>

    //         {/** Question */}

    //         <Text style={{
    //             fontSize:30
    //             , color:COLORS.white, textAlign:'center', marginTop:23
    //         }}>{allQuestions[currentQuestionIndex]?.question}  </Text>
    //         {existImg===true?<Image style={{width:230, height:100, marginLeft:75, marginTop:10}} source={{uri:allQuestions[currentQuestionIndex]?.img}} />: <Text></Text> }

    //     </View>
    //     )
    // }
    const renderProgressBar = ()=>{
        return(
            <View style={{
                width:'100%',
                height:20,
                borderRadius:20,
                backgroundColor:'#FFFFFF',
            }}>
                <Animated.View style={[{
                    height:20,
                    borderRadius:20,
                    backgroundColor:'#C4FF63'
                },{
                    width:progressAnim
                }]}>

                </Animated.View>
            </View>
        )
    }

    const restartQuiz = () =>{
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionDisabled(false);
        setShowNextButton(false);

        Animated.timing(progress, {
            toValue:0,
            duration:1000,
            useNativeDriver:false
        }).start();
    }

    const renderNextButton = () =>{
        if(showNextButton){
            return(
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    backgroundColor:COLORS.green,
                        padding:15, width:'90%',borderRadius:35, borderColor:COLORS.black, borderWidth:4,marginLeft:12, marginTop:8
                }}>
                    <Text style={{
                        fontSize:20, color:COLORS.black, textAlign:'center', fontWeight:'bold'
                    }}>Siguiente</Text>
                </TouchableOpacity>
            )
        }
        else{
            return null;
        }
    }

    const renderOptions = () =>{
        return(
            <View>
                    {
                        options.map(option => (
                            <TouchableOpacity
                            onPress={()=> validateAnswer(option)}
                            disabled={isOptionDisabled}
                            key={option}
                            style={{
                            borderWidth:3,
                            borderColor: option==correctOption
                            ? COLORS.success
                            : option == currentOptionSelected
                            ? COLORS.error
                            :
                            COLORS.secondary + '40',
                            backgroundColor: option==correctOption
                            ? COLORS.success + '20'
                            : option == currentOptionSelected
                            ? COLORS.error + '20'
                            :
                            COLORS.secondary + '20',
                            height:58,
                            backgroundColor:COLORS.white,
                            borderRadius:20,
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between',
                            paddingHorizontal: 20,
                            marginVertical:5

                        }}
                            >
                            <Text style={{fontSize:20}}>{option}</Text>
                            {
                                option===correctOption ?(
                                    <View style={{
                                        width:30, height:30, borderRadius:30/2,
                                        backgroundColor:COLORS.success,
                                        justifyContent:'center', alignItems:'center'
                                    }}>
                                    <MaterialCommunityIcons name="check-bold" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />

                                    </View>
                                ): option === currentOptionSelected ? (
                                    <View style={{
                                        width:30, height:30, borderRadius:30/2,
                                        backgroundColor:COLORS.error,
                                        justifyContent:'center', alignItems:'center'
                                    }}>
                                     <MaterialCommunityIcons name="close-thick" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />

                                    </View>
                                ):null
                            }
                            </TouchableOpacity>
                        ))
                    }
            </View>
        );
    }


    useEffect (()=>{

            if(currentQuestionIndex==0){
                setAllQuestions(handleShuffle(questions));           
            }
            setOptions(handleShuffle(questions[currentQuestionIndex]?.options))
            if(questions[currentQuestionIndex]?.withImg == true){
                setExistImg(true)
            }   
        },[currentQuestionIndex]);

        return (
            <SafeAreaView style={{flex:1}}>
           
             <View style={{flex:1,
            paddingVertical: 40,
            paddingHorizontal:16,
            backgroundColor: COLORS.background,
            position:'relative'}}>
            <RenderProgressBar progressAnim={progressAnim}/>
            <RenderQuestion currentQuestionIndex={currentQuestionIndex} allQuestions={allQuestions} existImg={existImg}  />
            {renderOptions()}
            {renderNextButton()}
            <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}>
            <View style={{
                flex:1,
                backgroundColor:COLORS.white,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <View style={{
                    backgroundColor:COLORS.primary,
                    width: '90%',
                    borderRadius:25,
                    padding:25,
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:30,
                        fontWeight:'bold',
                        color:COLORS.white
                    }}>
                        {score >(allQuestions.length/2)?'Felicidades!':'¡Puedes Mejorar!'}
                    </Text>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:'flex-start',
                        alignItems:'center',
                        marginVertical:20
                    }}>
                    <Text style={{
                        fontSize:30,
                        fontWeight:'bold',
                        color:score> (allQuestions.length/2)? COLORS.success: COLORS.error
                    }}>{score}</Text>
                    <Text style={{
                        fontSize:30, color:COLORS.white, fontWeight:'bold'
                    }}> / {allQuestions.length}</Text>
                    </View>
                    <View>
                        <Text style={{
                        fontSize:30,
                        fontWeight:'bold',
                        color:COLORS.white
                    }} >Puntuación: { (score / allQuestions.length)*10}</Text>
                    </View>
                    {/* <TouchableOpacity style={{
                        backgroundColor:COLORS.green,
                        padding:20, width:'100%',borderRadius:35, borderColor:COLORS.black, borderWidth:3 
                    }}
                    onPress={restartQuiz}
                    >
                        <Text style={{
                            textAlign:'center', color:COLORS.black, fontSize:20
                        }}>Intentar de nuevo</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={{
                        backgroundColor:COLORS.green,
                        padding:20, width:'90%',borderRadius:35, borderColor:COLORS.black, borderWidth:4, marginVertical:5
                    }}
                    onPress={()=>navigation.goBack()}
                    >
                        <Text style={{
                            textAlign:'center', color:COLORS.black, fontSize:20, fontWeight:'bold'
                        }}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Modal>
            </View>
          
            </SafeAreaView>
        );
}
export default QuestionsScreen