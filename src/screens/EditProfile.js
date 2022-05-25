import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import FormInput from '../components/Inputs/FormInput';
import Button from '../components/Button';
import {updateStudentProfile} from '../redux/actions/auth';
import {fileUpload} from '../utils/file-upload';
import {validUpdateProfile} from '../utils/valid-forms';
import Popup from '../components/Modals/Popup';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const {photo, name, token, uid} = useSelector(state => state.auth);
  const {loading, success} = useSelector(state => state.ui);
  const [profileData, setProfileData] = useState({
    name: name,
    photo: photo,
  });

  const {name: newName, photo: newPhoto} = profileData;

  useEffect(() => {
    if (success) {
      navigation.navigate('Home');
    }
  }, [success]);

  const onUpdateProfile = async () => {
    try {
      const isValid = validUpdateProfile(newName, newPhoto);
      if (isValid) {
        let source = null;
        if (newPhoto !== photo) {
          source = 'data:image/jpg;base64,' + newPhoto;
        }
        dispatch(
          updateStudentProfile(
            uid,
            token,
            {
              full_name: newName,
              photo: newPhoto,
            },
            source,
          ),
        );
      }
    } catch ({ message }) {
      Popup.show({
				type: 'Danger',
				title: '¡Oh no!',
				textBody: message,
				buttontext: 'Aceptar',
				callback: () => Popup.hide(),
			});
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      <View style={styles.formContainer}>
        <ImagePicker
          urlImage={newPhoto}
          setImage={img => setProfileData({...profileData, photo: img})}
        />
        <FormInput
          label="Nombre: "
          value={newName}
          onChangeText={text => setProfileData({...profileData, name: text})}
        />
        <View style={styles.btnContainer}>
          <Button text="guardar" onPress={onUpdateProfile} loading={loading} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

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
  btnContainer: {
    marginHorizontal: 80,
  },
});
