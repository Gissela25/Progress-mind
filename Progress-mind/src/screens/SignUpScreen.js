import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
        <View style={styles.contenedor}>
            <View style={styles.caja1}>
                <Image source={require('../imgs/Logo.png')} style={{ width: 200, height: 250, alignSelf: 'center' }} />
            </View>
            <View style={styles.caja2}>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    value={password}
                    onChangeText={(value) => validateAndSet(value, setPassword)}
                    secureTextEntry
                />
                <TextInput
                    placeholder='confirm password'
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={(value) => validateAndSet(value, setConfirmPassword)}
                    secureTextEntry
                    onBlur={() => checkPassword(password, confirmPassword)}
                />
                {<Text style={styles.error}>{validationMessage}</Text>}
                {/* <Button title="Sign up" buttonStyle={{ marginTop: 10 }} onPress={createAccount} />
                <View>
                    <Text style={{ marginTop: 5, fontSize: 17 }}>Already have an account?
                        <TouchableOpacity onPress={() => navigation.navigate('Sign In')} style={{ color: 'blue', marginLeft: 10 }}>
                            <Text>Login here </Text>
                        </TouchableOpacity>
                    </Text>
                </View> */}
                <TouchableOpacity
                    onPress={createAccount}
                    style={styles.button}
                    activeOpacity={0.9}
                >
                    <Text style={{
                        //textAlign: 'center',
                        marginLeft: 50,
                        fontSize: 18,
                        color: '#000000',
                        width: 300
                    }}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                    <Text style={{
                        marginLeft: 43,
                        fontSize: 18,
                        color: '#C4FF63',
                        width: 300,
                        marginLeft: 91,
                        marginTop: 10,
                    }}>Ya tengo una cuenta</Text>
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
        flex: 1,
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
    }
});
export default SignUpScreen;