import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { UserComponent } from '../../components';
import { UsersController } from '../../controllers';
import styles from './Home.styles';

const Home = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await UsersController.getUsers();
        const currentUsername = await AsyncStorage.getItem('username');
        const userList = response.filter(user => user.email != currentUsername);
        setUsers(userList);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={users}
          renderItem={({ item }) => <UserComponent item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;