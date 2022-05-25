import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import FormInput from '../components/Inputs/FormInput';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import Button from '../components/Button';

const HandwritingAnalysis = () => {
  const [word, setWord] = useState('');
  const [image, setImage] = useState(null);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      <View style={styles.formContainer}>
        <FormInput
          label="Palabra a analizar: "
          placeholder="Ingresa la palabra a analizar"
          value={word}
          onChangeText={setWord}
        />

        <Text style={[styles.label, {marginBottom: image ? 40 : 20}]}>
          Adjunta tu solución:
        </Text>
        <ImagePicker setImage={base64 => setImage(base64)} />
        <View style={styles.btnContainer}>
        <Button text='Analizar' onPress={() => console.log('pressed')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HandwritingAnalysis;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
    paddingVertical: 20,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 17,
    color: '#000000',
    marginTop: 20,
    fontFamily: 'Sora-Medium',
  },
  btnContainer: {
    marginHorizontal: 20,
    marginTop: 25,
  }
});
