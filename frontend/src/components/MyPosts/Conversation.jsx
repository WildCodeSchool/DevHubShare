import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Typography, Avatar, Stack, TextField } from "@mui/material";
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

  // On récupère les infos de la personne connectée
  const token = localStorage.getItem("token");
  const localId = localStorage.getItem("userId");

  useEffect(() => {
    // Si pas de nouveaux posts ou pas de nouvelles réponses, rien ne se passe.
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
    // UseEffect écoute les nouveaux posts ou les nouvelles réponses pour les réafficher
    getMyAnswers();
  }, [post, newAnswer]);

  // Fonction qui gère la modification des réponses
  const handleEditAnswer = (answer) => {
    setEditingAnswer(answer);
    setEditedAnswerText(answer.answer_text);
  };

  // Mise à jour des réponses modifiées
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
    // <Container
    //   sx={{
    //     mt: 2,
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //   }}
    // >
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
          <Typography
            variant="h5"
            style={{ margin: "0.5rem", color: "#82BE00" }}
          >
            Les réponses ici:
          </Typography>
          {/* Si post is deleted, on affiche pas de post */}
          {postIsDeleted
            ? null
            : post && (
                <Accordion key={post.id} sx={{ margin: "0.5rem" }}>
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
                    <Typography variant="body1" fontWeight="bold">
                      {post.tag}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                      value={post.postText}
                      multiline
                      fullWidth
                      rows={20}
                    />
                  </AccordionDetails>
                </Accordion>
              )}
        </div>
        <div
          className="TexteReponse"
          style={{
            padding: "1rem",
            width: "90%",
            marginLeft: "6%",
          }}
        >
          {/* Si post is deleted on affiche pas de réponse non plus. Sinon on MAP les réponses pour les afficher */}
          {postIsDeleted
            ? null
            : myAnswers
                // On trie les réponses en fonction de leur date et de l'heure car sinon elles sont affichées par user_id
                .sort(
                  (a, b) =>
                    new Date(a.creation_date) - new Date(b.creation_date)
                )
                .map((answer) => (
                  <div className="reponsesAvecEdit">
                    <Accordion
                      key={answer.id}
                      style={{
                        backgroundColor: "#fff",
                        marginBottom: "1rem",
                        borderRadius: 2,
                      }}
                    >
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
                        <Avatar
                          sx={{
                            backgroundColor: "#82BE00",
                            marginRight: "0.5rem",
                          }}
                        >
                          {/*  On récupère la 1ere lettre du pseudo qui répond pour l'afficher dans l'avatar + on affiche le pseudo */}
                          {answer.pseudo.charAt(0).toUpperCase()}
                        </Avatar>
                        <Typography variant="body1" fontWeight="bold">
                          {answer.pseudo}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            marginBottom: "1rem",
                            borderRadius: 2,
                          }}
                        >
                          {/* Vérification si le user_id de la réponse est différente du user id récupéré dans le local storage. Si différent, le bouton editIcon ne s'affiche pas. */}
                          {editingAnswer === answer ? (
                            <TextField
                              id="post-content"
                              label="Mon nouveau texte ici..."
                              value={editedAnswerText}
                              onChange={(e) =>
                                setEditedAnswerText(e.target.value)
                              }
                              multiline
                              rows={7}
                              InputProps={{
                                endAdornment: (
                                  // Bouton qui permet de rentrer la nouvelle réponse modifiée en dur.
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
                            <TextField
                              value={answer.answer_text}
                              multiline
                              fullWidth
                              rows={10}
                            />
                          )}
                          <div
                            className="editAnswer"
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Typography>
                              {/* On affiche la date de création du poste et l'heure. */}
                              {format(
                                new Date(answer.creation_date),
                                "dd/MM/yyyy HH:mm"
                              )}
                            </Typography>
                            {/* Si l'ID de la personne qui répond est la même que la personne connecté, le bouton édit s'affiche et on peut modifier la réponse, sinon ce n'est pas possible. */}
                            {answer.user_id === parseInt(localId, 10) && (
                              <IconButton
                                aria-label="delete"
                                size="large"
                                onClick={() =>
                                  handleEditAnswer(answer, answer.id)
                                }
                              >
                                <EditIcon sx={{ color: "#82BE00" }} />
                              </IconButton>
                            )}
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
        </div>
      </div>
    </Stack>
    // </Container>
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
