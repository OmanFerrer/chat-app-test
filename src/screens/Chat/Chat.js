import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { IconButton, Text, TextInput } from 'react-native-paper';
import SendSVG from '../../assets/icons/send.svg';
import { Button, MessageComponent } from '../../components';
import useSocketIo from '../../hooks/useSocketIo';
import styles from './Chat.styles';

const Chat = () => {
  const [user, setUser] = useState();
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const { isConnected, connect, socket } = useSocketIo();

  useLayoutEffect(() => {
    socket.emit('joinChat');
    socket.on('messagesList', (messages) => setMessagesList(messages));
  }, [isConnected]);

  useEffect(() => {
    socket.on('messagesList', (messages) => setMessagesList(messages));
  }, [socket]);

  useEffect(() => {
    socket.on('roomMessage', (message) => {
      const newList = [...messagesList];
      newList.push(message);
      setMessagesList(newList);
    });
  }, [socket])

  const getUsername = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      setUser(value);
    } catch (e) {
      console.error('Error while loading username!');
    }
  };

  useEffect(() => {
    getUsername();
  }, []);

  const onChangeMessage = useCallback((text) => setMessage(text), []);

  const handleNewMessage = () => {
    socket.emit('newMessage', { message, user });
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chat</Text>
      </View>
      <View style={styles.chatContainer}>
        {(isConnected && !!messagesList.length) && (
          <FlatList
            data={messagesList}
            renderItem={({ item }) => (
              <MessageComponent item={item} user={user} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
      {isConnected ?
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            placeholder="Message"
            value={message}
            onChangeText={onChangeMessage}
            style={styles.input}
            contentStyle={styles.inputText}
          />
          <IconButton
            icon={() => <SendSVG width="40" height="40" />}
            size={20}
            onPress={handleNewMessage}
          />
        </View>
        : <Button style={styles.joinButton} mode="contained" title="JOIN CHAT" onPress={connect} />}
    </SafeAreaView>
  );
};

export default Chat;