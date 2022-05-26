import {StyleSheet, Text, View} from 'react-native';
import DetailButton from '../Buttons/DetailButton';
import CircularProgress from 'react-native-circular-progress-indicator';
import React, {useState} from 'react';
import ImageView from 'react-native-image-viewing';
import { getColor, getInactiveColor, timeAgo } from '../../utils/utils';

//info must come from props.
const ResultWithPercentageIndicator = ({ item }) => {
  const { word, score, processed_image, created_at } = item;
  const date = timeAgo(new Date(created_at).getTime());

  const [visible, setIsVisible] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <ImageView
        images={[
          {
            uri: processed_image,
          },
        ]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <View style={styles.upper}>
        <Text style={styles.textHeader}>{word}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.bottom}>
        <DetailButton text="Ver detalle" onPress={() => setIsVisible(true)} />
        <View style={styles.progressContainer}>
          <CircularProgress
            value={score}
            radius={32}
            inActiveStrokeColor={getInactiveColor(score)}
            inActiveStrokeOpacity={0.2}
            activeStrokeColor={getColor(score)}
            progressValueColor={'#000'}
            valueSuffix={'%'}
          />
        </View>
      </View>
    </View>
  );
};

export default ResultWithPercentageIndicator;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderColor: '#E6E6E6',
    borderWidth: 2,
  },
  upper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingTop: 15,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 15,
    paddingHorizontal: 15,

  },
  percentText: {
    fontWeight: '500',
    color: '#000',
  },
  textHeader: {
    fontFamily: 'Sora-Medium',
    fontSize: 18,
    color: '#000',
  },
  date: {
    backgroundColor: '#4aa1ff',
    borderRadius: 20,
    width: 58,
    height: 25,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Sora-Bold',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  }
});
