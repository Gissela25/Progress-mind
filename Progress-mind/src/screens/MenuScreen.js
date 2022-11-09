import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SignStyles from '../styles/SignStyles'
import { firebase } from '../config/config'
import Help from './helpScreens/Help'
import About from './helpScreens/About'
import Modal from '../components/Modal'

const MenuScreen = () => {
    const [name, setName] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)
    const selectedComponent = (key) => {
        switch (key) {
            case 'ayuda':
                setRenderComponent(<Help
                    setShowModal={setShowModal}
                />)
                break;
            case 'about':
                setRenderComponent(<About
                    setShowModal={setShowModal}
                />)
                break;
        }
        setShowModal(true)
    }
    
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
                <TouchableOpacity style={SignStyles.ConteinerOptions}
                   onPress={() => selectedComponent('ayuda')}>
                    <Text style={SignStyles.TextOptions}>Ayuda
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={SignStyles.ConteinerOptions}
                   onPress={() => selectedComponent('about')}>
                    <Text style={SignStyles.TextOptions}>Sobre nosotros
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
                <Modal isVisible={showModal} setVisible={setShowModal}>
                    {
                        renderComponent
                    }
                </Modal>
            </View>
        </View>
    )
}

export default MenuScreen