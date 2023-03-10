/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Stack } from "@mui/material";
import { format } from "date-fns";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PostSent({ onPostSelected, onSendAnswer }) {
  const [myPosts, setMyPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState("");

  // localStorage.setItem("user.id", "1");
  const id = localStorage.getItem("user.id");

  const getMyPosts = () => {
    axios
      .get(`http://localhost:5000/posts/user/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setMyPosts(data);
      });
  };

  const handlePostClick = (e, post) => {
    e.preventDefault();
    setSelectedPost({ tag: post.tag, postText: post.post_text });
    onPostSelected({ id: post.id, tag: post.tag, postText: post.post_text });
    onSendAnswer({ id: post.id, tag: post.tag, postText: post.post_text });
  };

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
        spacing={4}
        sx={{
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#009AA6",
          width: "90%",
        }}
      >
        <div style={{ padding: "1rem", width: "80%" }}>
          <h2
            style={{
              color: "#009AA6",
              backgroundColor: "#ffff",
              borderRadius: 2,
              padding: "0.5rem",
            }}
          >
            Mes posts ici:
          </h2>
          {myPosts.map((post) => (
            <Accordion
              key={post.id}
              style={{
                backgroundColor: "#fff",
                marginBottom: "1rem",
                borderRadius: 2,
                padding: "0.5rem",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handlePostClick(e, post)}
                  value={selectedPost}
                >
                  {post.tag}
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <p>{post.post_text}</p>
                <p> {format(new Date(post.creation_date), "dd/MM/yyyy")}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Stack>
    </Container>
  );
}
