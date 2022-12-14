import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SignStyles from '../styles/SignStyles'
import { firebase } from '../config/config'
import Help from './helpScreens/Help'
import About from './helpScreens/About'
import Modal from '../components/Modal'
import { Button } from 'react-native-elements'
import Theme, { COLORS } from '../styles/constants/Theme'
import { useNavigation } from '@react-navigation/native'

const MenuScreen = () => {
    const navigation = useNavigation();
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
                        Hola, {name.firstName} {name.lasName}
                    </Text>
                </TouchableOpacity>
                <Text style={SignStyles.TextEmail}>{name.email} </Text>
                <Button
                    icon={{ name:'home', type: 'font-awesome', color: COLORS.white, size: 23, }}
                    containerStyle={{
                        width: 80,
                        marginVertical: 7,
                    }}
                    title="Inicio"
                    type="clear"
                    titleStyle={{ color: COLORS.white, marginLeft:10, }}
                    onPress={() => navigation.navigate('MainQuizScreen') }
                />
                 <Button
                    icon={{ name:'calculator', type: 'font-awesome', color: COLORS.white, size: 23, }}
                    containerStyle={{
                        width: 140,
                        marginVertical: 7,
                    }}
                    title="Matem??ticas"
                    type="clear"
                    titleStyle={{ color: COLORS.white, marginLeft:10 }}
                    onPress={() => navigation.navigate('Math', {
                        id: "matematica"
                    })}
                />
                  <Button
                    icon={{ name:'code-outline', type: 'ionicon', color: COLORS.white, size: 23, }}
                    containerStyle={{
                        width: 140,
                        marginVertical: 7,
                    }}
                    title="Programaci??n"
                    type="clear"
                    titleStyle={{ color: COLORS.white, marginLeft:10 }}
                    onPress={() => navigation.navigate('Programming', {
                        id: "programacion"
                    })}
                />
                   <Button
                    icon={{ name:'flask', type: 'font-awesome', color: COLORS.white, size: 23, }}
                    containerStyle={{
                        width: 82,
                        marginVertical: 7,
                    }}
                    title="Fisica"
                    type="clear"
                    titleStyle={{ color: COLORS.white, marginLeft:10 }}
                    onPress={() => navigation.navigate('Physical', {
                        id: "fisica"
                    })}
                />
                    <Button
                    icon={{ name:'key-outline', type: 'ionicon', color: COLORS.white, size: 23, }}
                    containerStyle={{
                        width: 200,
                        marginVertical: 7,
                    }}
                    title="Actualizar Contrase??a"
                    type="clear"
                    titleStyle={{ color: COLORS.white,marginLeft:10 }}
                    onPress={() => {changePassword()}}
                />
                       <Button
                    icon={{ name:'help-outline', type: 'ionicon', color: COLORS.white, size: 23, }}
                    containerStyle={{
                        width: 87,
                        marginVertical: 7,
                    }}
                    title="Ayuda"
                    type="clear"
                    titleStyle={{ color: COLORS.white, marginLeft:10 }}
                    onPress={() => selectedComponent('ayuda')}
                />
                       <Button
                    icon={{ name:'users', type: 'font-awesome', color: COLORS.white, size: 23, }}
                    containerStyle={{
                        width: 165,
                        marginVertical: 7,
                    }}
                    title="Sobre Nosostros"
                    type="clear"
                    titleStyle={{ color: COLORS.white, marginLeft:10 }}
                    onPress={() => selectedComponent('about')}
                />
                <TouchableOpacity
                    onPress={() => { firebase.auth().signOut() }}
                    style={SignStyles.Buttonstyledrawer}
                >
                    <Text style={SignStyles.TextlogOut}>
                        Cerrar Sesi??n
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