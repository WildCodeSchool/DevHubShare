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
  const [newAnswerSubmitted, setNewAnswerSubmitted] = useState(false);
  const token = localStorage.getItem("token");

  const getPostList = async () => {
    const response = await axios.get("http://localhost:5000/posts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPostList(response.data);
  };

  useEffect(() => {
    const getAnswerList = async () => {
      const response = await axios.get("http://localhost:5000/answers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAnswerList(response.data);
    };

    const getUserList = async () => {
      const response = await axios.get("http://localhost:5000/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserList(response.data);
    };
    getAnswerList();
    getUserList();
  }, [newAnswerSubmitted]);

  useEffect(() => {
    const getLanguageList = async () => {
      const response = await axios.get("http://localhost:5000/languages");
      setLanguageList(response.data);
    };
    getLanguageList();
  }, []);

  useEffect(() => {
    getPostList();
  }, []);

  const languageFiltered = languageList.filter(
    (language) => language.language_name === selectedLanguage
  );

  const postFiltered = postList.filter(
    (post) => post.language_id === languageFiltered[0]?.id
  );

  const users = userList
    .filter((user) => user[0]?.id === postList.user_id)
    .map((user) => ({ id: user.id, pseudo: user.pseudo }));
  console.info("pseudo:", users);

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
            ? postFiltered.map((postMap) => {
                const user = userList.find(
                  (userFind) => userFind.id === postMap.user_id
                );
                return (
                  <Post
                    key={postMap?.id}
                    pseudo={user.pseudo}
                    tag={postMap?.tag}
                    post={postMap?.post_text}
                    date={postMap?.creation_date}
                    answers={answerList
                      .filter((answer) => answer.post_id === postMap?.id)
                      .map((answerMap) => answerMap.answer_text)}
                    newAnswerSubmitted={newAnswerSubmitted}
                    setNewAnswerSubmitted={setNewAnswerSubmitted}
                  />
                );
              })
            : postList.map((postMap) => {
                const user = userList.find(
                  (userFind) => userFind.id === postMap.user_id
                );
                return (
                  <Post
                    key={postMap?.id}
                    pseudo={user.pseudo}
                    tag={postMap?.tag}
                    post={postMap?.post_text}
                    date={postMap?.creation_date}
                    answers={answerList
                      .filter((answer) => answer.post_id === postMap?.id)
                      .map((answerMap) => answerMap.answer_text)}
                    newAnswerSubmitted={newAnswerSubmitted}
                    setNewAnswerSubmitted={setNewAnswerSubmitted}
                  />
                );
              })}
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
