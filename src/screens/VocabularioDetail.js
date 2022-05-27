import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';
import Tts from 'react-native-tts';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const VocabularioDetail = ({route, navigation}) => {
  const {params} = route;
  const {word, image} = params;

  const onSpeak = () => {
    Tts.setDefaultLanguage('es-MX');
    Tts.speak(word);
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: image }} />
        <View style={styles.soundDiv}>
          <Text style={styles.word}>{word}</Text>
          <TouchableOpacity onPress={onSpeak} style={styles.soundIcon}>
            <Icon name="sound" size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.whiteBorder}></View> */}
      <View style={styles.btn}>
        <Button
          text="practicar"
          onPress={() => navigation.navigate('HandwritingAnalysis', {word})}
        />
      </View>
    </SafeAreaView>
  );
};

export default VocabularioDetail;

const styles = StyleSheet.create({
  img: {
    borderRadius: 10,
    resizeMode: 'cover',
    height: 250,
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#e1e4e8',
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
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 20,
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
  word: {
    textTransform: 'capitalize',
    fontSize: 30,
    color: '#FFF',
    fontFamily: 'Sora-SemiBold',
  },
  // whiteBorder: {
  //   backgroundColor: '#FFF',
  //   height: 35,
  //   width: '65%',
  //   alignSelf: 'center',
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  //   elevation: 5,
  // },
  btn: {
    marginTop: 40,
    width: '60%',
    alignSelf: 'center'
  }
});
