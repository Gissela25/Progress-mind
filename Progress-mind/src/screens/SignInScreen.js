import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import {initializeApp} from 'firebase/app'
import * as WebBrowser from 'expo-web-browser';
import SignStyles from '../styles/SignStyles'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config/config'

initializeApp({
    apiKey: "AIzaSyAcOsEbUK_nkmkR8b-QkXG7j3IaszKq8CA",
    authDomain: "test-f9568.firebaseapp.com",
    projectId: "test-f9568",
    storageBucket: "test-f9568.appspot.com",
    messagingSenderId: "691579296252",
    appId: "1:691579296252:web:fee721bcaf1269bec8fa79",
    measurementId: "G-R5WXYWL27D"
})
WebBrowser.maybeCompleteAuthSession();

const SignInScreen = () => {


    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
          clientId: '691579296252-o3r70v2k7j0uo1s90n9glf3hpm7rrvqn.apps.googleusercontent.com',
        },
      );
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { id_token } = response.params;
          const auth = getAuth();
          const credential = GoogleAuthProvider.credential(id_token);
          signInWithCredential(auth, credential);
        }
      }, [response]);
    

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }
    }

    // // async function login() {
    // //     if (email === '' || password === '') {
    // //         setvalidationMessage('Todos los campos debene estar llenos')
    // //         return;
    // //     }

    // //     try {
    // //         await signInWithEmailAndPassword(auth, email, password);
    // //     } catch (error) {
    // //         setvalidationMessage(error.message);
    // //     }
    // // }

    return (
        <View style={SignStyles.Conteiner}>
            <View style={SignStyles.Topconteiner}>
                <Image source={require('../imgs/Logo.png')} style={{ width: 450, height: 400, alignSelf: 'center' }} />
            </View>
            <View style={SignStyles.Bottonconteiner}>
                <TextInput
                    placeholder='Email'
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={SignStyles.Inputstyle}
                />

                <TextInput
                    placeholder='Password'
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    style={SignStyles.Inputstyle}
                />
                {/* {<Text style={SignStyles.Errorstyle}>{validationMessage}</Text>} */}

                <TouchableOpacity
                    //onPress={login}
                    onPress={() => loginUser(email, password)}
                    style={SignStyles.Buttonstyle}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textsigninstyle}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={SignStyles.Textsignupstyle}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} disabled={!request} onPress={() => promptAsync()}>
                    <Text style={SignStyles.Textgooglestyle}>Inicia Sesión con Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Forgot')}
                >
                    <Text style={SignStyles.Textsignupstyle2}>Olvide mi contraseña</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
export default SignInScreen;
