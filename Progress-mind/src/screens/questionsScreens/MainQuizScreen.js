import React from "react";
import { Text, View, Button, Pressable, TouchableOpacity } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { getAuth, signOut } from 'firebase/auth';
import SignStyles from "../../styles/SignStyles";

const auth = getAuth();

const MainQuizScreen = ({navigation}) => {
    return(
        <View style={GlobalStyles.quizContainer}>
                <Pressable 
                style={GlobalStyles.buttons}
                onPress={()=>navigation.navigate('Programming',{
                    id:"programacion"
                })}>
                    <Text style={GlobalStyles.textButtons}>Informatica</Text>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttons}
                onPress={()=>navigation.navigate('Math',{
                    id:"matematica"
                })}>
                    <Text style={GlobalStyles.textButtons}>Matemática</Text>
                </Pressable>
                <Pressable 
                style={GlobalStyles.buttons}
                onPress={()=>navigation.navigate('Physical',{
                    id:"fisica"
                })}>
                    <Text style={GlobalStyles.textButtons}>Física</Text>
                </Pressable>

                <TouchableOpacity
                    onPress={() => signOut(auth)}
                    style={SignStyles.Buttonstyle}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textsigninstyle2}>Cerrar Sesión</Text>
                </TouchableOpacity>
        </View>
    );
}

export default MainQuizScreen;