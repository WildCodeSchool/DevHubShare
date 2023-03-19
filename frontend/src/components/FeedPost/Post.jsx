import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { PropTypes } from "prop-types";
import { styled } from "@mui/system";
import {
  Grid,
  Typography,
  Container,
  TextField,
  Avatar,
  useMediaQuery,
  Button,
} from "@mui/material";

const StyledButton = styled(Button)({
  backgroundColor: "#82BE00",
  color: "#FFFFFF",
  "&:hover": { backgroundColor: "#82BE00" },
  fontSize: 9,
  fontWeight: "bold",
  width: "10%",
  marginLeft: "84%",
  marginTop: "1%",
});
export default function Post({
  pseudo,
  users,
  tag,
  post,
  answers,
  date,
  postId,
  newAnswerSubmitted,
  setNewAnswerSubmitted,
}) {
  const [answerText, setAnswerText] = useState("");
  const token = localStorage.getItem("token");
  const localId = localStorage.getItem("userId");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();

  const handleAnswerSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/answers",
        {
          user_id: localId,
          post_id: postId,
          answer_text: answerText,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.info(response.data);
      setAnswerText("");
      setNewAnswerSubmitted(!newAnswerSubmitted);
    } catch (error) {
      console.error(error);
      navigate("/erreur404");
    }
  };
  return (
    <Container
      maxWidth="100%"
      maxheight="100%"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 1,
        padding: "0%",
        mb: "4%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: isMobile && "column",
        alignContent: isMobile && "stretch",
        alignItems: isMobile && "center",
      }}
    >
      <Grid
        container
        mb="1%"
        width="100%"
        sx={{
          flexDirection: isMobile && "column",
          alignContent: isMobile && "stretch",
          alignItems: isMobile && "center",
        }}
      >
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            key={users?.id}
            alt={pseudo}
            src="/broken-image.jpg"
            sx={{
              width: 60,
              height: 60,
              // mr: isMobile ? 0 : 2,
              mt: 1,
              alignSelf: "center",
            }}
          />
        </Grid>

        <Grid item xs={10}>
          <Grid
            container
            direction="column"
            spacing={4}
            padding={1}
            sx={{
              width: "100%",
            }}
          >
            <Grid item>
              <TextField
                value={pseudo}
                variant="standard"
                size="small"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>

            <Grid item>
              <TextField
                value={tag}
                variant="standard"
                size="small"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item color="#82BE00">
              <TextField
                label={format(new Date(date), "dd-MM-yyyy")}
                value={post}
                multiline
                rows={1}
                sx={{
                  width: "100%",
                  borderRadius: 1,
                  border: "solid 2px #82BE00",
                  backgroundColor: "#FFFFFF",
                  boxSizing: "border-box",
                  "& label": {
                    color: "#0088CE",
                    fontWeight: "bold",
                    position: "absolute",
                    top: "-10px",
                    left: "-14px",
                    backgroundColor: "white",
                    // padding: "0 5px",
                  },
                }}
              />
            </Grid>
            {answers ? (
              answers.map((answer) => (
                <Grid item key={answer.id}>
                  <TextField
                    label={format(new Date(date), "dd-MM-yyyy")}
                    value={answer}
                    multiline
                    rows={1}
                    sx={{
                      width: "100%",
                      borderRadius: 1,
                      border: "solid 2px #82BE00",
                      backgroundColor: "white",
                      boxSizing: "border-box",
                      "& label": {
                        color: "#0088CE",
                        fontWeight: "bold",
                        position: "absolute",
                        top: "-10px",
                        left: "-14px",
                        backgroundColor: "white",
                        // padding: "0 5px",
                        // borderColor: "#82BE00",
                      },
                    }}
                  />
                </Grid>
              ))
            ) : (
              <Grid item>
                <TextField
                  label={format(new Date(date), "dd-MM-yyyy")}
                  value={answers[0]}
                  multiline
                  rows={1}
                  sx={{
                    width: "100%",
                    borderRadius: 1,
                    border: "solid 2px #82BE00",
                    backgroundColor: "white",
                    boxSizing: "border-box",
                  }}
                />
              </Grid>
            )}
            <Grid item onSubmit={handleAnswerSubmit}>
              <Typography color="#0088CE" fontWeight="bold">
                <span>REPONDRE</span>
              </Typography>
              <TextField
                label="Votre réponse"
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                multiline
                rows={2}
                sx={{
                  width: "100%",
                  borderRadius: 1,
                  border: "solid 2px #82BE00",
                  backgroundColor: "white",
                  boxSizing: "border-box",
                }}
              />
              <StyledButton type="submit">Poster</StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
Post.propTypes = {
  pseudo: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.instanceOf(Blob).isRequired,
    })
  ),
  newAnswerSubmitted: PropTypes.bool.isRequired,
  setNewAnswerSubmitted: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
};

Post.defaultProps = {
  answers: [],
  users: [],
};
