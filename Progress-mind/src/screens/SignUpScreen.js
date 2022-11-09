import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
//import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SignStyles from '../styles/SignStyles'
import { firebase } from '../config/config'

// const auth = getAuth()
const SignUpScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [confirmPassword, setConfirmPassword] = useState('')
    //const [validationMessage, setValidationMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lasName, setLastName] = useState('')

    const registerUser = async (email, password, firstName, lasName) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://progress-mind-29681.firebaseapp.com',
                })
                    .then(() => {
                        alert('Verification email sent')
                    }).catch(error => {
                        alert(error.message)
                    })
                    .then(() => {
                        firebase.firestore().collection('users')
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                firstName,
                                lasName,
                                email,
                            })
                    })
                    .catch((error) => {
                        alert('Todos los campos deben estar completos')
                    })
            })
            .catch((error => {
                alert('Todos los campos deben estar completos')
            }))
    }

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    // const [validationMessage, setValidationMessage] = useState('')


    // let validateAndSet = (value, setValue) => {
    //     setValue(value)
    // }
    // function checkPassword(firstpassword, secondpassword) {
    //     if (firstpassword !== secondpassword) {
    //         setValidationMessage('Las contraseñas no coinciden')
    //     }
    //     else setValidationMessage('')
    // }
    // async function createAccount() {
    //     email === '' || password === ''
    //         ? setValidationMessage('Todos los campos deben estar llenos')
    //         : ''
    //     try {
    //         await createUserWithEmailAndPassword(auth, email, password);
    //         navigation.navigate('Sign In');
    //     } catch (error) {
    //         setValidationMessage(error.message);
    //     }
    // }
    return (
        <View style={SignStyles.Conteiner}>
            <View style={SignStyles.Topconteiner2}>
                <Image source={require('../imgs/Logo.png')} style={{ width: 200, height: 250, alignSelf: 'center' }} />
            </View>
            <View style={SignStyles.Bottonconteiner2}>
                <TextInput
                    style={SignStyles.Inputstyle}
                    placeholder="Nombre"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    autoCapitalize={false}
                />
                <TextInput
                    style={SignStyles.Inputstyle}
                    placeholder="Apellido"
                    onChangeText={(lastName) => setLastName(lastName)}
                    autoCorrect={false}
                />
                <TextInput
                    style={SignStyles.Inputstyle}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <TextInput
                    style={SignStyles.Inputstyle}
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                {/* <TextInput
                    placeholder='confirm password'
                    style={SignStyles.Inputstyle}
                    value={confirmPassword}
                    onChangeText={(value) => validateAndSet(value, setConfirmPassword)}
                    secureTextEntry
                    onBlur={() => checkPassword(password, confirmPassword)}
                /> */}
                {/* {<Text style={SignStyles.Errorstyle}>{validationMessage}</Text>} */}
                <TouchableOpacity
                    onPress={() => registerUser(email,password,firstName,lasName)}
                    style={SignStyles.Buttonstyle}
                    activeOpacity={0.9}
                >
                    <Text style={SignStyles.Textsigninstyle2}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
                    <Text style={SignStyles.Textsignupstyle2}>Ya tengo una cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignUpScreen;