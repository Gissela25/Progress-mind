import { Modal, View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../styles/constants/Theme";
import QuestionsStyles from "../../styles/QuestionsStyles";

const RenderModal = ({showScoreModal, allQuestions, score, navigation, handleScreen }) => {
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={showScoreModal}>
        <View style={QuestionsStyles.ModalViewStyle}>
            <View style={QuestionsStyles.ModalViewContentStyle}>
                <Text style={QuestionsStyles.TextMessageStyle}>
                    {score >(allQuestions.length/2)?'Felicidades!':'¡Puedes Mejorar!'}
                </Text>
                <View style={QuestionsStyles.ViewResultStyle}>
                <Text style={{
                    fontSize:30,
                    fontWeight:'bold',
                    color:score> (allQuestions.length/2)? COLORS.success: COLORS.error
                }}>{score}</Text>
                <Text style={QuestionsStyles.TextResultStyle}> / {allQuestions.length}</Text>
                </View>
                <View>
                    <Text style={QuestionsStyles.TextResultStyle} >Puntuación: { (score / allQuestions.length)*10}</Text>
                </View>

                <TouchableOpacity style={QuestionsStyles.ButtonBackStyle}
                onPress={handleScreen()}
                >
                    <Text style={QuestionsStyles.TextButtonBackStyle}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </Modal>
    );
};
export default RenderModal;