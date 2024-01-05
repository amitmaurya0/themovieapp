export const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWRmMTBlMWRmMjNjODY5MGJjODEzMWI3NWVjYjQ2NyIsInN1YiI6IjY1OTQ0OTIwYTU4OTAyNzMyZDk2MjliOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vv4XBp1T-JiqHClOu6Ibg40mY11iQzUZUcOHnHHX200' // ENTER YOUR API READ ACCESS TOKEN

const BASE_URL = `https://api.themoviedb.org/3/`;

export default {
    configuration: `${BASE_URL}configuration`,
    nowPlaying: `${BASE_URL}movie/now_playing?language=en-US`,
    popular: `${BASE_URL}movie/popular?language=en-US`,
    topRated: `${BASE_URL}movie/top_rated?language=en-US`,
    upcoming: `${BASE_URL}movie/upcoming?language=en-US`,
    upcoming: `${BASE_URL}movie/upcoming?language=en-US`,
    movieDetails: `${BASE_URL}movie/`,
}