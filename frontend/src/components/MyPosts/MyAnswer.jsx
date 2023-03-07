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

export default function MyAnswer({ post }) {
  const flecheStyle = { height: "2rem", width: "2rem" };
  console.info(post, "c'est quoi post?");
  const [answerText, setAnswerText] = useState("");

  const answerSent = (e) => setAnswerText(e.target.value);

  const handleAnswerSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5020/answers", {
        answer_text: answerText,
        post_id: post.id,
        user_id: 3,
      });
      console.info("Réponse envoyée à l'API:", response.data);
      // Réinitialise le champ de texte après envoie de la réponse
      setAnswerText("");
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réponse:", error);
    }
  };
  // useEffect(() => {
  //   handleAnswerSubmit();
  // }, [post]);

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
            label="Votre texte ici..."
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
};
MyAnswer.defaultProps = { post: {} };
