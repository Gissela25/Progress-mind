import { View, Text, ScrollView, Pressable, Alert, ImageBackground } from "react-native";
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
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/matematica/cadnn.png" }} style={{ width: 100, height: 80, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"cai",
                    array: subCategoryQuestions
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/matematica/cainn.png" }} style={{ width: 100, height: 70, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"cvv",
                    array: subCategoryQuestions
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/matematica/cvvnn.png" }} style={{ width: 100, height: 70, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"caa",
                    array: subCategoryQuestions
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/matematica/caann.png" }} style={{ width: 100, height: 70, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"edi",
                    array: subCategoryQuestions
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/matematica/edinn.png" }} style={{ width: 100, height: 80, marginLeft: 110, marginTop: 8 }}>
                </ImageBackground>
        </Pressable>

</ScrollView>
    );
}

export default MathCategoryScreen