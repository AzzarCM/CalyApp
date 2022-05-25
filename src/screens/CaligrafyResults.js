import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ResultComponent from '../components/Result/ResultWithPercentageIndicator'

export default function CaligrafyResults() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.title}>Resultados</Text>
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
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
      textAlign: 'center',
      fontSize: 19,
      fontWeight: 'bold',
  }
});
