import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{ text }</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: 'Sora-Medium',
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
    }
})