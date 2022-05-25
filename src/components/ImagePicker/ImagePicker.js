import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard';
import ImageInput from './ImageInput';

const initialState = {
  fileUri: null,
  filePath: '',
  base64: null,
};

const ImagePicker = ({urlImage = null, setImage}) => {
  const [imageSelected, setImageSelected] = useState({
    ...initialState,
    fileUri: urlImage,
  });

  const chooseOnePicture = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      includeBase64: true,
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (!response.didCancel && !response.error && !response.customButton) {
        setImageSelected({
          filePath: response.assets[0],
          fileUri: response.assets[0].uri,
          base64: response.assets[0].base64,
        });
		setImage(response.assets[0].base64);
      }
    });
  };

  return (
    <>
      {imageSelected.fileUri ? (
        <View style={styles.imageContainer}>
          <ImageCard
            source={{uri: imageSelected.fileUri}}
            onPress={() => {
              setImageSelected(initialState);
              setImage(null);
            }}
          />
          <ImageInput
            label="Cambiar foto"
            type="card"
            onPress={chooseOnePicture}
          />
        </View>
      ) : (
        <ImageInput label="Agregar foto" onPress={chooseOnePicture} />
      )}
    </>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

ImagePicker.propTypes = {
  urlImage: PropTypes.string,
  setImage: PropTypes.func.isRequired,
};
