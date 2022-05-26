import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import flores from '../assets/Vocabulario/flores.jpg';
import VocabularyCard from '../components/Vocabulario/VocabularyCard';

export default function Vocabulario({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <VocabularyCard image={flores} text="flores" />
        <VocabularyCard image={flores} text="flores" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});
