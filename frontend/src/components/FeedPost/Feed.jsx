import React from "react";
import Box from "@mui/material/Box";
import Post from "./Post";

export default function Feed() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "60vw",
          height: "100%",
          backgroundColor: "#82BE00",
          borderRadius: 2,
          padding: 8,
        }}
      >
        <Post />
      </Box>
    </Box>
  );
}
