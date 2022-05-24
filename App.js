import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import reduxStore from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigation from './src/navigation/AppNavigation';
import Root from './src/components/Modals/Root';

const theme = {
  ...DefaultTheme,
  dark: false,
};

const App = () => {
  const {store, persistor} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Root>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </Root>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
