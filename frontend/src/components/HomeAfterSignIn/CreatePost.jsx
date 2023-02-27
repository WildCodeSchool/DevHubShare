import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Stack,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

const languages = [
  "JavaScript",
  "PHP",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "Autre...",
];

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
  const [language, setLanguage] = useState("");
  const [tag, setTag] = useState("");
  const [post, setPost] = useState("");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(`Langage: ${language}, Tag: ${tag}, Votre Post: ${post}`);
    // Envoyer les données du formulaire au serveur
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
      <Typography variant="h5" sx={{ color: "#009AA6", fontWeight: "bold" }}>
        <em>Créer un post</em>
      </Typography>

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
          <Select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            displayEmpty
            renderValue={(value) => value || "Sélectionner un langage"}
            size="small"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#009AA6",
              borderRadius: 1,
              alignSelf: "center",
              width: "70%",
              // height: "2rem"
            }}
          >
            {languages.map((lang) => (
              <MenuItem key={lang} value={lang} sx={{ color: "#009AA6" }}>
                {lang}
              </MenuItem>
            ))}
          </Select>

          <TextField
            id="tag"
            value={tag}
            label="TAG"
            onChange={handleTagChange}
            size="small"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 1,
              alignSelf: "center",
              width: "70%",
            }}
          />

          <TextField
            id="post-content"
            label="Votre Post"
            value={post}
            onChange={handlePostChange}
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
