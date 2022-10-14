
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SignStyles from '../styles/SignStyles'

const auth = getAuth()
const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validationMessage, setValidationMessage] = useState('')


    let validateAndSet = (value, setValue) => {
        setValue(value)
    }
    function checkPassword(firstpassword, secondpassword) {
        if (firstpassword !== secondpassword) {
            setValidationMessage('Password do not match')
        }
        else setValidationMessage('')
    }
    async function createAccount() {
        email === '' || password === ''
            ? setValidationMessage('required filled missing')
            : ''
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('Sign In');
        } catch (error) {
            setValidationMessage(error.message);
        }
    }
    return (
        <View style={SignStyles.Conteiner}>
            <View style={SignStyles.Topconteiner2}>
                <Image source={require('../imgs/Logo.png')} style={{ width: 200, height: 250, alignSelf: 'center' }} />
            </View>
            <View style={SignStyles.Bottonconteiner2}>
                <TextInput
                    placeholder='Email'
                    style={SignStyles.Inputstyle}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    style={SignStyles.Inputstyle}
                    value={password}
                    onChangeText={(value) => validateAndSet(value, setPassword)}
                    secureTextEntry
                />
                <TextInput
                    placeholder='confirm password'
                    style={SignStyles.Inputstyle}
                    value={confirmPassword}
                    onChangeText={(value) => validateAndSet(value, setConfirmPassword)}
                    secureTextEntry
                    onBlur={() => checkPassword(password, confirmPassword)}
                />
                {<Text style={SignStyles.Errorstyle}>{validationMessage}</Text>}
                <TouchableOpacity
                    onPress={createAccount}
                    style={SignStyles.Buttonstyle}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textsigninstyle2}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                    <Text style={SignStyles.Textsignupstyle2}>Ya tengo una cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignUpScreen;