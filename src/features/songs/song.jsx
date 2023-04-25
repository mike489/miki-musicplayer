import React from "react";
import { Box, Card, Heading, Text, Button } from "rebass";
import moment from "moment";

const Song = ({ data, manage, remove }) => {
  const { id, artistName, songName, releaseDate } = data;

  return (
    <Box>
      <Card
        my={4}
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
          padding: 4,
        }}
      >
        <Heading mb={2}>{songName}</Heading>
        <Text mb={2}>
          By <b>{artistName}</b>
        </Text>
        <Text sx={{ float: "right" }} color="grey" fontSize={12}>
          {moment(releaseDate).format("MMM DD YYYY")}
        </Text>
        <Button
          sx={{
            borderColor: "purple",
            color: "purple",
            cursor: "pointer",
          }}
          mr={2}
          variant="outline"
          onClick={() => manage("edit", data)}
        >
          Edit
        </Button>
        <Button
          sx={{
            borderColor: "red",
            color: "red",
            cursor: "pointer",
          }}
          mr={2}
          variant="outline"
          onClick={() => remove(id)}
        >
          Delete
        </Button>
      </Card>
    </Box>
  );
};

export default Song;
