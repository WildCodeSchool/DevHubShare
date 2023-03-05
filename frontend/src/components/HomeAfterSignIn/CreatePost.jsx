import React, { useState, useEffect } from "react";
import axios from "axios";

import { styled } from "@mui/system";
import {
  Stack,
  Container,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

const StyledButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#009AA6",
  "&:hover": { backgroundColor: "#FFFFFF" },
  fontSize: 8,
  fontWeight: "bold",
  width: "10%",
  alignSelf: "flex-end",
  marginRight: "6%",
});

export default function CreatePost() {
  const [languages, setLanguages] = useState([]);
  const [languageSelected, setLanguageSelected] = useState("");
  const [tag, setTag] = useState("");
  const [post, setPost] = useState("");

  const getLanguages = () => {
    axios.get("http://localhost:5000/languages").then((response) => {
      setLanguages(response.data);
      console.info("liste des langages : ", response.data);
    });
  };

  useEffect(() => {
    getLanguages();
  }, []);
  console.info("langage sélectionné :", languageSelected);

  const handleLanguageChange = (event) => {
    setLanguageSelected(event.target.value);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const userId = 1;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(
      `Langage: ${languageSelected}, Tag: ${tag}, Votre Post: ${post}, user_id: ${userId}`
    );

    const selectedLanguage = languages.find(
      (language) => language.language_name === languageSelected
    );

    axios
      .post("http://localhost:5000/posts", {
        user_id: userId,
        language_id: selectedLanguage.id,
        tag,
        post_text: post,
      })
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        maxWidth: "sm",
      }}
    >
      <Typography variant="h5" sx={{ color: "#009AA6", fontWeight: "bold" }}>
        <em>Créer un post</em>
      </Typography>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#009AA6",
          width: "90%",
        }}
      >
        <Select
          id="language"
          value={languageSelected}
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
          }}
        >
          {languages.map((language) => (
            <MenuItem
              key={language.id}
              value={language.language_name}
              sx={{ color: "#009AA6" }}
            >
              {language.language_name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="tag"
          value={tag}
          label="TAG *"
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
          rows={6}
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: 1,
            fontSize: "sm",
            width: "100%",
          }}
        />
        <StyledButton type="submit">Poster</StyledButton>
        <Typography variant="caption" alignSelf="flex-start" color="#FFFFFF">
          Obligatoire *
        </Typography>
      </Stack>
    </Container>
  );
}
