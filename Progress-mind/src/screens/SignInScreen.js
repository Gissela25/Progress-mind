
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import SignStyles from '../styles/SignStyles'

const auth = getAuth();

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationMessage, setvalidationMessage] = useState('');

    async function login() {
        if (email === '' || password === '') {
            setvalidationMessage('Todos los campos debene estar llenos')
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setvalidationMessage(error.message);
        }
    }

    return (
        <View style={SignStyles.Conteiner}>
            <View style={SignStyles.Topconteiner}>
                <Image source={require('../imgs/Logo.png')} style={{ width: 450, height: 400, alignSelf: 'center' }} />
            </View>
            <View style={SignStyles.Bottonconteiner}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={SignStyles.Inputstyle}
                />

                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    style={SignStyles.Inputstyle}
                />
                {<Text style={SignStyles.Errorstyle}>{validationMessage}</Text>}

                <TouchableOpacity
                    onPress={login}
                    style={SignStyles.Buttonstyle}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textsigninstyle}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={SignStyles.Textsignupstyle}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Text style={SignStyles.Textsignupstyle}>Inicia Sesión con Google</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}
export default SignInScreen;
