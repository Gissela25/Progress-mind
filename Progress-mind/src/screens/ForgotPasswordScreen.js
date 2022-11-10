import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config/config'
import SignStyles from '../styles/SignStyles'

const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    let regexEmai = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/gm;
    const forgotPassword = () => {
        if (regexEmai.test(email)) {
            firebase.auth().sendPasswordResetEmail(email)
                .then(() => {
                    alert("Email enviado")
                }).catch((error) => {
                    alert(error)
                })
            navigation.navigate('Sign In')
        } else if (email !== "" && !regexEmai.test(email)) {
            if (email !== "" && !regexEmai.test(email)) {
                setError('Debes ingresar el formato de email correcto')
            }
            return
        } else {
            Alert.alert(
                'Error',
                'Ops! Ha habido un problema, vuelve a intentarlo'
            )
        }
    }
    return (
        <View style={SignStyles.Conteiner}>
            <View style={SignStyles.Bottonconteiner2}>
                <Text style={SignStyles.ForgotStyle}>Restablecer la contraseña</Text>
                <Text style={SignStyles.ForgotStyle2}>Escribe la direccion de correo electronico asociada a tu cuenta y te enviaremos un enlace para que puedas restablecer tu contraseña</Text>
                <TextInput
                    placeholder='Email'
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={SignStyles.Inputstyle}
                />
                <Text style={SignStyles.Errorstyle}>{error}</Text>
                <TouchableOpacity
                    onPress={() => forgotPassword()}
                    style={SignStyles.Buttonstylef}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textsigninstyle2}>Recuperar contraseña</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
                    <Text style={SignStyles.Textsignupstyle2}>Inicio Sesion</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ForgotPasswordScreen