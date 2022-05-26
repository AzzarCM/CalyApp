import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

const DetailButton = ({text, onPress, loading = false}) => {
  const emptyFunction = () => {};
  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={loading ? emptyFunction : onPress}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default DetailButton;

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FFA76D',
    borderRadius: 10,
    height: 25,
    width: 130,
    height: 35,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'Sora-SemiBold',
  },
});
