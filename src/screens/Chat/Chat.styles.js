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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '86%',
    marginBottom: 10,
    backgroundColor: 'white',
  },
  inputText: {
    ...TextStyles.regularText,
    fontSize: 16,
    color: '#1e1c1c',
  },
  joinButton: {
    marginBottom: 20,
    marginHorizontal: 50,
  },
});

export default styles;