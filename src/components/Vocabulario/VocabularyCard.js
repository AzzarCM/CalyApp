import {StyleSheet, Text, View, Image} from 'react-native';
import DetailButton from '../Buttons/DetailButton';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const VocabularyCard = ({ item}) => {
  const { word, image } = item;
  const navigation = useNavigation();
  return (
    <View style={styles.cardWidth}>
      <View style={styles.mainContainer}>
        <Image style={styles.img} source={{ uri: image }} />
        <View style={styles.rightContainer}>
          <Text style={styles.txt}>{word}</Text>
          <DetailButton
            text="Ver más"
            onPress={() =>
              navigation.navigate('VocabularioDetail', { word, image})
            }
          />
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default VocabularyCard;

const styles = StyleSheet.create({
  cardWidth: {
    width: '100%',
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
    fontSize: 17,
    color: '#3D3D3D',
  },
  rightContainer: {
    marginLeft: 30,
  },
  line: {
    height: 1,
    backgroundColor: '#A9B3C1',
    marginTop: 20,
  },
});
