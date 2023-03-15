import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Container, Typography, Stack, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostFeed({ languageNameSelected, languageSelected }) {
  const [answers, setAnswers] = useState([]);
  const [users, setUsers] = useState([]);
  const [postsWithAnswers, setPostsWithAnswers] = useState([]);
  const [newAnswerSubmitted, setNewAnswerSubmitted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();

  useEffect(() => {
    const getAnswers = async () => {
      const response = await axios.get("http://localhost:5000/answers");
      setAnswers(response.data);
    };
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    };
    getAnswers();
    getUsers();
  }, [newAnswerSubmitted]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        const postsAnswers = response.data.map((post) => {
          const postAnswers = answers.filter(
            (answer) => answer.post_id === post.id
          );
          const postUsers = users.filter((user) => user.id === post.user_id);
          return { ...post, answers: postAnswers, users: postUsers };
        });
        setPostsWithAnswers(postsAnswers);
      } catch (error) {
        console.error(error);
        navigate("/erreur400");
      }
    };
    getPosts();
  }, [answers]);

  const filteredPosts =
    languageSelected.length > 0
      ? postsWithAnswers.filter(
          (post) => post?.language_id === languageSelected[0]?.id
        )
      : postsWithAnswers;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        mt: 3,
        mb: 3,
        minWidth: isMobile && "95vw",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", color: "#82BE00", fontWeight: "medium" }}
      >
        <em>Fil de discussion {languageNameSelected}</em>
      </Typography>
      <Stack
        spacing={1}
        sx={{
          mt: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#82BE00",
          width: "90%",
        }}
      >
        {filteredPosts?.map((post) => (
          <PostCard
            key={post.id}
            postId={post.id}
            postUsers={post.users}
            postTag={post.tag}
            postDate={post.creation_date}
            postText={post.post_text}
            postAnswers={post.answers}
            setNewAnswerSubmitted={setNewAnswerSubmitted}
            // setAnswers={setAnswers}
          />
        ))}
      </Stack>
    </Container>
  );
}

PostFeed.propTypes = {
  languageSelected: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      language_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  languageNameSelected: PropTypes.string.isRequired,
};
