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

export default function ProfileCard({
  picture,
  pseudo,
  email,
  userText,
  onClickUser,
}) {
  return (
    <Container
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 1,
        mt: 1,
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
          <Avatar
            onClick={onClickUser}
            src={picture}
            sx={{
              width: 70,
              height: 70,
              mr: 2,
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
              <Typography color="#009AA6" fontWeight="bold">
                Pseudo
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                readOnly
                value={pseudo}
                size="small"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 1,
                  border: "solid 1px #009AA6",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item>
              <Typography color="#009AA6" fontWeight="bold">
                email
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                readOnly
                value={email}
                size="small"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 1,
                  border: "solid 1px #009AA6",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ m: 1, width: "100%" }}>
          {userText ? (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Texte libre de {pseudo}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  readOnly
                  value={userText}
                  multiline
                  rows={2}
                  size="small"
                  sx={{
                    width: "100%",
                    borderRadius: 1,
                    border: "solid 1px #009AA6",
                    backgroundColor: "#FFFFFF",
                  }}
                />
              </AccordionDetails>
            </Accordion>
          ) : (
            <TextField
              disabled
              value={`Il n'y a pas  de texte libre pour ${pseudo} !`}
              size="small"
              sx={{
                width: "100%",
                borderRadius: 1,
                border: "dotted 1px #009AA6",
                backgroundColor: "#FFFFFF",
                fontStyle: "italic",
              }}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

ProfileCard.propTypes = {
  picture: PropTypes.instanceOf(Blob).isRequired,
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userText: PropTypes.string.isRequired,
  onClickUser: PropTypes.func.isRequired,
};
