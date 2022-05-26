import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';

const VocabularioDetail = ({route, navigation}) => {
  const {params} = route;
  const {palabra, image} = params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image style={styles.img} source={image} />
        <View style={styles.soundDiv}>
          <Text style={styles.palabra}>{palabra}</Text>
          <TouchableOpacity style={styles.soundIcon}>
            <Icon name="sound" size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.whiteBorder}></View>
      <View style={styles.btn}>
        <Button
          text="practicar"
          onPress={() => navigation.navigate('HandwritingAnalysis', {palabra})}
        />
      </View>
    </View>
  );
};

export default VocabularioDetail;

const styles = StyleSheet.create({
  img: {
    borderRadius: 10,
    resizeMode: 'cover',
    height: 240,
    width: '100%',
    borderRadius: 30,
  },
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
    width: '100%',
  },
  container: {
    backgroundColor: '#FFA76D',
    height: 350,
    borderRadius: 30,
    width: '85%',
    alignSelf: 'center',
    marginTop: 25,
  },
  soundDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  soundIcon: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  palabra: {
    textTransform: 'capitalize',
    fontSize: 35,
    color: '#FFF',
    fontFamily: 'Sora-SemiBold',
  },
  whiteBorder: {
    backgroundColor: '#FFF',
    height: 35,
    width: '65%',
    alignSelf: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  btn: {
    marginTop: 40,
    width: '60%',
    alignSelf: 'center'
  }
});
