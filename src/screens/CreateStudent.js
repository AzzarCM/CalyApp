import {StyleSheet, Text, SafeAreaView, View, ScrollView} from 'react-native';
import React from 'react';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import AuthInput from '../components/AuthInput';
import Button from '../components/Button';

const CreateStudent = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      <ScrollView contentContainerStyle={styles.formContainer}>
        <ImagePicker />
        <View style={styles.form}>
          <AuthInput
            label="Nombre: "
            placeholder="Ingresa el nombre completo"
            border
          />
          <AuthInput
            label="Correo electrónico: "
            placeholder="Ingresa el correo electrónico"
            border
            type="email-address"
          />
          <AuthInput
            label="Contraseña: "
            placeholder="Ingresa la contraseña"
            border
            secure={true}
          />
          <AuthInput
            label="Confirmar contraseña: "
            placeholder="Ingresa la contraseña"
            border
            secure={true}
          />
          <View style={styles.btnContainer}>
          <Button text='Crear' />
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateStudent;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingBottom: 60,
  },
  form: {
    marginTop: 30,
  },
  btnContainer: {
    marginHorizontal: 80,
  }
});
