import React from "react";
import { Container, Typography, Stack, Button } from "@mui/material";
import Post from "./Post";

export default function FeedSelected() {
  // const [post, setPost] = useState("");
  // const selectedLanguage = props.selectedLanguage; // récupère la langue sélectionnée à partir des props
  // const isLanguageSelected = selectedLanguage !== "";
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "sm",
        maxHeight: "sm",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#82BE00",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" color="white" fontWeight="bold" sx={{ mt: 2 }}>
          <em>Fil de discussion </em>
          {/* {isLanguageSelected && ( // affiche la langue sélectionnée si une langue a été choisie
            <span> ({selectedLanguage})</span>
          )} */}
        </Typography>

        <Stack sx={{ width: "80%" }}>
          <Post />
          <Post />
        </Stack>
      </Stack>
      <Stack alignSelf="flex-end" marginTop="2%">
        <Button variant="contained" size="small">
          Créer mon post
        </Button>
      </Stack>
    </Container>
  );
}
