/* eslint-disable react/jsx-no-bind */
import Divider from "@mui/material/Divider";
import { Stack, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import PostSent from "./MyPosts/PostSent";
import Conversation from "./MyPosts/Conversation";
import MyAnswer from "./MyPosts/MyAnswer";
import UserImage from "./UserImage";

export default function MyPosts() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedPost, setSelectedPost] = useState("");
  const [sendAnswer, setSendAnswer] = useState("");
  const [isNewAnswerSubmitted, setIsNewAnswerSubmitted] = useState(false);

  function handleSelectedPost(post) {
    setSelectedPost(post);
  }

  function handleAnswer(post) {
    setSendAnswer(post);
  }

  function handleNewAnswerSubmitted(newAnswer) {
    setIsNewAnswerSubmitted(newAnswer);
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
        sx={{
          maxWidth: "100%",
          width: isSmallScreen ? "100%" : "50%",
        }}
      >
        <UserImage size="5rem" backgroundColor="grey" />

        <PostSent
          onPostSelected={handleSelectedPost}
          onSendAnswer={handleAnswer}
        />
      </Stack>
      {isSmallScreen ? (
        <Divider orientation="horizontal" flexItem />
      ) : (
        <Divider orientation="vertical" flexItem />
      )}
      <Stack
        direction="column"
        spacing={2}
        sx={{
          maxWidth: "100%",
          width: isSmallScreen ? "100%" : "50%",
        }}
      >
        <Conversation post={selectedPost} newAnswer={isNewAnswerSubmitted} />
        <MyAnswer
          post={sendAnswer}
          onNewAnswerSubmitted={handleNewAnswerSubmitted}
        />
      </Stack>
    </Stack>
  );
}
