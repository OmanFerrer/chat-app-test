import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { Button } from '../../components';
import styles from './Login.styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://fastly.picsum.photos/id/518/300/400.jpg?hmac=F7bmeDAGfwtdfVRnQX1EbHMu9_U0JknLNo8A-4dl2lo' }} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.form}>
          <TextInput
            mode="flat"
            label="Username"
            value={''}
            onChangeText={() => { }}
            style={styles.input}
            contentStyle={styles.inputText}
          />
          <TextInput
            mode="flat"
            label="Password"
            value={''}
            onChangeText={() => { }}
            style={styles.input}
            contentStyle={styles.inputText}
            keyboardType="visible-password"
          />
          <Button style={styles.button} mode="contained" title="LOGIN" onPress={() => {}} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
