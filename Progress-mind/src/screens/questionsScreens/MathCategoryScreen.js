import { View, Text, ScrollView, Pressable, Alert } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import axios from 'axios';
import { useEffect, useState } from "react";
const MathCategoryScreen = ({route, navigation}) =>{
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
                    id:"cad",
                    array: subCategoryQuestions
                })}>
            <Text style={GlobalStyles.textButtonsCaterogry}>Cálculo Diferencial</Text>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"cai",
                    array: subCategoryQuestions
                })}>
            <Text style={GlobalStyles.textButtonsCaterogry}>Cálculo Integral</Text>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"cvv",
                    array: subCategoryQuestions
                })}>
            <Text style={GlobalStyles.textButtonsCaterogry}>Cálculo de Varias Variables</Text>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"caa",
                    array: subCategoryQuestions
                })}>
            <Text style={GlobalStyles.textButtonsCaterogry}>Cálculo Avanzado</Text>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"edi",
                    array: subCategoryQuestions
                })}>
            <Text style={GlobalStyles.textButtonsCaterogry}>Ecuaciones Diferenciales</Text>
        </Pressable>

</ScrollView>
    );
}

export default MathCategoryScreen