import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';


const HomeItem = ({ title, image, onPress }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={image}
          style={styles.image}
        />
        <Text style={styles.label}>{ title }</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 150,
    height: 175,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Sora-Bold',
    color: '#000',
  },
});

HomeItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired,
};
