import React, { useCallback, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { Button } from '../../components';
import styles from './Login.styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

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

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://fastly.picsum.photos/id/518/300/400.jpg?hmac=F7bmeDAGfwtdfVRnQX1EbHMu9_U0JknLNo8A-4dl2lo' }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Login</Text>
        <View style={styles.form}>
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
          <Button style={styles.button} mode="contained" title="LOGIN" onPress={() => {}} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
