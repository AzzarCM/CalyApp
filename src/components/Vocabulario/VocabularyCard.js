import {StyleSheet, Text, View, Image} from 'react-native';
import DetailButton from '../Buttons/DetailButton';
import React from 'react';

const VocabularyCard = ({image, text}) => {
  return (
    <View style={styles.cardWidth}>
      <View style={styles.mainContainer}>
        <Image style={styles.img} source={image} />
        <View style={styles.rightContainer}>
          <Text style={styles.txt}>{text}</Text>
          <DetailButton text="Ver más" onPress={() => console.log('hi')}/>
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default VocabularyCard;

const styles = StyleSheet.create({
  cardWidth: {
    width: '90%',
    marginBottom: 20,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 160,
    height: 90,
    borderRadius: 10,
  },
  txt: {
    textTransform: 'capitalize',
    fontFamily: 'Sora-SemiBold',
    marginBottom: 18,
  },
  rightContainer: {
    marginLeft: 30
  },
  line: {
    height: 1,
    backgroundColor: '#A9B3C1',
    marginTop: 20,
  },
});
