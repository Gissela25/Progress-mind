import { COLORS } from "../../styles/constants/Theme";
import { Text, View, Image } from "react-native";
import QuestionsStyles from "../../styles/QuestionsStyles";
const RenderQuestion = ({currentQuestionIndex, allQuestions, existImg}) =>{
    return(
        <View style={QuestionsStyles.ContentQuestionsStyles}>
        <View
        style={QuestionsStyles.ViewTextRenderQuestionsStyle}>
            <Text style={QuestionsStyles.TextRenderQuestionsStyle}>Pregunta: </Text>
            <Text style={QuestionsStyles.TextRenderQuestionsStyle}>{  currentQuestionIndex + 1}</Text>
            <Text style={QuestionsStyles.TextRenderQuestionsStyle}>/ {allQuestions.length}</Text>
        </View>

        <Text style={QuestionsStyles.TextQuestionStyle}>{allQuestions[currentQuestionIndex]?.question}  </Text>
        {existImg===true?<Image style={QuestionsStyles.ImageQuestionStyle} source={{uri:allQuestions[currentQuestionIndex]?.img}} />: <Text></Text> }

    </View>
    );
};

export default RenderQuestion;