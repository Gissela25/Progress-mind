import { StyleSheet } from 'react-native'
import {Overlay} from 'react-native-elements'
import React from 'react'

export default function Modal({isVisible, setVisible, children}) {
  return (
    <Overlay
    isVisible={isVisible}
    overlayStyle={styles.overlay}
    onBackdropPress={() => setVisible(false)}
    >
    {
        children
    }
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay:{
        width: "80%",
        height: '60%'
    }
})