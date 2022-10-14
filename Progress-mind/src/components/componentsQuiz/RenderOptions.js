import { COLORS } from "../../styles/constants/Theme";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, View, Text } from "react-native";
import QuestionsStyles from "../../styles/QuestionsStyles";
const RenderOptions = ({options, correctOption, currentOptionSelected, validateAnswer, isOptionDisabled}) =>{
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
                                <View style={QuestionsStyles.CorrectOptionStyle}>
                                <MaterialCommunityIcons name="check-bold" style={QuestionsStyles.IconCorrectOptionStyle} />
                                </View>
                            ): option === currentOptionSelected ? (
                                <View style={QuestionsStyles.SelectedOptionStyle}>
                                 <MaterialCommunityIcons name="close-thick" style={QuestionsStyles.IconSelectedOptionStyle} />

                                </View>
                            ):null
                        }
                        </TouchableOpacity>
                    ))
                }
        </View>
    );
};
export default RenderOptions