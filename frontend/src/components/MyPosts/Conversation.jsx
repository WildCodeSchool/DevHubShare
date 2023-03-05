import React from "react";
import { Container, Stack } from "@mui/material";

export default function Conversation({ post }) {
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
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#82BE00",
          width: "90%",
          height: "25rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            marginBottom: "1rem",
            borderRadius: 2,
            padding: "0.2rem",
          }}
        >
          {post && (
            <div>
              <h4>{post.tag}</h4>
              <p>{post.postText}</p>
            </div>
          )}
        </div>
      </Stack>
    </Container>
  );
}
