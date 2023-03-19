/* eslint-disable react/jsx-no-bind */
import Divider from "@mui/material/Divider";
import { Stack, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import PostSent from "./PostSent";
import Conversation from "./Conversation";
import MyAnswer from "./MyAnswer";
import LinkButton from "./LinkButton";
import UserImage from "../UserImage";

export default function MyPosts() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedPost, setSelectedPost] = useState([]);
  const [sendAnswer, setSendAnswer] = useState([]);
  const [isNewAnswerSubmitted, setIsNewAnswerSubmitted] = useState(false);
  const [postIsDeleted, setPostIsDeleted] = useState(false);

  function handleSelectedPost(post) {
    setSelectedPost(post);
  }

  function handleAnswer(post) {
    setSendAnswer(post);
  }

  function handleNewAnswerSubmitted() {
    setIsNewAnswerSubmitted(!isNewAnswerSubmitted);
  }

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      justifyContent="space-around"
      alignItems="flex-start"
      paddingTop="1rem"
    >
      <Stack
        direction="column"
        sx={{ minWidth: isSmallScreen ? "96vw" : "50%" }}
      >
        <UserImage size="5rem" backgroundColor="grey" />

        <PostSent
          onPostSelected={handleSelectedPost}
          onSendAnswer={handleAnswer}
          onPostDeleted={setPostIsDeleted}
        />
      </Stack>
      {isSmallScreen ? (
        <Divider orientation="horizontal" flexItem sx={{ marginTop: "1rem" }} />
      ) : (
        <Divider
          orientation="vertical"
          flexItem
          sx={{ marginLeft: "1rem", marginRight: "1rem" }}
        />
      )}
      <Stack
        direction="column"
        spacing={2}
        sx={{ minWidth: isSmallScreen ? "96vw" : "50%" }}
      >
        <Conversation
          post={selectedPost}
          newAnswer={isNewAnswerSubmitted}
          postIsDeleted={postIsDeleted}
        />
        <MyAnswer
          post={sendAnswer}
          onNewAnswerSubmitted={handleNewAnswerSubmitted}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: "4rem",
            marginBottom: "0.5rem",
          }}
        >
          <LinkButton />
        </div>
      </Stack>
    </Stack>
  );
}
