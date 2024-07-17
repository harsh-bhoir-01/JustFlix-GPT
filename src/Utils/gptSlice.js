import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptShowSearch: false,
    movieName: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptShowSearch = !state.gptShowSearch;
    },
    addGeminiResults: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName;
      state.movieResults = movieResults;
    },
    removeGeminiResults: (state) => {
      state.movieName = null;
      state.movieResults = null;
    },
  },
});

export const { toggleGptSearch, addGeminiResults, removeGeminiResults } =
  gptSlice.actions;

export default gptSlice.reducer;
