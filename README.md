
# The Movie App

This is simple movie listing App in React Native


React Native app that brings the magic of movies to your fingertips. Navigate seamlessly through the latest releases, upcoming blockbusters, popular films, and top-rated classics.

## Key Features

- **Now Playing:** View currently showing movies.
- **Upcoming:** View upcoming movie releases.
- **Popular:** View most talked-about films.
- **Top Rated:** Explore the best-rated movies.
- **Infinite Scrolling:** All the tabs have the features of infinite scrolling
- **Moview Details:** You can click on any movie and view the details.

## Api Integration

- **Now Playing:** https://developer.themoviedb.org/reference/movie-now-playing-list.
- **Upcoming:** https://developer.themoviedb.org/reference/movie-upcoming-list
- **Popular:** https://developer.themoviedb.org/reference/movie-popular-list
- **Top Rated:** https://developer.themoviedb.org/reference/movie-top-rated-list

You can goto the Themoviedb website and create your free account and generate your API KEY and TOKEN beacase we will need them while calling the api in the application.

## Getting Started

To run the app locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/amitmaurya0/themovieapp.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd themovieapp
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```
4. **Run the app:**
    
    Navigate to the below file and add your TOKEN you got from themoviedb website.
    ```bash
    themovieapp/src/apis/urls.js
    ``` 

5. **Run the app:**

    ```bash
    npx react-native run-android   # For Android
    npx react-native run-ios       # For iOS
    ```


## Video Demo

[https://drive.google.com/file/d/1ErCRiB8GG1LimsXbOntuf5nqRFk6gyJM/view?usp=sharing](#)  <!-- Add your video link here -->