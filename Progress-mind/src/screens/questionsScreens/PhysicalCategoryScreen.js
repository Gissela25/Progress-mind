import { View, Text, ScrollView, Pressable , ImageBackground} from "react-native";
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
             <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/fisica/cdpnn.png" }} style={{ width: 100, height: 80, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"eym",
                    array: subCategoryQuestions
                })}>
             <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/fisica/EMA.png" }} style={{ width: 100, height: 58, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
        </Pressable>
        <Pressable 
        style={GlobalStyles.buttonsCategory}
        onPress={()=>navigation.navigate('Levels',{
                    id:"ofc",
                    array: subCategoryQuestions
                })}>
              <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/fisica/ofc.png" }} style={{ width: 100, height: 70, marginLeft: 110, marginTop: 20 }}>
                </ImageBackground>
        </Pressable>

</ScrollView>
    );
}

export default PhysicalCategoryScreen