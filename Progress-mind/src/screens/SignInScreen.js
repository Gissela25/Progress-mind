import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
        <View style={styles.contenedor}>
            <View style={styles.caja1}>
                <Image source={require('../imgs/Logo.png')} style={{ width: 450, height: 400, alignSelf: 'center' }} />
            </View>
            <View style={styles.caja2}>
                <TextInput
                    placeholder='Email'
                    containerStyle={{ marginTop: 10 }}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    style={styles.input}
                />
                {<Text style={styles.error}>{validationMessage}</Text>}

                {/* <Button title="Iniciar Sesion" buttonStyle={styles.button} onPress={login} /> */}
                <TouchableOpacity 
                 onPress={login} 
                style={styles.button}
                    activeOpacity={0.9}
                >
                    <Text style={{
                        //textAlign: 'center',
                        marginLeft: 43,
                        fontSize: 18,
                        color: '#000000',
                        width: 300
                    }}>Iniciar Sesión</Text>
                </TouchableOpacity>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ marginLeft:130, color: '#C4FF63' }}>
                    Registrarse
                </Text>
                    </View> */}
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={{
                        marginLeft: 43,
                        fontSize: 18,
                        color: '#C4FF63',
                        width: 300,
                        marginLeft: 120,
                        marginTop: 10,
                    }}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        flexDirection: 'column'
    },
    caja1: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        flex: 3,
    },
    caja2: {
        padding: 20,
        backgroundColor: '#082032',
        flex: 3,
    },
    input: {
        padding: 10,
        borderColor: '#FFF',
        borderWidth: 1,
        width: '100%',
        borderRadius: 20,
        marginTop: 25,
        backgroundColor: '#FFF',
        marginBottom: 10
    },
    button: {
        paddingVertical: 10,
        backgroundColor: '#C4FF63',
        borderWidth: 1,
        borderColor: '#C4FF63',
        borderRadius: 5,
        marginTop: 30,
        borderRadius: 20,
        width: 200,
        marginLeft: 70,
    },
    error: {
        marginTop: 10,
        color: 'red',
    },
});

export default SignInScreen;