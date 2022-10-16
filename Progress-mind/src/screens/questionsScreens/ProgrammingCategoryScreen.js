import { View, Text, Pressable, ScrollView, ImageBackground } from "react-native";
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
                 <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/informatica/html.png" }} style={{ width: 100, height: 60, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"css",
                    array: subCategoryQuestions
                })}>
                    <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/informatica/cssn.png" }} style={{ width: 100, height: 80, marginLeft: 110, marginTop: 12 }}>
                </ImageBackground>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"js",
                    array: subCategoryQuestions
                })}>
                    <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/informatica/jsn12.png" }} style={{ width: 100, height: 60, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"csharp",
                    array: subCategoryQuestions
                })}>
                             <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/informatica/cs.png" }} style={{ width: 100, height: 50, marginLeft: 110, marginTop: 25 }}>
                </ImageBackground>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"php",
                    array: subCategoryQuestions
                })}>
                    <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/informatica/phpnn.png" }} style={{ width: 100, height: 50, marginLeft: 110, marginTop: 25 }}>
                </ImageBackground>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttonsCategory}
                onPress={()=>navigation.navigate('Levels',{
                    id:"react",
                    array: subCategoryQuestions
                })}>
                    <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/informatica/reactn1.png" }} style={{ width: 100, height: 70, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
                </Pressable>
        </ScrollView>
    );
}

export default ProgrammingCategoryScreen