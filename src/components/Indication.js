import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Indication = ({ label, image }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Recomendaciones</Text>
        <Image
          source={image}
          style={styles.image}
        />
      
      <Text style={styles.label}>{ label }</Text>
    </View>
  );
};

export default Indication;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: '#191B32',
    fontFamily: 'Sora-Bold',
    marginBottom: 40,
  },
  image: {
    maxWidth: 170,
    height: 170,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Sora-Medium',
    marginTop: 30
  },
});
