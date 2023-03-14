import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
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
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";

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

export default function PostCard({ users, tag, date, postContent, answers }) {
  const isMobile = useMediaQuery("(max-width: 600px)");

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
          alignContent: isMobile && "center",
        }}
      >
        <Grid
          item
          md={2}
          sm={2}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {users?.map((user) => (
            <Avatar
              key={user.id}
              src={user.picture}
              sx={{
                width: 60,
                height: 60,
                mr: isMobile ? 0 : 2,
                mt: isMobile && 1,
              }}
            />
          ))}
        </Grid>
        <Grid item md={10} sm={10} xs={12}>
          <Grid
            container
            direction="column"
            spacing={0.8}
            sx={{ width: "100%" }}
          >
            <Grid item xs={12}>
              <Typography color="#82BE00" fontWeight="bold">
                TAG
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                rows={1}
                value={tag}
                size="small"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 1,
                  border: "solid 1px #82BE00",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item mb={1}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {users.map((user) => (
              <Typography>Post de {user.pseudo}</Typography>
            ))}
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              value={postContent}
              multiline
              rows={5}
              size="small"
              InputLabelProps={{ shrink: true }}
              label={format(new Date(date), "dd-MM-yyyy")}
              sx={{
                width: "100%",
                borderRadius: 1,
                border: "solid 1px #82BE00",
                backgroundColor: "#FFFFFF",
              }}
            />
          </AccordionDetails>
        </Accordion>
      </Grid>

      {answers?.length === 0 ? (
        <Grid item mb={1}>
          <TextField
            id="answer-content"
            InputLabelProps={{ shrink: true }}
            label="Il n'y a pas de réponse pour ce post encore ! Pourquoi pas vous ?"
            // value={answer}
            // onChange={handleAnswerChange}
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
            <AccordionDetails>
              <Grid container direction="column" spacing={1}>
                {answers?.map((answer) => (
                  <Grid item key={answer.id}>
                    <TextField
                      value={answer.answer_text}
                      multiline
                      rows={4}
                      label={format(new Date(date), "dd-MM-yyyy")}
                      sx={{
                        width: "100%",
                        borderRadius: 1,
                        border: "dotted 1px #82BE00",
                        backgroundColor: "#FFFFFF",
                      }}
                    />
                    <TextField
                      id="answer-content"
                      InputLabelProps={{ shrink: true }}
                      label="Votre réponse"
                      // value={answer}
                      // onChange={handleAnswerChange}
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
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      )}
    </Container>
  );
}

PostCard.propTypes = {
  tag: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      answer_text: PropTypes.string.isRequired,
    })
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.instanceOf(Blob).isRequired,
      pseudo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
