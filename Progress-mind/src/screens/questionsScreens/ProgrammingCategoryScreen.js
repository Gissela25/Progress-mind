import { View, Text, Pressable, ScrollView, Image } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import axios from 'axios';
import { useEffect, useState } from "react";

const ProgrammingCategoryScreen = ({route, navigation}) =>{
    const {id} = route.params;
    const [subCategoryQuestions, setSubCategoryQuestions] = useState([]);
    const [consult, setConsult] = useState(true);
    useEffect(()=>{
        const obtenerSubCategorias = async ()=>{
            if(consult){
                try {
                    const resultado = await axios.get(`http://10.0.2.2:3000/categorias/${id}`);
                    setSubCategoryQuestions(resultado.data);
                    setConsult(false);
            } catch (error) {
                console.table(error);
            }
            }  
        };
        obtenerSubCategorias();
    },[consult])
    return(
        <ScrollView style={GlobalStyles.quizCategoryContainer}>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"html",
                    array: subCategoryQuestions
                })}>
                    <Text style={GlobalStyles.textButtonsCaterogry}>HTML 
                   </Text>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"css",
                    array: subCategoryQuestions
                })}>
                    <Text style={GlobalStyles.textButtonsCaterogry}>CSS</Text>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"js",
                    array: subCategoryQuestions
                })}>
                    <Text style={GlobalStyles.textButtonsCaterogry}>JavaScript</Text>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"csharp",
                    array: subCategoryQuestions
                })}>
                    <Text style={GlobalStyles.textButtonsCaterogry}>C#</Text>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"php",
                    array: subCategoryQuestions
                })}>
                    <Text style={GlobalStyles.textButtonsCaterogry}>PHP</Text>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"react",
                    array: subCategoryQuestions
                })}>
                    <Text style={GlobalStyles.textButtonsCaterogry}>React</Text>
                </Pressable>
        </ScrollView>
    );
}

export default ProgrammingCategoryScreen