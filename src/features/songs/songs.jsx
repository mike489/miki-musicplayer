import React, { useEffect } from "react";
import { Text, Box, Button } from "rebass";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, deleteSong } from "./songsSlice";
import Song from "./song";

const Songs = () => {
  const { songs, loading, error } = useSelector((state) => state.songs);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const manageSong = (mode, editData) => {
    const data = mode === "edit" ? editData : null;
    navigate("/home/manageSongs", {
      state: {
        mode,
        data,
      },
    });
  };

  return (
    <Box
      sx={{
        maxWidth: 512,
        mx: "auto",
      }}
    >
      <Text
        fontSize={[3, 4, 5]}
        fontWeight="bold"
        color="primary"
        textAlign="center"
        mb={3}
      >
        Songs
      </Text>
      <div style={{ display: "flex" }}>
        <Button
          sx={{ cursor: "pointer" }}
          width={1}
          variant="outline"
          onClick={() => manageSong("create")}
        >
          CREATE SONG
        </Button>
      </div>
      {loading && (
        <Text fontSize={25} textAlign="center">
          Getting Songs...
        </Text>
      )}
      {!loading && songs.length === 0 && (
        <Text fontSize={25} textAlign="center" my={3}>
          No Songs!
        </Text>
      )}
      {error && (
        <Text
          sx={{
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {error}
        </Text>
      )}
      {!loading &&
        songs.length > 0 &&
        songs.map((song) => (
          <Song
            key={song.id}
            data={song}
            manage={manageSong}
            remove={(id) => dispatch(deleteSong(id))}
          />
        ))}
    </Box>
  );
};

export default Songs;
