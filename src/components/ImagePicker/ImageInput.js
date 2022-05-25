import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import ImageIcon from '../../assets/add-image.png';
import PropTypes from 'prop-types';

const ImageInput = ({label, onPress, type = 'empty'}) => {
  const conditionContainer =
    type === 'card'
      ? styles.cardSelect
      : {
          borderStyle: 'dashed',
          borderColor: '#2CAEF2',
          backgroundColor: '#F7FBFE',
        };
  const conditionLabel = type === 'card' ? styles.cardLabel : {};
  const labelText = type === 'card' ? label.replace(' ', '\n') : label;
  return (
    <TouchableRipple
      style={[styles.select, conditionContainer]}
      borderless
      onPress={onPress}>
      <View style={[styles.container, conditionContainer]}>
        <Image source={ImageIcon} style={styles.image} />
        <Text style={[styles.label, conditionLabel]}>{labelText}</Text>
      </View>
    </TouchableRipple>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  select: {
    borderColor: '#d9d7d7',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: '#Fff',
  },
  cardSelect: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 150,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 125,
  },
  label: {
    fontSize: 15,
    marginLeft: 15,
    color: '#000',
    fontFamily: 'Sora-Regular',
  },
  cardLabel: {
    marginLeft: 0,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: 45,
    height: 45,
  },
});

ImageInput.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.string,
};
