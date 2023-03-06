import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Typography, Stack } from "@mui/material";
import PostCard from "./PostCard";

export default function PostFeed() {
  const [answers, setAnswers] = useState([]);
  const [users, setUsers] = useState([]);
  const [postsWithAnswers, setPostsWithAnswers] = useState([]);

  useEffect(() => {
    const getAnswers = async () => {
      const response = await axios.get("http://localhost:5000/answers");
      setAnswers(response.data);
      console.info("liste des réponses : ", response.data);
    };
    getAnswers();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
      console.info("users :", response.data);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        const postsAnswers = response.data.map((post) => {
          const postAnswers = answers.filter(
            (answer) => answer.post_id === post.id
          );
          const postUsers = users.filter((user) => user.id === post.user_id);
          console.info(
            "liste des réponses pour le post ",
            post.id,
            ":",
            postAnswers
          );
          return { ...post, answers: postAnswers, users: postUsers };
        });
        setPostsWithAnswers(postsAnswers);
        console.info("liste des posts : ", response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, [answers]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        mt: 2,
        maxWidth: "sm",
        maxHeight: "sm",
      }}
    >
      <Typography variant="h5" sx={{ color: "#82BE00", fontWeight: "bold" }}>
        <em>Fil de discussion</em>
      </Typography>
      <Stack
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#82BE00",
          width: "90%",
        }}
      >
        {postsWithAnswers.map((post) => (
          <PostCard
            key={post.id}
            picture={post.picture}
            tag={post.tag}
            date={post.creation_date}
            postContent={post.post_text}
            answers={post.answers}
          />
        ))}
      </Stack>
    </Container>
  );
}
