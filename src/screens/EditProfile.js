import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import FormInput from '../components/Inputs/FormInput';
import Button from '../components/Button';
import {updateStudentProfile} from '../redux/actions/auth';
import {validUpdateProfile} from '../utils/valid-forms';
import Popup from '../components/Modals/Popup';

const EditProfile = ({route, navigation}) => {
  const {isTeacher} = route.params;
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const {photo, email, token, uid, active, role} = useSelector(state => state.auth);
  const {loading, success} = useSelector(state => state.ui);
  const [profileData, setProfileData] = useState({
    email,
    photo: photo,
    active: active,
  });

  const {email: newEmail, photo: newPhoto, active: newActive} = profileData;

  useEffect(() => {
    if (success) {
      navigation.navigate('Home');
    }
  }, [success]);

  const onUpdateProfile = async () => {
    try {
      const isValid = validUpdateProfile(newEmail, newPhoto);
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
              email: newEmail,
              photo: newPhoto,
            },
            source,
            role,
          ),
        );
      }
    } catch ({message}) {
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
          label="Email: "
          value={newEmail}
          onChangeText={text => setProfileData({...profileData, email: text})}
        />
        {isTeacher && (
          <View style={styles.switchContainer}>
            <ToggleSwitch
              isOn={newActive}
              onColor="#26C788"
              offColor="#A9B3C1"
              label="Activo:"
              labelStyle={{
                color: 'black',
                fontFamily: 'Sora-Medium',
                fontSize: 17,
              }}
              size="medium"
              onToggle={isOn => setProfileData({...profileData, active: isOn})}
            />
          </View>
        )}

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
  switchContainer: {
    marginVertical: 25,
  },
  btnContainer: {
    marginHorizontal: 80,
  },
});
