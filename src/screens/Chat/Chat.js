import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from '../../components';
import useSocketIo from '../../hooks/useSocketIo';
import styles from './Chat.styles';

const Chat = () => {
  const { isConnected, connect } = useSocketIo();

  useEffect(() => {
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chat</Text>
      </View>
      <View style={styles.chatContainer}>
      </View>
      {!isConnected && <Button style={styles.joinButton} mode="contained" title="JOIN CHAT" onPress={connect} />}
    </SafeAreaView>
  );
};

export default Chat;