// Search screen
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Button from '../../components/elements/button';
import BackButton from '../../components/elements/BackButton';
import GooglePlacesAutocomplete from '../../api/google/GooglePlacesAutocomplete';

const styles = require('./styles');

class BookmarksScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Search',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#FFF',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Light',
    },
    headerLeft: <BackButton navigation={navigation} />,
  });

  render() {
    return (
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          onPress={(data, details = null) => {
            if (data && details && details.id) {
              this.props.navigation.navigate('placeScreen', {
                id: details.id,
                formatted_address: details.formatted_address,
                name: details.name,
                photoRef: details.photos ? details.photos[0].photo_reference : undefined,
              });
            }
          }}
        />
      </View>
    );
  }
}

export default BookmarksScreen;
