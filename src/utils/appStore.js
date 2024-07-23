import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import suggestMoviesReducer from "./SuggestMovieSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies:moviesReducer,
    suggestMovies:suggestMoviesReducer
  },
});

export default appStore;