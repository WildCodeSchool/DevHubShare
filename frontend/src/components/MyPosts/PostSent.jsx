/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Stack } from "@mui/material";

export default function PostSent({ onPostSelected }) {
  const [myPosts, setMyPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");

  const getMyPosts = () => {
    axios
      .get("http://localhost:5020/posts")
      .then((response) => response.data)
      .then((data) => {
        setMyPosts(data);
        // console.info("postes ", data);
      });
  };

  const handlePostClick = (e, post) => {
    e.preventDefault();
    setSelectedPost({ tag: post.tag, postText: post.post_text });
    onPostSelected({ tag: post.tag, postText: post.post_text });
  };

  console.info(selectedPost, "poste selectionné");

  useEffect(() => {
    getMyPosts();
  }, []);

  return (
    <Container
      sx={{
        mt: 2,
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
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#009AA6",
          width: "90%",
          height: "25rem",
        }}
      >
        <div style={{ padding: "1rem" }}>
          {myPosts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: "#fff",
                marginBottom: "1rem",
                borderRadius: 2,
                padding: "0.2rem",
              }}
            >
              <h3
                style={{ cursor: "pointer" }}
                onClick={(e) => handlePostClick(e, post)}
              >
                {post.tag}
              </h3>
              <p>{post.post_text}</p>
            </div>
          ))}
        </div>
      </Stack>
      {/* {selectedPost && (
        <div>
          <h4>{selectedPost.tag}</h4>
          <p>{selectedPost.postText}</p>
        </div>
      )} */}
    </Container>
  );
}
