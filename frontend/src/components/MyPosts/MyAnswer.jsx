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
import flecheSend from "./images/flecheSend.png";

export default function MyAnswer({ post, onNewAnswerSubmitted }) {
  const flecheStyle = { height: "2rem", width: "2rem" };
  const [answerText, setAnswerText] = useState("");

  const answerSent = (e) => setAnswerText(e.target.value);

  // localStorage.setItem("user.id", "1");
  const localId = localStorage.getItem("userId");

  const handleAnswerSubmit = async () => {
    if (!answerText) {
      return; // Sort de la fonction si le champ de texte est vide
    }

    try {
      const response = await axios.post("http://localhost:5000/answers", {
        answer_text: answerText,
        post_id: post.id,
        user_id: localId,
      });
      console.info("Réponse envoyée à l'API:", response.data);
      // Réinitialise le champ de texte après envoie de la réponse
      setAnswerText("");
      onNewAnswerSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réponse:", error);
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
          width: "75%",
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
