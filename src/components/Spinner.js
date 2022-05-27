import { StyleSheet, View } from 'react-native'
import { ActivityIndicator} from 'react-native-paper';
import React from 'react'

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating={true} color='#3E5BF1' />
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})