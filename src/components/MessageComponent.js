import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextStyles } from "../theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  messageContainer: {
    maxWidth: "70%",
    backgroundColor: "#f5ccc2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 2,
  },
  messageTitle: {
    ...TextStyles.boldText,
    fontSize: 14,
  },
  message: {
    ...TextStyles.regularText,
    fontSize: 14,
  },
});

const MessageComponent = ({ item, user }) => {
  const status = item.user !== user;

  return (
    <View
      style={
        status
          ? styles.container
          : [styles.container, { alignItems: "flex-end" }]
      }
    >
      <View
        style={
          status
            ? styles.messageContainer
            : [styles.messageContainer, { backgroundColor: "rgb(194, 243, 194)" }]
        }
      >
        <Text style={styles.messageTitle}>{`${item.user}:`}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
  );
};

export default MessageComponent;