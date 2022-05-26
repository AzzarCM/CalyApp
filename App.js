import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import reduxStore from './src/redux/store/store';
import AppNavigation from './src/navigation/AppNavigation';
import Root from './src/components/Modals/Root';

TimeAgo.addDefaultLocale(en)

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
