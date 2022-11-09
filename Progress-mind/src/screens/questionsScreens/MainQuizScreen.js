import React, { useState } from "react";
import { Text, View, Button,Image, Pressable, TouchableOpacity, ImageBackground } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { getAuth, signOut } from 'firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons'
import SignStyles from "../../styles/SignStyles";
import { firebase } from '../../config/config'
import { ScrollView } from "react-native-gesture-handler";
import Help from "../helpScreens/Help";
import Modal from '../../components/Modal'
import About from "../helpScreens/About";

const auth = getAuth();

const MainQuizScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)
    const selectedComponent = (key) =>{
        switch(key){
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
    return (
        <ScrollView>
        <View style={{flexDirection: "row", left:0, position: "relative"}}>
        <Pressable style={GlobalStyles.buttons2}>
        <Icon name="help" size={30} color='white' onPress={()=> selectedComponent('ayuda')} />
        </Pressable>
        <Pressable style={GlobalStyles.buttons2}>
        <Icon name="people" size={30} color='white' onPress={()=> selectedComponent('about')} />
        </Pressable>            
        </View>
        <View style={GlobalStyles.quizContainer}>
            <Pressable
                style={GlobalStyles.buttons}
                onPress={() => navigation.navigate('Programming', {
                    id: "programacion"
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/categorias/Informatica.png" }} style={{ width: 150, height: 100, marginLeft: 85, marginTop: 20 }}>
                </ImageBackground>
            </Pressable>
            <Pressable
                style={GlobalStyles.buttons}
                onPress={() => navigation.navigate('Math', {
                    id: "matematica"
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/categorias/matematica.jpg" }} style={{ width: 150, height: 100, marginLeft: 85, marginTop: 20 }}>
                </ImageBackground>
            </Pressable>
            <Pressable
                style={GlobalStyles.buttons}
                onPress={() => navigation.navigate('Physical', {
                    id: "fisica"
                })}>
                <ImageBackground source={{ uri: "https://progressmind.000webhostapp.com/Img/Categorias/categorias/fisica.jpg" }} style={{ width: 150, height: 100, marginLeft: 85, marginTop: 20 }}>
                </ImageBackground>
            </Pressable>
            <Modal isVisible={showModal} setVisible={setShowModal}>
            {
                renderComponent
            }
            </Modal>
            {/* <TouchableOpacity
            onPress={() => {firebase.auth().signOut()}}
            //style={styles.button}
            >
                <Text style={{fontSize:22, fontWeight:'bold'}}>
              Sing Out
                </Text>
            </TouchableOpacity> */}

            <Image
                        source={require('../../imgs/FondoM.png')}
                        style={{
                            position: 'absolute',
                            marginTop: 450,
                            zIndex: -1
                        }}

                    />
        </View>
        </ScrollView>
    );
}

export default MainQuizScreen;