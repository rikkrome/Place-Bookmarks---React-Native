// Place screen
import React, { Component } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import BackButton from '../../components/elements/BackButton';
import Button from '../../components/elements/button';

const styles = require('./styles');
const APIKey = require('../../../config/keys').GoogleMapsAPIKey;

class BookmarksScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '',
    headerTintColor: '#000',
    cardStyle: { backgroundColor: 'transparent' },
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Light',
    },
    headerLeft: <BackButton navigation={navigation} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      url: '',
      name: '',
      address: '',
      buttonText: 'Bookmark',
      buttonColor: '#0404CE',
      bookmarked: false,
    };
    this.baseState = this.state;
  }

  componentWillMount() {
    const params = this.props.navigation.state.params;
    // Place ID
    if (params.id) {
      this.setState({ id: params.id });
    }
    // Place name
    if (params.name) {
      this.setState({ name: params.name });
    }
    // image URL
    if (params.ImageURL) {
      this.setState({ url: params.ImageURL });
    } else if (params.photoRef) {
      // this would be loading if the prev screen was the search
      const api = APIKey;
      const photoRef = params.photoRef;
      const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=900&photoreference=${photoRef}&key=${api}`;
      this.setState({ url });
    } else {
      // load this image if there is no image being passed
      this.setState({ url: 'https://dummyimage.com/400x400/ffffff/000000.jpg&text=No+Photos' });
    }
    // address
    if (params.address && params.address.street && params.address.city) {
      const address = `${params.address.street} ${params.address.city}`;
      this.setState({ address });
    }
    if (params.formatted_address) {
      this.setState({ address: params.formatted_address });
    }
    // button setup
    if (params.bookmarked) {
      this.setState({ bookmarked: true });
      this.setState({ buttonText: 'Bookmarked' });
      this.setState({ buttonColor: '#29BF12' });
    }
  }

  componentWillUnmount() {
    // reset state
    this.setState(this.baseState);
  }

  ButtonAction = () => {
    if (this.state.bookmarked) {
      // ask if they want to remove the bookmark
      Alert.alert(
        'Remove Bookmark',
        '',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          {
            text: 'OK',
            onPress: () =>
              this.props.navigation.navigate('bookmarkScreen', {
                remove: true,
                id: this.state.id,
              }),
          },
        ],
        { cancelable: false }
      );
    } else {
      // adding bookmark and returning to the bookmark screen.
      return this.props.navigation.navigate('bookmarkScreen', {
        id: this.state.id,
        thumbnailURL: this.state.url,
        name: this.state.name,
        address: this.state.address,
        remove: false,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnaiWrapperl}>
          <Image style={styles.image} source={{ uri: this.state.url }} />
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.name}>{this.state.name}</Text>
          <Text style={styles.address}>{this.state.address}</Text>
          <View style={styles.button}>
            <Button
              onPress={this.ButtonAction}
              text={this.state.buttonText}
              color={this.state.buttonColor}
              fontSize={13}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default BookmarksScreen;
