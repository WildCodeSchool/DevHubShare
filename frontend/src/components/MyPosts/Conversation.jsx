import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Container, Stack } from "@mui/material";
import { format } from "date-fns";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Conversation({ post, newAnswer }) {
  const [myAnswers, setMyAnswers] = useState([]);

  useEffect(() => {
    if (!post && !newAnswer) return;
    async function getMyAnswers() {
      try {
        const response = await axios.get(
          `http://localhost:5000/answers/post/${post.id}`
        );
        setMyAnswers(response.data);
        console.info("les réponses à mon poste", response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMyAnswers();
  }, [post, newAnswer]);

  return (
    <Container
      sx={{
        mt: 2,
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
        spacing={4}
        sx={{
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#82BE00",
          width: "90%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "1rem", width: "80%" }}>
          <div
            style={{
              backgroundColor: "#fff",
              marginBottom: "1rem",
              borderRadius: 2,
              padding: "0.2rem",
            }}
          >
            <h2 style={{ margin: "0.5rem", color: "#82BE00" }}>
              Mes Posts ici
            </h2>
            {post && (
              <Accordion sx={{ margin: "0.5rem" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
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
        </div>
        <div
          style={{
            padding: "1rem",
            width: "80%",
            marginLeft: "4.5rem",
          }}
        >
          {myAnswers.map((answer) => (
            <div
              key={answer.id}
              style={{
                backgroundColor: "#fff",
                marginBottom: "1rem",
                borderRadius: 2,
                padding: "0.5rem",
              }}
            >
              <p>{answer.answer_text}</p>
              {/* <p>{answer.user_id}</p> */}
              <p>{format(new Date(answer.creation_date), "dd/MM/yyyy")}</p>
            </div>
          ))}
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
};
Conversation.defaultProps = { post: {} };
