import React, { useCallback, useEffect, useState } from 'react';
import { Alert, ImageBackground, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../../components';
import { UsersController } from '../../controllers';
import styles from './Login.styles';
import { NAVIGATION } from '../../constants';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const asyncFunction = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
         navigation.navigate(NAVIGATION.main);
      }
    };
    asyncFunction();
  }, []);

  const validateEmail = useCallback(() => {
    const isValidEmail = String(username)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!isValidEmail) {
      setEmailError('You have entered an invalid e-mail address.');
    } else {
      setEmailError('');
    }
  }, [username]);

  const onChangeUsername = useCallback((text) => setUsername(text), []);
  const onChangePassword = useCallback((text) => setPassword(text), []);

  const login = useCallback(async () => {
    setIsLoading(true);
    try {
      const token = await UsersController.login(username, password);
      await AsyncStorage.setItem('token', token);
       navigation.navigate(NAVIGATION.main);
    } catch (error) {
      Alert.alert('Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  }, [username, password]);

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://fastly.picsum.photos/id/518/300/400.jpg?hmac=F7bmeDAGfwtdfVRnQX1EbHMu9_U0JknLNo8A-4dl2lo' }}
        resizeMode="cover"
        style={styles.image}
      >
        
        <View style={styles.form}>
        <Text style={styles.text}>Welcome!</Text>
          <TextInput
            mode="flat"
            label="Username"
            value={username}
            onChangeText={onChangeUsername}
            style={styles.input}
            contentStyle={styles.inputText}
            autoComplete="email"
            onBlur={validateEmail}
            error={!!emailError}
          />
          {emailError && <Text style={styles.textError}>{emailError}</Text>}
          <TextInput
            mode="flat"
            label="Password"
            value={password}
            onChangeText={onChangePassword}
            style={styles.input}
            contentStyle={styles.inputText}
            secureTextEntry
          />
          <Button style={styles.button} mode="contained" title="LOGIN" onPress={login} loading={isLoading} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
