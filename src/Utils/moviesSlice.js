import { createSlice } from "@reduxjs/toolkit";

const moviesSLice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovies: null,
    trailerMovie: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpcomingMovies: null,
    popUpMovie: null,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayMovies = action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addNowTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    addNowUpcomingMovies: (state, action) => {
      state.nowUpcomingMovies = action.payload;
    },
    addPopUpMovieData: (state, action) => {
      state.popUpMovie = action.payload;
      console.log(state.popUpMovie);
    },
  },
});

export const {
  addNowPlayMovies,
  addTrailerMovie,
  addNowPopularMovies,
  addNowTopRatedMovies,
  addNowUpcomingMovies,
  addPopUpMovieData,
} = moviesSLice.actions;

export default moviesSLice.reducer;
