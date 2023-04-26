import React, { useEffect, useState } from "react";
import { Label, Input } from "@rebass/forms";
import { Text, Box, Flex, Card, Button } from "rebass";
import { useLocation, useNavigate } from "react-router-dom";
import { addSong, updateSong } from "./songsSlice";
import { useDispatch, useSelector } from "react-redux";

const ManageSongs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, loading, error } = useSelector((state) => state.songs);

  const [form, setForm] = useState({
    id: "",
    songName: "",
    artistName: "",
    releaseDate: "",
  });

  const { songName, artistName, releaseDate } = form;

  useEffect(() => {
    if (success) navigate(-1);
  },[success]);

  useEffect(() => {
    if (location.state.mode === "edit") {
      const { id, songName, artistName, releaseDate } = location.state.data;
      setForm({ ...form, id, songName, artistName, releaseDate });
    }
  }, [location.state]);

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (location.state.mode === "edit") {
      dispatch(updateSong(form));
    } else {
      const { id, ...rest } = form;
      dispatch(addSong(rest));
    }
  };

  return (
    <Card
      as={"form"}
      onSubmit={onSubmit}
      sx={{
        borderRadius: 2,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
        margin: 3,
        padding: 4,
        maxWidth: 512,
        mx: "auto",
        px: 4,
      }}
    >
      <Text sx={{ fontSize: "30px", textAlign: "center", mb: "20px" }}>{`${
        location.state.mode === "edit" ? "EDIT" : "CREATE"
      } SONG`}</Text>
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
      <Flex flexDirection="column" mx={-2} mb={3}>
        <Box width={1} my={3}>
          <Label htmlFor="songName">Song Name</Label>
          <Input
            id="songName"
            name="songName"
            placeholder="Song Name"
            value={songName}
            type="text"
            onChange={onChange}
            required={true}
          />
        </Box>

        <Box width={1} my={3}>
          <Label htmlFor="artistName">Artist Name</Label>
          <Input
            id="artistName"
            name="artistName"
            placeholder="Artist Name"
            onChange={onChange}
            value={artistName}
            type="text"
            required={true}
          />
        </Box>

        <Box width={1} my={4}>
          <Label htmlFor="releaseDate">Release Date</Label>
          <Input
            id="releaseDate"
            name="releaseDate"
            onChange={onChange}
            value={releaseDate}
            required={true}
            type="date"
          />
        </Box>
        <Button
          sx={{ cursor: "pointer" }}
          width={1}
          type="submit"
          variant="primary"
          mb={3}
        >
          {loading ? "..." : "SUBMIT"}
        </Button>
        <Button
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
          width={1}
          type="button"
          variant="outline"
        >
          CANCEL
        </Button>
      </Flex>
    </Card>
  );
};

export default ManageSongs;
