/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import axios from "axios";
import AppBar from "@mui/material/AppBar";
import { Container, Grid, useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import LogoSNCF from "./images/DevHubSHARE_logo.png";
import NotificationImg from "./images/bellNotification.png";

const Links = styled(Link)({
  color: "#0088CE",
  textDecoration: "none",
});

const Button = styled("button")({
  border: "none",
  background: "none",
  color: "#0088CE",
});

const Logo = styled("img")({
  maxWidth: "7rem",
  minWidth: "6rem",
});

const Icon = styled("img")({
  width: "1.8rem",
  position: "absolute",
});

export default function NavBar() {
  const [answers, setAnswers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [newResponsesCount, setNewResponsesCount] = useState();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  // const token = localStorage.getItem("token");
  const localId = localStorage.getItem("userId");
  // const postId = 1;

  const filteredPosts = posts.filter((post) => post.user_id === localId);

  const filteredAnswers = answers.filter(
    (answer) =>
      answer.user_id !== localId && answer.post_id === filteredPosts[0]?.id
  );

  // const getPosts = async () => {
  //   const response = await axios.get(
  //     `http://localhost:5000/posts/user/${localId}`,
  //     {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   setPosts(response.data);
  //   console.info("posts2:", response.data);
  // };

  // const getAnswers = async () => {
  //   const response = await axios.get(
  //     `http://localhost:5000/answers/post/${postId}`,
  //     {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   setAnswers(response.data);
  //   console.info("answers2:", response.data);
  // };

  // useEffect(() => {
  //   getAnswers();
  //   getPosts();
  // }, []);

  useEffect(() => {
    setNewResponsesCount(
      filteredAnswers.filter(
        (answer) => answer.post_id === filteredPosts[0]?.id
      ).length
    );
  }, [filteredAnswers, filteredPosts]);

  return (
    <Container
      position="fixed"
      sx={{
        maxHeight: "96px",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "#FFFFFF",
          borderBottom: "solid 1px #D7D7D7",
          flexWrap: "nowrap",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ padding: 0 }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item xl={2} lg={2} md={2} sm={2.7} xs={3}>
              <Logo
                src={LogoSNCF}
                alt="logo"
                sx={{
                  display: isMobile && "flex",
                  flexDirection: isMobile && "row",
                  justifySelf: isMobile && "flex-end",
                }}
              />
            </Grid>
            <Grid
              item
              xs={0}
              sx={{
                display: isMobile && "none",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontSize: isTablet ? "250%" : "400%",
                  color: "#009AA6",
                }}
              >
                DevHubSHARE
              </Typography>
            </Grid>
            <Grid
              container
              xl={2}
              lg={2}
              md={2}
              sm={2.7}
              xs={9}
              sx={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                justifyContent: isMobile && "center",
                alignContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button color="inherit">
                <Typography variant="h6">
                  <Links to="/connexion">Connexion</Links>
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography variant="h6">
                  <Links to="/mon-compte">Mon compte</Links>
                </Typography>
              </Button>
              <Button sx={{ p: 0 }}>
                <Icon src={NotificationImg} alt="notificationBell" />
                {newResponsesCount >= 0 && (
                  <Typography
                    sx={{
                      backgroundColor: "red",
                      position: "relative",
                      bottom: "0.5rem",
                      left: "1.7rem",
                      height: "1.1rem",
                      width: "1.2rem",
                      borderRadius: "60%",
                    }}
                  >
                    {newResponsesCount}
                  </Typography>
                )}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
