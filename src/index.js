import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes';
import {TestProvider} from './Test';

const App = () => {
  return (
  <>
    <StatusBar barStyle="dark-content" />
    <NavigationContainer>
      <TestProvider>
        <Routes />
      </TestProvider>
    </NavigationContainer>
  </>
  );
};


export default App;
