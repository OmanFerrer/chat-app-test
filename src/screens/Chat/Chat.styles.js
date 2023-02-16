import { StyleSheet } from 'react-native';
import { TextStyles } from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    padding: 10,
  },
  titleContainer: {
    backgroundColor: "#F7F7F7",
    height: 70,
    paddingVertical: 20,
    marginBottom: 15,
  },
  title: {
    ...TextStyles.boldText,
    fontSize: 24,
  },
  chatContainer: {
    flex: 1,
  },
  joinButton: {
    marginHorizontal: 50,
  },
});

export default styles;