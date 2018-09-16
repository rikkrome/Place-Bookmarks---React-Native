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

### ScreenShots

BookMark Screen             |  Search Screen            |  Place Screen
:-------------------------:|:-------------------------: |:-------------------------:
![](https://firebasestorage.googleapis.com/v0/b/bookmarkplaces-eab7c.appspot.com/o/bookmark%20screen1.png?alt=media&token=31270718-e8ea-4447-b5c7-b2f8c6717a58)  |  ![](https://firebasestorage.googleapis.com/v0/b/bookmarkplaces-eab7c.appspot.com/o/search%20screen.png?alt=media&token=99994223-49b3-4d84-b2de-e8ea49c9d0a8) | ![](https://firebasestorage.googleapis.com/v0/b/bookmarkplaces-eab7c.appspot.com/o/bookmarked.png?alt=media&token=b4304532-2728-4e7f-ba61-b34b172d08ea) 





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


