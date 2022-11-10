import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import SignStyles from '../styles/SignStyles'
import { firebase } from '../config/config'

// const auth = getAuth()
const SignUpScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validationMessage, setValidationMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lasName, setLastName] = useState('')
    const [error, setError] = useState('')
    const [error2, setError2] = useState('')
    const [error3, setError3] = useState('')
    const [error4, setError4] = useState('')
    let regexString = /^(([a-zA-ZÁÉÍÓÚáéíóú]+)[ ]?([a-zA-ZÁÉÍÓÚáéíóú]+)?)+$/gm;
    let regexString2 = /^(([a-zA-ZÁÉÍÓÚáéíóú]+)[ ]?([a-zA-ZÁÉÍÓÚáéíóú]+)?)+$/gm;
    let regexPassword = /^[a-zA-Z0-9$#%()+*-_.&]{8,}$/gm;
    let regexEmai = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/gm;

    let validateAndSet = (value, setValue) => {
        setValue(value)
    }
    function checkPassword(firstpassword, secondpassword) {
        if (firstpassword !== secondpassword) {
            setValidationMessage('Las contraseñas no coinciden')
        }
        else setValidationMessage('')
    }

    const registerUser = async (email, password, firstName, lasName) => {
        if (regexString.test(firstName) && regexString2.test(lasName) && regexEmai.test(email) && regexPassword.test(password)) {
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
                            alert(error.message)
                        })
                })
                .catch((error => {
                    alert(error.message)
                }))
        } else if (firstName !== "" && !regexString.test(firstName) && lasName !== "" && !regexString2.test(lasName) && email !== "" && !regexEmai.test(email) && email !== "" && !regexPassword.test(password)) {
            if (firstName !== "" && !regexString.test(firstName)) {
                setError('Solo puedes ingresar letras')
            }
            if (lasName !== "" && !regexString2.test(lasName)) {
                setError2('Solo puedes ingresar letras')
            }
            if (email !== "" && !regexEmai.test(email)) {
                setError3('Debes ingresar el formato de email correcto')
            }
            if (password !== "" && !regexPassword.test(password)) {
                setError4('La contraseña debe tener almenos 8 caracteres')
            }
            return
        }else{
            Alert.alert(
                'Error',
                'Ops! Ha habido un problema, vuelve a intentarlo'
            )
        }
    }
    return (
        <View style={SignStyles.Conteiner}>
            <View style={SignStyles.Topconteiner2}>
                <Image source={require('../imgs/Logo.png')} style={{ width: 200, height: 220, alignSelf: 'center' }} />
            </View>
            <View style={SignStyles.Bottonconteiner2}>
                <TextInput
                    style={SignStyles.Inputstyle}
                    placeholder="Nombre"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    autoCapitalize={false}
                />
                <Text style={SignStyles.Errorstyle}>{error}</Text>
                <TextInput
                    style={SignStyles.Inputstyle}
                    placeholder="Apellido"
                    onChangeText={(lasName) => setLastName(lasName)}
                    autoCorrect={false}
                />
                <Text style={SignStyles.Errorstyle}>{error2}</Text>
                <TextInput
                    style={SignStyles.Inputstyle}
                    placeholder="Correo Electrónico"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <Text style={SignStyles.Errorstyle}>{error3}</Text>
                <TextInput
                    style={SignStyles.Inputstyle}
                    placeholder="Contraseña"
                    onChangeText={(value) => validateAndSet(value, setPassword)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                />
                <Text style={SignStyles.Errorstyle}>{error4}</Text>
                <TextInput
                    style={SignStyles.Inputstyle}
                    placeholder="Confirmar Contraseña"
                    onChangeText={(value) => validateAndSet(value, setConfirmPassword)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={confirmPassword}
                    onBlur={() => checkPassword(password, confirmPassword)}
                />
                {<Text style={SignStyles.error}>{validationMessage}</Text>}
                <TouchableOpacity
                    onPress={() => registerUser(email, password, firstName, lasName)}
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