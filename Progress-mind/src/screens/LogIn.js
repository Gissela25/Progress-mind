import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import SignStyles from '../styles/SignStyles'
import { Button } from 'react-native-elements'
//import { Button } from '@rneui/themed';
import Theme, { COLORS } from '../styles/constants/Theme'
import { color } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app'
import * as WebBrowser from 'expo-web-browser';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';


const LogIn = () => {
    const navigation = useNavigation();
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

    return (
        <View style={SignStyles.Conteiner}>
            <View style={SignStyles.Bottonconteiner}>
                <Text style={SignStyles.TextSing}>Iniciar Sesión</Text>
                <Button
                    icon={{ name: 'mail-outline', type: 'ionicon', color: COLORS.darkblue,  size: 30, }}
                    title='Iniciar sesion con tu correo electronico'
                    titleStyle={{ color: COLORS.darkblue, fontSize:20 }}
                    buttonStyle={{
                        backgroundColor: COLORS.green
                    }}
                    containerStyle={{
                        //width: 200,
                        marginHorizontal: 10,
                        //marginVertical: 10,
                        marginTop:140,
                    }}
                    onPress={() => navigation.navigate('Sign In')}
                />
                 <Button
                    icon={{ name: 'logo-google', type: 'ionicon', color: COLORS.darkblue,  size: 30, }}
                    title='Iniciar sesion con Google'
                    titleStyle={{ color: COLORS.darkblue, fontSize:20 }}
                    buttonStyle={{
                        backgroundColor: COLORS.green
                    }}
                    containerStyle={{
                        //width: 200,
                        marginHorizontal: 10,
                        //marginVertical: 10,
                        marginTop:30,
                    }}
                    disabled={!request} onPress={() => promptAsync()}
                />
                <Text style={SignStyles.TextAccount}>¿Es la primera vez que visitas Progress Mind?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={SignStyles.Textsignupstyle}>Crear una cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogIn