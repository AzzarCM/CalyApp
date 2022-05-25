import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import EditProfile from '../screens/EditProfile';

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
          },
          headerBackImage: () => buttonLeft(),
          headerStyle: {
            backgroundColor: '#FBF5F2'
          },
        }}
      />
    </Stack.Navigator>
  );
}
