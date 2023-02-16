import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { TextStyles } from "../theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    height: 80,
    marginBottom: 10,
  },
  avatar: {
    marginRight: 15,
  },
  fullname: {
    ...TextStyles.boldText,
    fontSize: 18,
    marginBottom: 5,
  },
  email: {
    ...TextStyles.regularText,
    fontSize: 14,
    opacity: 0.7,
  },
});

const UserComponent = ({ item }) => {
    return (
        <View style={styles.container}>
            <Avatar.Image
              size={45}
              source={{
                uri: item.avatar,
              }}
              style={styles.avatar}
            />
            <View>
                <Text style={styles.fullname}>{`${item.first_name} ${item.last_name}`}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        </View>
    );
};

export default UserComponent;