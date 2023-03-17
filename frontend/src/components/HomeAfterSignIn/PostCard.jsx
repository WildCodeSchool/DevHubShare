import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import {
  Grid,
  Typography,
  Container,
  TextField,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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

export default function PostCard({
  postUsers,
  postId,
  postTag,
  postDate,
  postText,
  postAnswers,
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
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 1,
      }}
    >
      <Grid
        container
        mb={1}
        sx={{
          flexDirection: isMobile && "column",
          alignContent: isMobile && "stretch",
        }}
      >
        <Grid item sm={2} xs={12} display="flex" justifyContent="center">
          {postUsers?.map((user) => (
            <Avatar
              key={user.id}
              alt={user.pseudo}
              src="/broken-image.jpg"
              sx={{
                width: 60,
                height: 60,
                mr: isMobile ? 0 : 2,
                mt: 1,
                alignSelf: "center",
              }}
            />
          ))}
        </Grid>
        <Grid item sm={10} xs={12}>
          <Grid container direction="column" spacing={0.6}>
            <Grid item sx={{ mt: isMobile ? 0 : 1 }}>
              <Typography color="#82BE00" fontWeight="bold">
                TAG
              </Typography>
            </Grid>
            <Grid item sx={{ m: 0 }}>
              <TextField
                multiline
                rows={1}
                value={postTag}
                size="small"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 1,
                  border: "solid 1px #82BE00",
                  minWidth: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item mb={1}>
        {postUsers.map((user) => (
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Post de {user.pseudo}</Typography>
            </AccordionSummary>
            <AccordionDetails key={user.id}>
              <TextField
                value={postText}
                multiline
                rows={5}
                size="small"
                InputLabelProps={{ shrink: true }}
                label={format(new Date(postDate), "dd-MM-yyyy")}
                sx={{
                  width: "100%",
                  borderRadius: 1,
                  border: "solid 1px #82BE00",
                  backgroundColor: "#FFFFFF",
                }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
      {postAnswers?.length === 0 ? (
        <Grid item mb={1} component="form" onSubmit={handleAnswerSubmit}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Il n'y a pas encore de réponse pour ce post ! Pourquoi pas vous ?"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            multiline
            rows={2}
            sx={{
              backgroundColor: "#FFFFFF",
              border: "dotted 1px #82BE00",
              borderRadius: 1,
              width: "100%",
              fontStyle: "italic",
              mt: 1,
            }}
          />
          <StyledButton type="submit">Poster</StyledButton>
        </Grid>
      ) : (
        <Grid item mb={1}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Réponse(s) au post</Typography>
            </AccordionSummary>
            {postAnswers?.map((answer) => (
              <AccordionDetails key={answer.id}>
                <Grid container direction="column" spacing={1}>
                  <Grid item component="form" onSubmit={handleAnswerSubmit}>
                    <TextField
                      label={format(
                        new Date(answer.creation_date),
                        "dd-MM-yyyy"
                      )}
                      value={answer.answer_text}
                      multiline
                      rows={2}
                      sx={{
                        width: "100%",
                        borderRadius: 1,
                        border: "dotted 1px #82BE00",
                        backgroundColor: "#FFFFFF",
                      }}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            ))}
          </Accordion>
          {postUsers?.map((user) => (
            <Grid item mb={1} component="form" onSubmit={handleAnswerSubmit}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label={`Souhaitez-vous apporter votre aide à ${user.pseudo}`}
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                multiline
                rows={2}
                sx={{
                  backgroundColor: "#FFFFFF",
                  border: "dotted 1px #82BE00",
                  borderRadius: 1,
                  width: "100%",
                  fontStyle: "italic",
                  mt: 2,
                }}
              />
              <StyledButton type="submit">Poster</StyledButton>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

PostCard.propTypes = {
  postId: PropTypes.number.isRequired,
  postTag: PropTypes.string.isRequired,
  postText: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  postAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      answer_text: PropTypes.string.isRequired,
    })
  ).isRequired,
  postUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.instanceOf(Blob).isRequired,
      pseudo: PropTypes.string.isRequired,
    })
  ).isRequired,
  newAnswerSubmitted: PropTypes.bool.isRequired,
  setNewAnswerSubmitted: PropTypes.func.isRequired,
};
