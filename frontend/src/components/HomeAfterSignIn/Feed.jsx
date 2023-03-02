import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import Post from "../FeedPost/Post";

export default function Feed() {
  return (
    <Container
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        maxWidth: "sm",
        maxHeight: "sm",
      }}
    >
      <Typography variant="h5" sx={{ color: "#82BE00", fontWeight: "bold" }}>
        <em>Fil de discussion</em>
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{
          borderRadius: 2,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#82BE00",
          width: "90%",
          height: "50rem",
        }}
      >
        <Post />
      </Stack>
    </Container>
  );
}
