import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens';
import { NAVIGATION } from '../constants';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={Login}
        name={NAVIGATION.loginScreen}
      />
      <Stack.Screen
        component={TabNavigator}
        name={NAVIGATION.main}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;