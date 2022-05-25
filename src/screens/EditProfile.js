import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../components/FocusAwareStatusBar'

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
       <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
    paddingVertical: 20,
  },
})