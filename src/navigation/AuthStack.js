import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTransparent: true, title: '', headerLeft: false}}
      />
    </Stack.Navigator>
  );
}
