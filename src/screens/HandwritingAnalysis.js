import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import StepsModal from 'react-native-steps-modal';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import FormInput from '../components/Inputs/FormInput';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import Button from '../components/Button';
import {validCreateAnalysis} from '../utils/valid-forms';
import Popup from '../components/Modals/Popup';
import {createAnalysis} from '../api/result';
import {
  deleteReminder,
  error,
  success,
  finishLoading,
  startLoading,
} from '../redux/actions/ui';
import Indication from '../components/Indication';
import LightImage from '../assets/iluminacion.png';
import PaperImage from '../assets/papel.png';
import PenImage from '../assets/lapicero.png';
import LetterImage from '../assets/letra.png';
import CropImage from '../assets/cortar-image.png';
import {showToast} from '../utils/utils';

const HandwritingAnalysis = ({navigation, route}) => {
  const { word: selectedWord } = route.params 
  const {uid, token} = useSelector(state => state.auth);
  const {loading, success: done, reminder} = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const [formAnalysis, setformAnalysis] = useState({
    word: selectedWord || '',
    original_image: null,
    id_user: uid,
  });
  const {word, original_image, id_user} = formAnalysis;

  useEffect(() => {
    if (done) {
      navigation.navigate('Home');
    }
  }, [done]);

  const onCreateAnalysis = async () => {
    try {
      dispatch(startLoading());
      dispatch(error());
      const isValid = validCreateAnalysis(word, original_image, id_user);
      if (isValid) {
        const response = await createAnalysis(formAnalysis, token);
        console.log(response)
        if (response.ok) {
          dispatch(success());
          showToast(
            'success',
            'Análisis creado',
            'Análisis creado exitosamente',
          );
        } else {
          showToast('error', '¡Oh no!', 'Ocurrió un error inesperado');
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
      <StepsModal
        isVisible={visible}
        skipLabel="Saltar"
        nextLabel="Siguiente"
        doneLabel="Finalizar"
        prevLabel="Atras"
        stepsComponents={[
          <Indication
            image={PaperImage}
            label="Uso de papel bond sin arrugas"
          />,
          <Indication image={LetterImage} label="Letra de model y separada" />,
          <Indication image={PenImage} label="Uso de lapicero" />,
          <Indication image={LightImage} label="Buena iluminación" />,
          <Indication image={CropImage} label="Recortar la imagen" />,
        ]}
        onSkipButtonPress={() => {
          setVisible(false);
          dispatch(deleteReminder());
        }}
        onFinishButtonPress={() => {
          setVisible(false);
          dispatch(deleteReminder());
        }}
      />
      <View style={styles.formContainer}>
        <FormInput
          label="Palabra a analizar: "
          placeholder="Ingresa la palabra a analizar"
          value={word}
          onChangeText={newWord =>
            setformAnalysis({...formAnalysis, word: newWord})
          }
        />
        <Text style={[styles.label, {marginBottom: original_image ? 40 : 20}]}>
          Adjunta tu solución:
        </Text>
        <ImagePicker
          setImage={base64 =>
            setformAnalysis({
              ...formAnalysis,
              original_image: base64 ? 'data:image/jpg;base64,' + base64 : null,
            })
          }
          cardStyle={styles.card}
        />
        <View style={styles.btnContainer}>
          <Button
            text="Analizar"
            onPress={onCreateAnalysis}
            loading={loading}
          />
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
    marginTop: 10,
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
  },
  card: {
    width: 200,
    resizeMode: 'contain',
  },
});
