import React from "react";
import { format } from "date-fns";
import { PropTypes } from "prop-types";
import { Grid, Typography, Container, TextField } from "@mui/material";
import UserImage from "../UserImage";

export default function Post({ tag, post, answers, date }) {
  return (
    <Container
      maxWidth="100%"
      maxheight="100%"
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        padding: "0%",
        mb: "4%",
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
          {/* <Avatar
            src="/broken-image.jpg"
            sx={{
              width: "64%",
              height: "46%",
              borderRadius: "50%",
            }}
          /> */}
          <UserImage size="5rem" backgroundColor="grey" />
        </Grid>
        <Grid item xs={10}>
          <Grid
            container
            direction="column"
            spacing={2}
            padding={1}
            sx={{ width: "100%" }}
          >
            <Grid item>
              <Typography color="#0088CE" fontWeight="bold">
                <span>TAG</span>
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                value={tag}
                variant="standard"
                size="small"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                label={format(new Date(date), "dd-MM-yyyy")}
                value={post}
                multiline
                rows={1}
                sx={{
                  width: "100%",
                  borderRadius: 1,
                  border: "solid 2px #82BE00",
                  backgroundColor: "white",
                  boxSizing: "border-box",
                }}
              />
            </Grid>
            {answers.length > 1 ? (
              answers.map((answer) => (
                <Grid item key={answer.id}>
                  <TextField
                    label={format(new Date(date), "dd-MM-yyyy")}
                    value={answer}
                    multiline
                    rows={1}
                    sx={{
                      width: "100%",
                      borderRadius: 1,
                      border: "solid 2px #82BE00",
                      backgroundColor: "white",
                      boxSizing: "border-box",
                    }}
                  />
                </Grid>
              ))
            ) : (
              <Grid item>
                <TextField
                  label={format(new Date(date), "dd-MM-yyyy")}
                  value={answers[0]}
                  multiline
                  rows={1}
                  sx={{
                    width: "100%",
                    borderRadius: 1,
                    border: "solid 2px #82BE00",
                    backgroundColor: "white",
                    boxSizing: "border-box",
                  }}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
Post.propTypes = {
  tag: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string.isRequired,
};

Post.defaultProps = {
  answers: [],
};
