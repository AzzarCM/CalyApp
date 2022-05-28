import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import PickerModal from '@freakycoder/react-native-picker-modal';
import CameraPicker from 'react-native-image-crop-picker';
import PropTypes from 'prop-types';

import ImageCard from './ImageCard';
import ImageInput from './ImageInput';

const initialState = {
  fileUri: null,
  filePath: '',
  base64: null,
};

const ImagePicker = ({urlImage = null, setImage, cardStyle = {}}) => {
  const [imageSelected, setImageSelected] = useState({
    ...initialState,
    fileUri: urlImage,
  });

  const [isVisible, setisVisible] = useState(false);

  const options = {
    cropping: true,
    includeBase64: true,
    freeStyleCropEnabled: true,
    compressImageQuality: 0.75,
  };

  const onSaveImage = (image) => {
    const {path, data: base64} = image;
    setisVisible(false);
    setImageSelected({
      filePath: path,
      fileUri: path,
      base64: base64,
    });
    setImage(base64);
  }

  return (
    <>
      <PickerModal
        title="Puedes tomar una foto o seleccionar una de tu álbum."
        isVisible={isVisible}
        data={['Tomar una foto', 'Seleccionar de la galería']}
        onPress={selectedItem => {
          switch (selectedItem) {
            case 'Tomar una foto':
              CameraPicker.openCamera(options).then(onSaveImage).catch(console.log);
              break;
            default:
              CameraPicker.openPicker(options).then(onSaveImage).catch(console.log);
              break;
          }
        }}
        onCancelPress={() => {
          setisVisible(false);
        }}
        onBackdropPress={() => {
          setisVisible(false);
        }}
      />
      {imageSelected.fileUri ? (
        <View style={styles.imageContainer}>
          <ImageCard
            source={{uri: imageSelected.fileUri}}
            onPress={() => {
              setImageSelected(initialState);
              setImage(null);
            }}
            imageStyle={cardStyle}
          />
          <ImageInput
            label="Cambiar foto"
            type="card"
            onPress={() => setisVisible(true)}
          />
        </View>
      ) : (
        <ImageInput label="Agregar foto" onPress={() => setisVisible(true)} />
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
