// import React, { useState } from "react";
import {
  Stack,
  Container,
  FormControl,
  TextField,
  InputAdornment,
} from "@mui/material";
import flecheSend from "./images/flecheSend.png";

export default function MyAnswer() {
  const flecheStyle = { height: "2rem", width: "2rem" };

  // const [post, setPost] = useState("");

  // const handleSendButton = () => {
  //   // envoyer la réponse à "conversation"
  //   console.log(post); // ou utiliser une fonction pour envoyer la réponse à "conversation"
  // };

  // const handlePostChange = (event) => {
  //   setPost(event.target.value);
  // };

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
          width: "75%",
        }}
      >
        <FormControl
          // onSubmit={handleSubmit}
          sx={{ width: "100%", m: 2, gap: 1 }}
        >
          <TextField
            id="post-content"
            label="Votre texte ici..."
            // value={post}
            // onChange={handleSendButton}
            multiline
            rows={4}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ position: "relative" }}>
                  <img
                    className="flecheSend"
                    src={flecheSend}
                    alt="fleche envoyer"
                    style={flecheStyle}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 1,
              fontSize: "sm",
              width: "100%",
            }}
          />
        </FormControl>
      </Stack>
    </Container>
  );
}
