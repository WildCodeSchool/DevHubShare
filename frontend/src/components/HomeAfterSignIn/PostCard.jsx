import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Container,
  TextField,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PostCard({ tag, postContent, answers }) {
  const firstLine = postContent.split("\n")[0];

  return (
    <Container
      maxWidth="100%"
      maxHeight="100%"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 1,
        mb: 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb="1%"
        width="100%"
      >
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            src="/broken-image.jpg"
            sx={{
              width: "64%",
              height: "46%",
            }}
          />
        </Grid>
        <Grid item xs={10}>
          <Grid
            container
            direction="column"
            spacing={0.8}
            sx={{ width: "100%" }}
          >
            <Grid item>
              <Typography color="#82BE00" fontWeight="bold">
                TAG
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                multiline
                rows={1}
                value={tag}
                size="small"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 1,
                  border: "solid 1px #82BE00",
                  width: "60%",
                }}
              />
            </Grid>
            <Grid item>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{firstLine}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    value={postContent}
                    multiline
                    rows={3}
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    label="Post"
                    readOnly
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
            <Grid item mb={1}>
              {answers.length === 0 ? (
                <TextField
                  disabled
                  value="Il n'y a pas encore de réponse !"
                  size="small"
                  sx={{
                    width: "100%",
                    borderRadius: 1,
                    border: "dotted 1px #82BE00",
                    backgroundColor: "#FFFFFF",
                  }}
                />
              ) : (
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Réponses au "Post"</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container direction="column" spacing={1}>
                      {answers.map((answer) => (
                        <Grid item key={answer.id}>
                          <TextField
                            value={answer.answer_text}
                            rows={1}
                            label="Réponse d'un Dev"
                            sx={{
                              width: "100%",
                              borderRadius: 1,
                              border: "dotted 1px #82BE00",
                              backgroundColor: "#FFFFFF",
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

PostCard.propTypes = {
  tag: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      answer_text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
