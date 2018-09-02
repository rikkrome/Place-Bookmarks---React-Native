// Bookmark Styles
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    width: width / 1.2,
    position: 'absolute',
    bottom: 0,
    marginBottom: 10,
  },
  scrollView: {
    backgroundColor: '#fff',
    marginBottom: 0,
  },
});
