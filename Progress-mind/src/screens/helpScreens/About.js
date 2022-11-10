import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/constants/Theme'
import Icon from 'react-native-vector-icons/Ionicons'

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.principal}>Developers</Text>
      <Text></Text>
      <Text style={styles.common}>Rodrigo Josué Vides Navas</Text>
      <Text style={styles.common}>Jony Edenilson Morales López</Text>
      <Text style={styles.common}>William Fernando Portan Pineda</Text>
      <Text style={styles.common}>Gissela Verenice Serrano López</Text>
      <Text style={styles.common}>Susan Abigail Zelaya Flores</Text>
    <Text></Text>
    <Text></Text>
    <Text style={styles.principal}>Contact Us</Text>
    <Text></Text>
    <View style={{flexDirection: 'row'}}>
        <Icon name='at' color={COLORS.darkblue} size={30}/>
        <Text style={styles.parrafo}>progressmind350@gmail.com</Text>
    </View>
    <Text style={{fontSize: 14, fontWeight: 'bold'}}>© Todos los derechos reservados</Text>

    {/* <Image
                        source={require('../../imgs/Lo.png')}
                        style={{
                            position: 'absolute',
                            marginTop: 200,
                            left: -50,
                            zIndex: -1
                        }}

                    /> */}
                    <Image source={require('../../imgs/Logo.png')} style={{ width: 200, height: 120, alignSelf: 'center' }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        textAlign: 'center',
        alignContent: 'center',
        padding: 5,
        marginVertical: 5
    },
    principal:{
        textAlign:'center',
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        top:5,
        color: COLORS.green,
        fontSize:20,
    },
    common:{
        fontSize: 15,
      color: COLORS.black,
      justifyContent: 'center',
      fontStyle: 'italic'
    },
    parrafo:{
        fontSize: 18,
      color: COLORS.black,
      justifyContent: 'center'
    }
})