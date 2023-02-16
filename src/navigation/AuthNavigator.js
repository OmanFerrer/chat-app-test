import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens';
import { NAVIGATION } from '../constants';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
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
    </Stack.Navigator>
  );
};

export default AuthNavigator;