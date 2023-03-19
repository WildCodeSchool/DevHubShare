import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
  Stack,
  Container,
  FormControl,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import flecheSend from "./images/flecheSend.png";

export default function MyAnswer({ post, onNewAnswerSubmitted }) {
  // Icone SNCF qui sert de bouton valider
  const flecheStyle = { height: "2rem", width: "2rem" };
  const [answerText, setAnswerText] = useState("");
  const navigate = useNavigate();
  // On récupère la valeur de la réponse tapée
  const answerSent = (e) => setAnswerText(e.target.value);

  // Infos de la personne connectée
  const token = localStorage.getItem("token");
  const localId = localStorage.getItem("userId");

  // Fonction qui gère la création d'une réponse
  const handleAnswerSubmit = async () => {
    if (!answerText) {
      return; // Sort de la fonction si le champ de texte est vide
    }

    try {
      // On poste la réponse dans la base de données
      await axios.post(
        "http://localhost:5000/answers",
        {
          answer_text: answerText,
          post_id: post.id,
          user_id: localId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Réinitialise le champ de texte après envoie de la réponse
      setAnswerText("");
      // Fonction passée comme props par le parent
      onNewAnswerSubmitted();
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réponse:", error);
      navigate("/erreur400");
    }
  };

  return (
    <Container
      sx={{
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
        }}
      >
        <FormControl sx={{ width: "100%", m: 2, gap: 1 }}>
          <TextField
            id="post-content"
            label="Mon texte ici..."
            value={answerText}
            onChange={answerSent}
            multiline
            rows={4}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/* Au click sur le bouton, on alimente la base de données. */}
                  <Button onClick={handleAnswerSubmit}>
                    <img
                      className="flecheSend"
                      src={flecheSend}
                      alt="fleche envoyer"
                      style={flecheStyle}
                    />
                  </Button>
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 1,
              fontSize: "sm",
              width: "100%",
            }}
          />
        </FormControl>
      </Stack>
    </Container>
  );
}

MyAnswer.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired,
  }),
  onNewAnswerSubmitted: PropTypes.func.isRequired,
};
MyAnswer.defaultProps = { post: {} };
