import axios from "axios";

const apiUrl = "http://localhost:3001";

export const fetchSongsApi = async () => {
  const response = await axios.get(`${apiUrl}/songs/`);
  return response.data;
};

export const addSongApi = async (song) => {
  const response = await axios.post(`${apiUrl}/songs/`, song);
  return response.data;
};

export const updateSongApi = async (song) => {
  const response = await axios.put(`${apiUrl}/songs/${song.id}/`, song);
  return response.data;
};

export const deleteSongApi = async (songId) => {
  await axios.delete(`${apiUrl}/songs/${songId}/`);
};

