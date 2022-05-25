import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Avatar, Text, Menu, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import {logout, updateUser} from '../redux/actions/auth';
import HomeItem from '../components/HomeItem';
import AnalisisImage from '../assets/analisis.png';
import EstudiantesImage from '../assets/estudiantes.png';
import ResultadosImage from '../assets/resultados.png';
import EditarImage from '../assets/editar.png';
import VocabularioImage from '../assets/vocabulario.png';
import { getStudentById } from '../api/student';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const {uid, name, photo, role, token} = useSelector(state => state.auth);

  useEffect(() => {
    if(uid && token) {
      getStudentById(uid, token)
      .then(( response ) => {
        if(response.ok){
          const {active, name, photo} = response.user;
          dispatch(updateUser({ active, name, photo }));
        }
      })
    }
  }, []);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const userLogout = () => {
    dispatch(logout());
    closeMenu();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FBF5F2" />
      <View style={styles.header}>
        <Avatar.Image
          size={55}
          source={{
            uri: photo,
          }}
        />
        <TouchableRipple onPress={openMenu} style={styles.touchable}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Icon name="menu" color="#060948" size={30} />}>
            <Menu.Item onPress={userLogout} title="Cerrar sesion" />
          </Menu>
        </TouchableRipple>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.greetings}>Hola, </Text>
        <Text style={styles.name}>{name.split(' ')[0]}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.itemsContainer}>
        <HomeItem
          title="Analisis caligrafico"
          image={AnalisisImage}
          onPress={() => console.log('press')}
        />
        <HomeItem
          title={role === 'teacher' ? 'Estudiantes' : 'Vocabulario'}
          image={role === 'teacher' ? EstudiantesImage : VocabularioImage}
          onPress={() => console.log('press')}
        />
        <HomeItem
          title="Resultados"
          image={ResultadosImage}
          onPress={() => navigation.navigate('StudentResults')}
        />
        <HomeItem
          title="Editar perfil"
          image={EditarImage}
          onPress={() => navigation.navigate('EditProfile')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBF5F2',
    height: '100%',
    paddingVertical: 20,
  },
  touchable: {
    marginRight: 15,
    padding: 8,
  },
  header: {
    paddingVertical: 10,
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 75,
    width: '100%',
  },
  nameContainer: {
    paddingLeft: 25,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  greetings: {
    fontSize: 20,
    fontFamily: 'Sora-Regular',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Sora-SemiBold',
    marginLeft: 5,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 20,
    paddingBottom: 30,
  }
});
