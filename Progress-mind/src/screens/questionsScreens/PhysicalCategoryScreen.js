import { View, Text, ScrollView, Pressable } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyles from "../../styles/GlobalStyles";
const PhysicalCategoryScreen = ({route, navigation}) =>{
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
                    id:"cdp",
                    array: subCategoryQuestions
                })}>
            <Text style={GlobalStyles.textButtonsCaterogry}>Cinemática y Dinámica de Particulas</Text>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"eym",
                    array: subCategoryQuestions
                })}>
            <Text style={GlobalStyles.textButtonsCaterogry}>Electricidad y Magnetismo</Text>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"ofc",
                    array: subCategoryQuestions
                })}>
            <Text style={GlobalStyles.textButtonsCaterogry}>Oscilaciones, Fluidos y Calor</Text>
        </Pressable>

</ScrollView>
    );
}

export default PhysicalCategoryScreen