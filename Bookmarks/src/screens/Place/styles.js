// Bookmark Styles
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  thumbnaiWrapperl: {
    backgroundColor: '#fff',
    width,
    height: height / 2,
    position: 'absolute',
    top: -(height / 4),
  },
  image: {
    width,
    height: height / 2,
  },
  infoWrapper: {
    width,
    height,
    top: height / 4.5,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  name: {
    marginTop: 14,
    fontSize: 24,
  },
  address: {
    marginTop: 14,
    fontSize: 13,
  },
  button: {
    width: width / 1.2,
    marginTop: 29,
  },
});
