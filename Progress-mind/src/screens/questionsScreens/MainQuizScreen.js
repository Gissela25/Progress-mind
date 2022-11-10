import React, { useState } from "react";
import { Text, View, Button, Image, Pressable, TouchableOpacity, ImageBackground } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { getAuth, signOut } from 'firebase/auth';
import { firebase } from '../../config/config'
import { ScrollView } from "react-native-gesture-handler";

const auth = getAuth();

const MainQuizScreen = ({ navigation }) => {
    return (
        <ScrollView>
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
                    source={require('../../imgs/FooterDone.png')}
                    style={{
                        position: 'absolute',
                        marginTop: 200,
                        zIndex: -1
                    }}

                />
            </View>
        </ScrollView>
    );
}

export default MainQuizScreen;