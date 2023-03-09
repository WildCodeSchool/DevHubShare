import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
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

export default function PostCard({ users, tag, date, postContent, answers }) {
  const firstLine = postContent.split("\n")[0];

  return (
    <Container
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 1,
        mb: 1,
      }}
    >
      <Grid container mb={1}>
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {users?.map((user) => (
            <Avatar
              key={user.id}
              src={user.picture}
              sx={{
                width: 50,
                height: 50,
                mr: 2,
              }}
            />
          ))}
        </Grid>
        <Grid item xs={10}>
          <Grid
            container
            direction="column"
            spacing={0.8}
            sx={{ width: "100%" }}
          >
            <Grid item sx={2}>
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
            <Typography>Post : {firstLine}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              value={postContent}
              multiline
              rows={3}
              size="small"
              InputLabelProps={{ shrink: true }}
              label={format(new Date(date), "dd-MM-yyyy")}
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
        {answers?.length === 0 ? (
          <TextField
            disabled
            value="Il n'y a pas encore de réponse pour ce post !"
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
              <Typography>Réponse(s) au post</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container direction="column" spacing={1}>
                {answers?.map((answer) => (
                  <Grid item key={answer.id}>
                    <TextField
                      value={answer.answer_text}
                      rows={1}
                      label={"Réponse d'un dev"}
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
