import { Pressable, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/constants/Theme'

export default function Help({navigation}) {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.subcontainer}>
      <Text style={styles.Titulo}>Selección de categoría</Text>
      <Text style={styles.parrafo}>Se presentan 3 opciones de categoría: </Text>
      <Text style={styles.parrafo}> -{'>'} Matemática </Text>
      <Text style={styles.parrafo}> -{'>'} Programación</Text>
      <Text style={styles.parrafo}> -{'>'} Física</Text>
      <Text style={styles.parrafo}>Cada una con diferentes sub categorias y niveles para seleccionar</Text>
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
      <Image source={require('../../imgs/princip.jpeg')} style={styles.image}/>
      <Text style={styles.footer}>Menu categorias</Text>
      </View>
      
    </View>
        
    <View>
      <Text style={styles.Titulo}>Selección de Subcategoría</Text>
      <Text style={styles.parrafo}>Del mismo modo se presentan diferentes subcategorias dependiendo de</Text>
      <Text style={styles.parrafo}>la categoría seleccionada. Para la categoría de Programación</Text>
      <Text style={styles.parrafo}>se tienen las siguientes subcategorias:</Text>
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
      <Image source={require('../../imgs/progra1.jpeg')} style={styles.image}/>
      <Text style={styles.footer}>Subcateorias programacion</Text>
      <Image source={require('../../imgs/progra2.jpeg')} style={styles.image}/>
      <Text style={styles.footer}>Subcateorias programacion</Text>
      </View>

      <Text style={styles.parrafo}>Las subcategorias de Matemática son las siguientes:</Text>
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
      <Image source={require('../../imgs/matesubs.jpeg')} style={styles.image}/>
      <Text style={styles.footer}>Subcateorias matematica</Text>
      </View>

      <Text style={styles.parrafo}>Por ultimo las subcategorias de Física son:</Text>
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
      <Image source={require('../../imgs/fisica.jpeg')} style={styles.image}/>
      <Text style={styles.footer}>Subcateorias fisica</Text>
      </View>
    </View>
        
    <View>
      <Text style={styles.Titulo}>Selección de Nivel</Text>
      <Text style={styles.parrafo}>Cada una de las subcategorias posee niveles, los cuales</Text>
      <Text style={styles.parrafo}>determinan el nivel de dificultad de las preguntas</Text>
      <Text style={styles.parrafo}>unicamente se muestran 3 niveles, tu decides la dificultad</Text>
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
      <Image source={require('../../imgs/levels.jpeg')} style={styles.image}/>
      <Text style={styles.footer}>Menú niveles</Text>
      <Text></Text>
      </View>
    </View>        

    <View>
      <Text style={styles.Titulo}>Preguntas</Text>
      <Text style={styles.parrafo}>Cada pregunta posee items de respuesta, de los cuales debes seleccionar</Text>
      <Text style={styles.parrafo}>uno, ¡No olvides que posees tiempo de respuesta! </Text>
      <Text style={styles.parrafo}>ahora si, ¡Hora de aprender divirtiendose!</Text>
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
      <Image source={require('../../imgs/final.jpeg')} style={styles.image}/>
      <Text style={styles.footer}>Preguntas</Text>
      <Image source={require('../../imgs/final2.jpeg')} style={styles.image}/>
      <Text style={styles.footer}>Pantalla de marcador</Text>
      <Text></Text>
      </View>
    </View>      

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        textAlign: 'center',
        alignContent: 'center',
        padding: 5,
        marginVertical: 5
    },
    subcontainer:{
      padding: 10,
      marginVertical: 5,
    },
    parrafo:{
      fontSize: 10,
      color: COLORS.black,
      justifyContent: 'center'
    },
    footer:{
      fontSize: 10,
      color: COLORS.black,
      justifyContent: 'center',
      fontStyle: 'italic'
    },
    Titulo:{
      textAlign:'center',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        top:1,
        color: COLORS.green,
        fontSize:20,
    },
    image:{
      width: 230,
      height: 400
    }
})