import { useEffect, useState } from "react";

import { View, Text, FlatList, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, Animated, Modal, Alert, Pressable, Image } from "react-native";
import { List } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from "../../styles/constants/Theme";
import RenderQuestion from "../../components/componentsQuiz/RenderQuestion";
import RenderProgressBar from "../../components/componentsQuiz/RenderProgressBar";
import RenderNextButton from "../../components/componentsQuiz/RenderNextButton";
import RenderModal from "../../components/componentsQuiz/RenderModal";
import RenderOptions from "../../components/componentsQuiz/RenderOptions";
import QuestionsStyles from "../../styles/QuestionsStyles";

const QuestionsScreen = ({ route, navigation }) => {
    const { questions } = route.params;
    const [allQuestions, setAllQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [score, setScore] = useState(0);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [progress, setProgress] = useState(new Animated.Value(0));
    const [existImg, setExistImg] = useState(false);
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%'],
    })

    useEffect(() => {

        if (currentQuestionIndex == 0) {
            setAllQuestions(handleShuffle(questions));
        }
        setOptions(handleShuffle(questions[currentQuestionIndex]?.options))
        if (questions[currentQuestionIndex]?.withImg == true) {
            setExistImg(true)
        }
    }, [currentQuestionIndex]);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    const handleScreen = () =>{
        setCurrentQuestionIndex(0);
         navigation.goBack();
    }

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionDisabled(true);
        if (selectedOption === correct_option) {
            setScore(score + 1)
        }
        setShowNextButton(true);
    }
    const handleNext = () => {
        if (currentQuestionIndex === allQuestions.length - 1) {
            setShowScoreModal(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={QuestionsStyles.ViewQuestions}>
                    <RenderProgressBar progressAnim={progressAnim} />
                    <RenderQuestion currentQuestionIndex={currentQuestionIndex} allQuestions={allQuestions} existImg={existImg} />
                    <RenderOptions isOptionDisabled={isOptionDisabled} options={options} correctOption={correctOption} currentOptionSelected={currentOptionSelected} validateAnswer={validateAnswer} />
                    <RenderNextButton showNextButton={showNextButton} handleNext={handleNext} />
                    <RenderModal showScoreModal={showScoreModal} allQuestions={allQuestions} score={score} navigation={navigation} handleScreen={handleScreen} />
                    <Image
                        source={require('../../imgs/Fondo.png')}
                        style={{
                            position: 'absolute',
                            marginTop: 400,
                            zIndex: -1
                        }}

                    />
                </View>
            </SafeAreaView>

    );
}
export default QuestionsScreen