import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Container, Typography, Stack, Button } from "@mui/material";
import Post from "./Post";
import SelectedLanguageContext from "../../services/context/SelectedLanguageContext";

const Links = styled(Link)({
  textDecoration: "none",
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "small",
});

export default function FeedSelected() {
  const { selectedLanguage } = useContext(SelectedLanguageContext);

  const [postList, setPostList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [languageList, setLanguageList] = useState([]);
  const [userList, setUserList] = useState([]);

  const getPostList = async () => {
    const response = await axios.get("http://localhost:5000/posts");
    setPostList(response.data);
  };

  const getAnswerList = async () => {
    const response = await axios.get("http://localhost:5000/answers");
    setAnswerList(response.data);
  };

  const getUserList = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUserList(response.data);
  };
  console.info("users:", userList);

  useEffect(() => {
    const getLanguageList = async () => {
      const response = await axios.get("http://localhost:5000/languages");
      setLanguageList(response.data);
    };
    getLanguageList();
  }, []);

  useEffect(() => {
    getPostList();
    getAnswerList();
    getUserList();
  }, []);

  const languageFiltered = languageList.filter(
    (language) => language.language_name === selectedLanguage
  );

  const postFiltered = postList.filter(
    (post) => post.language_id === languageFiltered[0]?.id
  );

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
            {selectedLanguage && <span>{selectedLanguage}</span>}
          </Typography>
        </Stack>

        <Stack sx={{ width: "80%" }}>
          {selectedLanguage
            ? postFiltered.map((postMap) => (
                <Post
                  users={userList
                    .filter((user) => user.id === postMap?.user_id)
                    .map((userMap) => userMap.picture)}
                  key={postMap?.id}
                  tag={postMap?.tag}
                  post={postMap?.post_text}
                  date={postMap?.creation_date}
                  answers={answerList
                    .filter((answer) => answer.post_id === postMap?.id)
                    .map((answerMap) => answerMap.answer_text)}
                />
              ))
            : postList.map((postMap) => (
                <Post
                  users={userList
                    .filter((user) => user.id === postMap?.user_id)
                    .map((userMap) => userMap.picture)}
                  key={postMap?.id}
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
        <Button sx={{ padding: 1, backgroundColor: "#0088CE" }}>
          <Links to="/creer-post">CREER MON POST</Links>
        </Button>
      </Stack>
    </Container>
  );
}
