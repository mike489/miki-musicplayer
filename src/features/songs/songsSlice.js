import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  loading: false,
  success: false,
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSongs(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    fetchSongsSuccess(state, action) {
      state.songs = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchSongsFailure(state, action) {
      state.loading = false;
      state.error = String(action.payload);
    },
    addSong(state) {
      state.loading = true;
      state.error = null;
    },
    addSongSuccess(state, action) {
      state.songs.push(action.payload);
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    addSongFailure(state, action) {
      state.loading = false;
      state.error = String(action.payload);
    },
    updateSong(state) {
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess(state, action) {
      const index = state.songs.findIndex(
        (song) => song.id === action.payload.id
      );
      state.songs[index] = action.payload;
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    updateSongFailure(state, action) {
      state.loading = false;
      state.error = String(action.payload);
    },
    deleteSong(state) {
      state.error = null;
    },
    deleteSongSuccess(state, action) {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
      state.loading = false;
      state.error = null;
    },
    deleteSongFailure(state, action) {
      state.loading = false;
      state.error = String(action.payload);
    },
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSong,
  addSongSuccess,
  addSongFailure,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure,
} = songsSlice.actions;
export default songsSlice.reducer;
