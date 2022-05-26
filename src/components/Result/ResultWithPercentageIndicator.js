import {StyleSheet, Text, View} from 'react-native';
import DetailButton from '../Buttons/DetailButton';
//import CircularProgress from 'react-native-circular-progress-indicator';
import ProgressCircle from 'react-native-progress-circle';
import React from 'react';

//example data to model the card
const sample = {
  texto: 'Hola Rudi',
  date: '1h',
  percentage: '76',
};

//info must come from props.
const ResultWithPercentageIndicator = () => {
  const {texto, date, percentage} = sample;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.upper}>
        <Text style={styles.textHeader}>{texto}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.bottom}>
        <DetailButton text="Ver detalle" />
        <ProgressCircle
          percent={parseFloat(percentage)}
          radius={25}
          borderWidth={8}
          color="#147AD6"
          shadowColor="#979797"
          bgColor="#fff">
          <Text style={styles.percentText}>{`${percentage}%`}</Text>
        </ProgressCircle>
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
    width: '85%',
  },
  upper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingTop: 10,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 40,
    paddingBottom: 10,
  },
  percentText: {
    fontWeight: '500',
    color: '#000',
  },
  textHeader: {
    fontWeight: 'bold',
  },
  date: {
    backgroundColor: '#AED5FF',
    borderRadius: 10,
    width: 40,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  }
});
