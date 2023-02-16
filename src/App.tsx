/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import TabNavigator from './navigation/TabNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './theme';

function App(): JSX.Element {
  const isLogged = false;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {isLogged ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
