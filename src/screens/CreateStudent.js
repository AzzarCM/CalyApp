import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import AuthInput from '../components/AuthInput';
import Button from '../components/Button';
import {useForm} from '../hooks/useForm';
import {finishLoading, startLoading, success, error} from '../redux/actions/ui';
import {validCreateStudent} from '../utils/valid-forms';
import Popup from '../components/Modals/Popup';
import { fileUpload } from '../utils/file-upload';
import { createStudent } from '../api/student';
import { showToast } from '../utils/utils';

const CreateStudent = ({ navigation }) => {
  const {uid, token} = useSelector(state => state.auth);
  const {loading, success : done} = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [formValues, setFormValues] = useForm({
    full_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    if (done) {
      navigation.navigate('Students');
    }
  }, [done])
  

  const {full_name, email, password, password_confirmation} = formValues;

  const onCreate = async () => {
    try {
      dispatch(startLoading());
      const isValid = validCreateStudent(
        full_name,
        email,
        password,
        password_confirmation,
        image,
      );
      if (isValid) {
        const source = 'data:image/jpg;base64,' + image;
        const fileUrl = await fileUpload(source)
        const data = {
          full_name,
          email,
          password,
          teacher_id: uid,
          photo: fileUrl
        };
        const response = await createStudent(data, token)
        if (response.ok) {
          dispatch(success());
          showToast(
            'success',
            'Estudiante creado',
            'Estudiante creado exitosamente',
          );
        } else {
          const {error} = response;
          showToast('error', '¡Oh no!', error);
        }
      }
    } catch ({message}) {
      Popup.show({
        type: 'Danger',
        title: '¡Oh no!',
        textBody: message,
        buttontext: 'Aceptar',
        callback: () => Popup.hide(),
      });
    } finally {
      dispatch(finishLoading());
      dispatch(error());
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      <ScrollView contentContainerStyle={styles.formContainer}>
        <ImagePicker setImage={setImage} />
        <View style={styles.form}>
          <AuthInput
            label="Nombre: "
            placeholder="Ingresa el nombre completo"
            value={full_name}
            onChangeText={setFormValues('full_name')}
            border
          />
          <AuthInput
            label="Correo electrónico: "
            placeholder="Ingresa el correo electrónico"
            value={email}
            onChangeText={setFormValues('email')}
            type="email-address"
            border
          />
          <AuthInput
            label="Contraseña: "
            placeholder="Ingresa la contraseña"
            onChangeText={setFormValues('password')}
            value={password}
            secure={true}
            border
          />
          <AuthInput
            label="Confirmar contraseña: "
            placeholder="Ingresa la contraseña"
            onChangeText={setFormValues('password_confirmation')}
            value={password_confirmation}
            secure={true}
            border
          />
          <View style={styles.btnContainer}>
            <Button text="Crear" loading={loading} onPress={onCreate} />
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
    paddingTop: 30,
    paddingBottom: 60,
  },
  form: {
    marginTop: 30,
  },
  btnContainer: {
    marginHorizontal: 80,
  },
});
