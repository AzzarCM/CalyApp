import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export default function TeacherStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTransparent: true, title: '', headerRight: null}}
      />
    </Stack.Navigator>
  );
}
