# Place Bookmark app

[Video Demo](https://www.youtube.com/watch?v=X_r4Tl2KoEI)

`Google Firebase` is used to save all of the bookmarks. It may take a second to load.

### Commands

nav

```
$ cd app/Bookmarks/
```

run

```
$ gulp ios
```

### Directory Structure

All development files are placed in the `src` folder. The root file is `index.js`.

`src/api`: This folder contains logic related to external API communications, it includes:

- `GooglePlacesAutocomplete folder`: Here hold the Google's api. I used `react-native-google-places-autocomplete` for the search.

`src/assets`: This houses static files (e.g images) used in the application.

`src/components`: Shared components used across features are placed in this directory

`src/database`: Where all firebase database calls are located.

`src/navigation`: Used `react-navigation` to navigate between the screens.

`src/screens`: The `screen` folder, consists of folders for each of the application’s screens.

`src/utilities`: Helper functions.


### Unfinished

- unit testing

- Not battle tested across different sizes
