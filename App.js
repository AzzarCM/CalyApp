import 'react-native-gesture-handler'
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {Provider} from 'react-redux';
import reduxStore from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  const {store, persistor} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
