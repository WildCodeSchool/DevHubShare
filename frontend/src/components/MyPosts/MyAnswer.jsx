import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Stack,
  Container,
  FormControl,
  TextField,
  Button,
} from "@mui/material";

const StyledButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#009AA6",
  "&:hover": { backgroundColor: "#FFFFFF" },
  fontSize: 8,
  fontWeight: "bold",
  maxWidth: "15%",
  alignSelf: "flex-end",
  marginRight: "6%",
});

export default function CreatePost() {
  const [post, setPost] = useState("");

  const handleSendButton = (event) => {
    setPost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(`Votre Post: ${post}`);
  };

  return (
    <Container
      sx={{
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
          borderRadius: 2,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#009AA6",
          width: "90%",
        }}
      >
        <FormControl
          onSubmit={handleSubmit}
          sx={{ width: "100%", m: 2, gap: 1 }}
        >
          <TextField
            id="post-content"
            label="Votre texte ici..."
            value={post}
            onChange={handleSendButton}
            multiline
            rows={4}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 1,
              fontSize: "sm",
              width: "100%",
            }}
          />

          <StyledButton type="submit" variant="outlined" size="small">
            Envoyer
          </StyledButton>
        </FormControl>
      </Stack>
    </Container>
  );
}
