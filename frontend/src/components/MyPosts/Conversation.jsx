import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Avatar, Container, Stack, TextField } from "@mui/material";
import { format } from "date-fns";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

export default function Conversation({ post, newAnswer, postIsDeleted }) {
  const [myAnswers, setMyAnswers] = useState([]);
  const [editingAnswer, setEditingAnswer] = useState([]);
  const [editedAnswerText, setEditedAnswerText] = useState([]);
  const navigate = useNavigate();
  console.info(postIsDeleted, "alors deleted ou pas?");
  const token = localStorage.getItem("token");
  const localId = localStorage.getItem("userId");

  useEffect(() => {
    if (!post && !newAnswer) return;
    async function getMyAnswers() {
      try {
        const response = await axios.get(
          `http://localhost:5000/answers/post/${post.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMyAnswers(response.data);
      } catch (error) {
        console.error(error);
        navigate("/erreur400");
      }
    }
    getMyAnswers();
  }, [post, newAnswer]);

  const handleEditAnswer = (answer) => {
    setEditingAnswer(answer);
    setEditedAnswerText(answer.answer_text);
  };

  async function updateAnswer(answerId) {
    try {
      await axios.put(
        `http://localhost:5000/answers/${answerId}`,
        {
          answer_text: editedAnswerText,
          post_id: post.id,
          user_id: localId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Update myAnswers pour réafficher les réponses
      setMyAnswers((prevAnswers) =>
        prevAnswers.map((answer) =>
          answer.id === answerId
            ? { ...answer, answer_text: editedAnswerText }
            : answer
        )
      );
    } catch (error) {
      console.error(error);
      navigate("/erreur400");
    }
  }

  return (
    <Container
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        sx={{
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#82BE00",
          width: "100%",
        }}
      >
        <div style={{ padding: "1rem", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#fff",
              marginBottom: "1rem",
              borderRadius: 2,
              padding: "0.2rem",
            }}
          >
            <h2 style={{ margin: "0.5rem", color: "#82BE00" }}>
              Les réponses ici:
            </h2>
            {postIsDeleted
              ? null
              : post && (
                  <Accordion sx={{ margin: "0.5rem" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        "& .MuiAccordionSummary-content": {
                          margin: 0,
                        },
                      }}
                    >
                      <h3>{post.tag}</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>{post.postText}</p>
                      {/* <p>{post.id}</p> */}
                    </AccordionDetails>
                  </Accordion>
                )}
          </div>

          <div
            className="TexteReponse"
            style={{
              padding: "1rem",
              width: "80%",
              marginLeft: "15%",
            }}
          >
            {postIsDeleted
              ? null
              : myAnswers.map((answer) => (
                  <div
                    key={answer.id}
                    style={{
                      backgroundColor: "#fff",
                      marginBottom: "1rem",
                      borderRadius: 2,
                      padding: "0.5rem",
                    }}
                  >
                    {answer.user_id !== answer.localId && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          sx={{
                            bgcolor: "#82BE00",
                            marginRight: "0.5rem",
                            marginBottom: "0.6rem",
                          }}
                        >
                          {answer.pseudo.charAt(0).toUpperCase()}
                        </Avatar>
                        <span>{answer.pseudo}</span>
                      </div>
                    )}
                    {editingAnswer === answer ? (
                      <TextField
                        id="post-content"
                        label="Mon nouveau texte ici..."
                        value={editedAnswerText}
                        onChange={(e) => setEditedAnswerText(e.target.value)}
                        multiline
                        rows={4}
                        InputProps={{
                          endAdornment: (
                            <IconButton
                              position="end"
                              onClick={() => updateAnswer(answer.id)}
                            >
                              <SaveIcon sx={{ color: "#82BE00" }} />
                            </IconButton>
                          ),
                        }}
                        sx={{
                          backgroundColor: "#FFFFFF",
                          borderRadius: 1,
                          fontSize: "sm",
                          width: "100%",
                        }}
                      />
                    ) : (
                      <p>{answer.answer_text}</p>
                    )}
                    <div
                      className="editAnswer"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>
                        {format(new Date(answer.creation_date), "dd/MM/yyyy")}
                      </p>
                      {answer.user_id === parseInt(localId, 10) && (
                        <IconButton
                          aria-label="delete"
                          size="large"
                          onClick={() => handleEditAnswer(answer, answer.id)}
                        >
                          <EditIcon sx={{ color: "#82BE00" }} />
                        </IconButton>
                      )}
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </Stack>
    </Container>
  );
}

Conversation.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired,
  }),
  newAnswer: PropTypes.bool.isRequired,
  postIsDeleted: PropTypes.bool.isRequired,
};
Conversation.defaultProps = { post: {} };
