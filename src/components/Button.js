import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{ text }</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#EB9F4A',
    borderRadius: 25,
    height: 55,
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
    fontFamily: 'Sora-SemiBold',
  },
});

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}
