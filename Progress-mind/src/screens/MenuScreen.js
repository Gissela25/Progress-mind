import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SignStyles from '../styles/SignStyles'
import { firebase } from '../config/config'

const MenuScreen = () => {
    const [name, setName] = useState('')

    const changePassword = () => {
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
            .then(() => {
                alert("Email enviado")
            }).catch((error) => {
                alert(error)
            })
    }

    useEffect(() => {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setName(snapshot.data())
                } else {
                    console.log('User does not exist')
                }
            })
    }, [])

    return (
        <View style={SignStyles.Conteiner}>
            <View style={SignStyles.Bottonconteiner}>
                <TouchableOpacity style={SignStyles.ConteinerName}>
                    <Text style={SignStyles.TextName}>
                        Hello, {name.firstName} {name.lasName}
                    </Text>
                </TouchableOpacity>
                <Text style={SignStyles.TextEmail}>{name.email} </Text>
                <TouchableOpacity style={SignStyles.ConteinerOptions}
                    onPress={() => {
                        changePassword()
                    }}>
                    <Text style={SignStyles.TextOptions}>Actualizar contraseña
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { firebase.auth().signOut() }}
                    style={SignStyles.Buttonstyledrawer}
                >
                    <Text style={SignStyles.TextlogOut}>
                        Cerrar Sesion
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MenuScreen