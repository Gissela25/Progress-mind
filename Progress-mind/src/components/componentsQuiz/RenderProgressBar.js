import { View, Animated, } from "react-native";
import QuestionsStyles from "../../styles/QuestionsStyles";
const RenderProgressBar = ({progressAnim})=>{
    return(
        <View style={QuestionsStyles.ViewRenderProgressBarStyle}>
            <Animated.View style={[QuestionsStyles.AnimatedViewRenderProgressBarStyle,{
                width:progressAnim
            }]}>
            </Animated.View>
        </View>
    );
};

export default RenderProgressBar;