import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Stack, Button } from "@mui/material";
import Post from "./Post";

export default function FeedSelected() {
  const [postList, setPostList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  //   // // const selectedLanguage = props.selectedLanguage; // récupère la langue sélectionnée à partir des props
  //   // // const isLanguageSelected = selectedLanguage !== "";

  const getPostList = () => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setPostList(response.data);
    });
    console.info("post :", postList);
  };

  const getAnswerList = () => {
    axios.get("http://localhost:5000/answers").then((response) => {
      setAnswerList(response.data);
    });
    console.info("answer :", answerList);
  };

  useEffect(() => {
    getPostList(postList);
  }, []);
  useEffect(() => {
    getAnswerList(answerList);
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/posts").then((response) => {
  //     setPostList(response.data);
  //   });
  //   axios.get("http://localhost:5000/answers").then((response) => {
  //     setAnswerList(response.data);
  //   });
  //   console.info("post:", postList);
  //   console.info("réponse:", answerList);
  // }, []);

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
        <Stack flexDirection="row">
          <Typography
            variant="h5"
            color="white"
            fontWeight="bold"
            sx={{ mt: 2 }}
          >
            <em>Fil de discussion </em>
            <span>Langage</span>
          </Typography>
          {/* {isLanguageSelected && ( // affiche la langue sélectionnée si une langue a été choisie
            <span> ({selectedLanguage})</span>
          )} */}
        </Stack>

        <Stack sx={{ width: "80%" }}>
          {postList.map((postMap) => (
            <Post
              key={postMap.id}
              tag={postMap?.tag}
              post={postMap?.post_text}
              date={postMap?.creation_date}
              answers={answerList
                .filter((answer) => answer.post_id === postMap?.id)
                .map((answerMap) => answerMap.answer_text)}
            />
          ))}
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
