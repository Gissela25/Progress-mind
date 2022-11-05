import { View, Text, Image,TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config/config'
import SignStyles from '../styles/SignStyles'

const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const forgotPassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
         alert("Password reset email sent")
        }).catch((error) => {
         alert(error)
        })
     }
    return (
        <View style={SignStyles.Conteiner}>
            <View style={SignStyles.Topconteiner}>
                <Image source={require('../imgs/Logo.png')} style={{ width: 450, height: 400, alignSelf: 'center' }} />
            </View>
            <View style={SignStyles.Bottonconteiner}>
            <Text style={SignStyles.ForgotStyle}>Ingrese su correo electronico</Text>
            <TextInput
                    placeholder='Email'
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={SignStyles.Inputstyle}
                />
                <TouchableOpacity
                    onPress={() => forgotPassword()}
                    style={SignStyles.Buttonstylef}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textsigninstyle2}>Recuperar contraseña</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                    <Text style={SignStyles.Textsignupstyle2}>Regresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ForgotPasswordScreen