import React from "react";
import { Text, View, Button,Image, Pressable, TouchableOpacity, ImageBackground } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { getAuth, signOut } from 'firebase/auth';
import SignStyles from "../../styles/SignStyles";

const auth = getAuth();

const MainQuizScreen = ({ navigation }) => {
    return (
        <View style={GlobalStyles.quizContainer}>
            <Pressable
                style={GlobalStyles.buttons}
                onPress={() => navigation.navigate('Programming', {
                    id: "programacion"
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/categorias/Informatica.png" }} style={{ width: 150, height: 100, marginLeft: 85, marginTop: 20 }}>
                </ImageBackground>
            </Pressable>
            <Pressable
                style={GlobalStyles.buttons}
                onPress={() => navigation.navigate('Math', {
                    id: "matematica"
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/categorias/matematica.jpg" }} style={{ width: 150, height: 100, marginLeft: 85, marginTop: 20 }}>
                </ImageBackground>
            </Pressable>
            <Pressable
                style={GlobalStyles.buttons}
                onPress={() => navigation.navigate('Physical', {
                    id: "fisica"
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/categorias/fisica.jpg" }} style={{ width: 150, height: 100, marginLeft: 85, marginTop: 20 }}>
                </ImageBackground>
            </Pressable>

            <Image
<<<<<<< Updated upstream
                        source={require('../../imgs/Footer.png')}
=======
                        source={require('../../imgs/FondoM2.png')}
>>>>>>> Stashed changes
                        style={{
                            position: 'absolute',
                            marginTop: 450,
                            zIndex: -1
                        }}

                    />

            {/* <TouchableOpacity
                onPress={() => signOut(auth)}
                style={SignStyles.Buttonstyle}
                activeOpacity={0.9}
            >
                <Text style={SignStyles.Textsigninstyle2}>Cerrar Sesión</Text>
            </TouchableOpacity> */}
        </View>
    );
}

export default MainQuizScreen;