import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../styles/constants/Theme";
import QuestionsStyles from "../../styles/QuestionsStyles";

const RenderNextButton = ({showNextButton, handleNext}) =>{
    if(showNextButton){
        return(
            <TouchableOpacity
            onPress={handleNext}
            style={QuestionsStyles.NextButtonStyle}>
            <Text style={QuestionsStyles.TextNextButtonStyle}>Siguiente</Text>
            </TouchableOpacity>
        )
    }
    else{
        return null;
    }
};

export default RenderNextButton;