import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const StudentCard = ({student}) => {
  const {name, photo, id} = student;
  const navigation = useNavigation();
  return (
    <View style={styles.containerPerfil}>
      <View style={styles.imgplusname}>
        <View>
          <Image style={styles.image} source={{uri: photo}} />
        </View>
        <View style={styles.contactInfo}>
          <Text numberOfLines={1} style={styles.displayName}>
            {name}
          </Text>
        </View>
        <View />
      </View>
      <TouchableRipple
        style={styles.icon}
        borderless
        onPress={() =>
          navigation.navigate('StudentResults', {
            idStudent: id,
						name
          })
        }>
        <Icon name="chevron-right" size={30} color="#000" />
      </TouchableRipple>
    </View>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  containerPerfil: {
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 70,
    borderColor: '#E6E6E6',
    borderWidth: 2,
  },
  image: {
    width: 45,
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  imgplusname: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%',
  },
  icon: {
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 10,
    height: 34,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayName: {
    color: '#060948',
    fontFamily: 'Sora-Medium',
    fontSize: 17,
  },
  label: {
    color: '#A6A7B2',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contactInfo: {
    marginLeft: 8,
    maxWidth: '75%',
  },
});
