import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Stack } from "@mui/material";
import PostCard from "./PostCard";

export default function PostFeed() {
  const [posts, setPosts] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const getAnswers = async () => {
      const response = await axios.get("http://localhost:5000/answers");
      setAnswers(response.data);
      console.info("liste des réponses : ", response.data);
    };
    getAnswers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        const postsWithAnswers = response.data.map((post) => {
          const postAnswers = answers.filter(
            (answer) => answer.post_id === post.id
          );
          console.info(
            "liste des réponses pour le post ",
            post.id,
            ":",
            postAnswers
          );
          return { ...post, answers: postAnswers };
        });
        setPosts(postsWithAnswers);
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
        {posts.map((post) => (
          <PostCard
            key={post.id}
            tag={post.tag}
            postContent={post.post_text}
            answers={post.answers}
          />
        ))}
      </Stack>
    </Container>
  );
}
