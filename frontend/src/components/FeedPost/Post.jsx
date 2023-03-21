import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { PropTypes } from "prop-types";
import { styled } from "@mui/system";
import {
  Grid,
  Container,
  TextField,
  Avatar,
  useMediaQuery,
  InputLabel,
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
  user,
  tag,
  post,
  answers,
  postDate,
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
      await axios.post(
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
        borderRadius: 2,
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
            key={user.id}
            alt={pseudo}
            src="/broken-image.jpg"
            sx={{
              width: 60,
              height: 60,
              mt: 1,
              alignSelf: "center",
            }}
          />
        </Grid>

        <Grid item xs={10}>
          <Grid
            container
            flexDirection="column"
            spacing={4}
            padding={1}
            sx={{
              width: "100%",
            }}
          >
            <Grid item>
              <InputLabel
                htmlFor="pseudo-input"
                sx={{
                  color: "#0088CE",
                  fontWeight: "bold",
                }}
              >
                Pseudo
              </InputLabel>
              <TextField
                value={pseudo}
                variant="standard"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>

            <Grid item>
              <InputLabel
                htmlFor="tag-input"
                sx={{
                  color: "#0088CE",
                  fontWeight: "bold",
                }}
              >
                Titre
              </InputLabel>
              <TextField
                value={tag}
                variant="standard"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item color="#82BE00">
              <InputLabel
                htmlFor="post-input"
                sx={{
                  color: "#0088CE",
                  fontSize: "smaller",
                  fontWeight: "bold",
                }}
              >
                Post publié le {format(new Date(postDate), "dd-MM-yyyy")}
              </InputLabel>
              <TextField
                value={post}
                multiline
                rows={1}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  border: "solid 2px #82BE00",
                  backgroundColor: "#FFFFFF",
                }}
              />
            </Grid>

            {answers.map((answer) => (
              <Grid item component="form" key={answer.id}>
                <InputLabel
                  htmlFor="post-input"
                  sx={{
                    color: "#0088CE",
                    fontSize: "smaller",
                    fontWeight: "bold",
                  }}
                >
                  Réponse de {answer.userAnswer.pseudo} du{" "}
                  {format(new Date(answer.dateAnswer), "dd-MM-yyyy")}
                </InputLabel>
                {answer && (
                  <TextField
                    value={answer.textAnswer}
                    multiline
                    rows={1}
                    sx={{
                      width: "100%",
                      borderRadius: 2,
                      border: "solid 2px #82BE00",
                      backgroundColor: "white",
                      boxSizing: "border-box",
                    }}
                  />
                )}
              </Grid>
            ))}
            <Grid
              item
              component="form"
              onSubmit={handleAnswerSubmit}
              display="flex"
              direction="column"
              justifyContent="center"
            >
              <InputLabel
                htmlFor="post-input"
                sx={{
                  color: "#0088CE",
                  fontSize: "smaller",
                  fontWeight: "bold",
                }}
              >
                Répondre à {pseudo}
              </InputLabel>
              <TextField
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                multiline
                rows={2}
                sx={{
                  width: "100%",
                  borderRadius: 2,
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
  postDate: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(
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
  user: [],
};
