import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ResultComponent from '../components/Result/ResultWithPercentageIndicator'

export default function CaligrafyResults() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <ResultComponent/>
        <ResultComponent/>
        <ResultComponent/>
        <ResultComponent/>
        <ResultComponent/>
        <ResultComponent/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%'
  },
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
      textAlign: 'center',
      fontSize: 19,
      fontWeight: 'bold',
  }
});
