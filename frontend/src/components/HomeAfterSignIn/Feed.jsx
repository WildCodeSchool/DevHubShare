import React from "react";
import { Container, Typography, Stack } from "@mui/material";
// import Post from "../FeedPost/Post";

export default function Feed() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        mt: 2,
        maxWidth: "sm",
        maxHeight: "sm",
      }}
    >
      <Typography variant="h5" sx={{ color: "#82BE00", fontWeight: "bold" }}>
        <em>Fil de discussion</em>
      </Typography>
      <Stack
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#82BE00",
          width: "90%",
        }}
      >
        {/* <Post /> */}
      </Stack>
    </Container>
  );
}
