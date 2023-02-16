import { StyleSheet } from 'react-native';
import { TextStyles } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    paddingHorizontal: 20,
  },
  text: {
    ...TextStyles.boldText,
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    textAlign: 'center',
  },
  textError: {
    ...TextStyles.regularText,
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    marginTop: 20,
  },
  inputText: {
    ...TextStyles.regularText,
    fontSize: 16,
    color: '#1e1c1c',
  },
  button: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default styles;