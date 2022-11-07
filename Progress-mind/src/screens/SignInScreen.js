import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app'
import * as WebBrowser from 'expo-web-browser';
import SignStyles from '../styles/SignStyles'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config/config'
import { SocialIcon } from 'react-native-elements'
import {
    Button
} from 'react-native-elements'

initializeApp({
    apiKey: "AIzaSyAIJZtL6q3-0QPx5ATDyC1ScijP38m8QRs",
    authDomain: "progress-mind-29681.firebaseapp.com",
    projectId: "progress-mind-29681",
    storageBucket: "progress-mind-29681.appspot.com",
    messagingSenderId: "393239731378",
    appId: "1:393239731378:web:43d9bc9ba337164f847dab",
    measurementId: "G-Y0K8VVZXT3"
})
WebBrowser.maybeCompleteAuthSession();

const SignInScreen = () => {


    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
            clientId: '393239731378-dh2efq9tfufbmkecjdat92g244mfd0jg.apps.googleusercontent.com',
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
            alert('Ingrese email valido y contraseña')
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
                    onPress={() => loginUser(email, password)}
                    style={SignStyles.Buttonstyle}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textsigninstyle}>Iniciar Sesión</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={SignStyles.Textsignupstyle}>Registrarse</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity disabled={!request} onPress={() => promptAsync()}>
                <Text>GOOGle</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Forgot')}
                >
                    <Text style={SignStyles.Textsignupstyle2}>¿Has olvidado la contraseña?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default SignInScreen;
