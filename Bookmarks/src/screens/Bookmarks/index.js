// screens/Bookmarks
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Button from '../../components/elements/button';
import Card from '../../components/elements/card';

const addressParser = require('parse-address');
const Database = require('../../database')();
const validateBookmark = require('../../utilities/validation/bookmarks');
const helpers = require('../../utilities/helpers')();
const styles = require('./styles');

class BookmarksScreen extends Component {
  static navigationOptions = () => ({
    title: 'Bookmarks',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#FFF',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Light',
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      bookmarksHashTable: {},
      initFirebaseLoad: false,
    };
  }

  componentWillMount() {
    // initFirebaseLoad is for allowing this database to be called once.
    if (!this.state.initFirebaseLoad) {
      Database.getAllBookmarks()
        .then(bookmarks => {
          this.setState({ bookmarks });
          this.setState({ initFirebaseLoad: true });
        })
        .catch(e => console.log(e));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.state.params) {
      this.updateBookmarkList(nextProps.navigation.state.params);
    }
  }

  updateBookmarkList = params => {
    const errors = validateBookmark(params);
    const bookmark = {};
    const bookmarksList = this.state.bookmarks.slice();
    const bookmarksHashTable = this.state.bookmarksHashTable;
    const navParams = params;
    // add bookmark
    if (errors.isValid && !navParams.remove && !bookmarksHashTable[navParams.id]) {
      bookmark.id = navParams.id;
      bookmark.thumbnailURL = navParams.thumbnailURL;
      bookmark.name = navParams.name;
      const address = addressParser.parseLocation(navParams.address);
      bookmark.address = {
        street: helpers.getAddressStreet(address),
        city: helpers.getAddressCity(address),
      };
      // add bookmark to the beginning (TOP) of the list
      bookmarksList.unshift(bookmark);
      bookmarksHashTable[bookmark.id] = {
        id: bookmark.id,
      };
      // update bookmarks state
      this.setState({ bookmarks: bookmarksList });
      // save to firbase database
      Database.insertBookmark(bookmark);
    } else if (!errors.id && navParams.remove) {
      // remove bookmark
      const index = bookmarksList.findIndex(bookmarks => bookmarks.id === navParams.id);
      if (index !== -1 || index !== undefined) {
        bookmarksList.splice(index, 1);
        delete bookmarksHashTable[navParams.id];
        // update bookmarks state
        this.setState({ bookmarks: bookmarksList });
        // update firebase by deleting the bookmark
        Database.deleteBookmark(navParams);
      }
    }
  };

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (
    <Card
      id={item.id}
      name={item.name}
      address={item.address}
      ImageURL={item.thumbnailURL}
      bookmarked="true"
      navigation={this.props.navigation}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.bookmarks}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate('searchScreen')}
            text="Add New Place"
            color="#0404CE"
            fontSize={15}
          />
        </View>
      </View>
    );
  }
}

export default BookmarksScreen;
