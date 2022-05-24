import React from 'react';
import {StyleSheet, View, SafeAreaView, Image, ScrollView} from 'react-native';

import Logo from '../assets/logo-login.png';
import ImageLogin from '../assets/image-login.png';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import AuthInput from '../components/AuthInput';
import Button from '../components/Button';
import {useForm} from '../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { startLoginEmailPassword } from '../redux/actions/auth';


const Login = () => {

  const dispatch = useDispatch();
  const ui = useSelector(state => state.ui);

  const [formValues, setFormValues, reset] = useForm({
    username: '',
    password: '',
  });

  const {username, password} = formValues;

  const handleSubmit = () => {
    console.log('handleSubmit');
    dispatch(startLoginEmailPassword(username, password));
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <FocusAwareStatusBar
          barStyle="dark-content"
          backgroundColor="#FBF5F2"
        />
        <Image style={styles.logoContainer} source={Logo} />

        <View style={styles.formContainer}>
          <AuthInput
            placeholder="Ingresa tu usuario"
            label="Usuario"
            value={username}
            onChangeText={setFormValues('username')}
          />
          <AuthInput
            placeholder="Ingresa tu contraseña"
            label="Contraseña"
            value={password}
            onChangeText={setFormValues('password')}
            secure
          />
          <Button onPress={handleSubmit} text="Iniciar" />
        </View>

        <Image style={styles.imageContainer} source={ImageLogin} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: '60%',
    marginTop: -20,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '85%',
  },
  title: {
    fontSize: 30,
    color: '#191B32',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imageContainer: {
    marginTop: 40,
    width: '70%',
    height: '25%',
    resizeMode: 'contain',
  },
});
