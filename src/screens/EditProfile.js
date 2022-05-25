import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import ImagePicker from '../components/ImagePicker/ImagePicker';
import FormInput from '../components/Inputs/FormInput';
import Button from '../components/Button';

const EditProfile = () => {
  const {photo, name} = useSelector(state => state.auth);
  const [profileData, setProfileData] = useState({
    name: name,
    photo: photo,
  })

  const { name: newName, photo: newPhoto } = profileData;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      <View style={styles.formContainer}>
        <ImagePicker urlImage={newPhoto} setImage={(img) => setProfileData({ ...profileData, photo: img })} />
        <FormInput
          label="Nombre: "
          value={newName}
          onChangeText={text => setProfileData({ ...profileData, name: text })}
        />
        <View style={styles.btnContainer}>
          <Button text="guardar" onPress={() => {}} />
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
  }
});
