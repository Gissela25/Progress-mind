import React from "react";
import { Text, View, Button, Pressable, TouchableOpacity } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { getAuth, signOut } from 'firebase/auth';

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

                <Button title="Sign Out" style={{marginTop:10}} onPress={() => signOut(auth)} />
        </View>
    );
}

export default MainQuizScreen;