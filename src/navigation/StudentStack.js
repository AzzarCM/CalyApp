import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';


const Stack = createStackNavigator();

export default function StudentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTransparent: true, title: '', headerRight: null}}
      />
    </Stack.Navigator>
  );
}
