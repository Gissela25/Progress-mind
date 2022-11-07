import {View, Image } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function Splash() {
    const navigate = useNavigation();
    setTimeout(()=>{
        navigate.navigate('Log In')
    }, 5000)


  return (
    <View>
      <Image
        source={require('../imgs/loading-10.gif')}
        style={{width: 400, height: 800}}        
       />
    </View>
  )
}
