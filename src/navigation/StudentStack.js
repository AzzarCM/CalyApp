import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import EditProfile from '../screens/EditProfile';
import HandwritingAnalysis from '../screens/HandwritingAnalysis';
import CaligrafyResults from '../screens/CaligrafyResults';
import Vocabulario from '../screens/Vocabulario';

const Stack = createStackNavigator();

export default function StudentStack() {
  const buttonLeft = () => (
    <Icon
      name="arrow-back-ios"
      size={30}
      color="#000"
      style={{paddingLeft: 15}}
    />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTransparent: true, title: '', headerRight: null}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'Editar perfil',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Sora-Medium',
          },
          headerBackImage: () => buttonLeft(),
          headerStyle: {
            backgroundColor: '#FBF5F2'
          },
        }}
      />
      <Stack.Screen
        name="HandwritingAnalysis"
        component={HandwritingAnalysis}
        options={{
          title: 'Análisis caligráfico',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Sora-Medium',
          },
          headerBackImage: () => buttonLeft(),
          headerStyle: {
            backgroundColor: '#FBF5F2'
          },
        }}
      />
      <Stack.Screen
        name='StudentResults'
        component={CaligrafyResults}
        options={{
          title: 'Resultados',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Sora-Medium',
          },
          headerBackImage: () => buttonLeft(),
          headerStyle: {
            backgroundColor: '#FBF5F2'
          },
        }}
      />
      <Stack.Screen
        name='Vocabulario'
        component={Vocabulario}
        options={({route}) => ({
          title: route.params.vocabularyTitle,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Sora-Medium',
          },
          headerBackImage: () => buttonLeft(),
          headerStyle: {
            backgroundColor: '#FBF5F2'
          },
        })}
      />
    </Stack.Navigator>
  );
}
