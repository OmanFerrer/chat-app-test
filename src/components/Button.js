import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RNPButton } from 'react-native-paper';
import { TextStyles } from '../theme';

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
  buttonLabel: {
    ...TextStyles.semiBoldText,
    fontSize: 13,
  },
});

const Button = ({ title, ...props }) => {
  return (
    <RNPButton style={styles.button} labelStyle={styles.buttonLabel} {...props}>{title}</RNPButton>
  );
};

export default Button;
