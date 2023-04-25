import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
  addSongFailure,
  updateSongSuccess,
  updateSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
} from "./songsSlice";
import {
  fetchSongsApi,
  addSongApi,
  updateSongApi,
  deleteSongApi,
} from "../../app/api";

function* handleFetchSongs() {
  try {
    const songs = yield call(fetchSongsApi);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error));
  }
}

function* handleAddSong(action) {
  try {
    const newSong = yield call(addSongApi, action.payload);
    yield put(addSongSuccess(newSong));
  } catch (error) {
    yield put(addSongFailure(error));
  }
}

function* handleUpdateSong(action) {
  try {
    const updatedSong = yield call(updateSongApi, action.payload);
    yield put(updateSongSuccess(updatedSong));
  } catch (error) {
    yield put(updateSongFailure(error));
  }
}

function* handleDeleteSong(action) {
  try {
    yield call(deleteSongApi, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error));
  }
}

function* songsSaga() {
  yield takeLatest("songs/fetchSongs", handleFetchSongs);
  yield takeLatest("songs/addSong", handleAddSong);
  yield takeLatest("songs/updateSong", handleUpdateSong);
  yield takeLatest("songs/deleteSong", handleDeleteSong);
}

export default songsSaga;
