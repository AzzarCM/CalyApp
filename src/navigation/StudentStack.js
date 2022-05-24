import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export default function StudentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTransparent: true, title: '', headerLeft: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTransparent: true, title: '', headerRight: null}}
      />
    </Stack.Navigator>
  );
}
