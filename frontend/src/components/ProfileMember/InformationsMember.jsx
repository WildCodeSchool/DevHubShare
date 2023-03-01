/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";
import UserAvatar from "./UserAvatar";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FFF",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  field: {
    background: "#FFF",
    paddingLeft: 5,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function InformationsMembers({ pseudo, email, githubPage }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={1}>
          <UserAvatar />
        </Grid>
        <Grid item md={11}>
          <TextField
            className={classes.field}
            value={pseudo}
            fullWidth
            disabled
          />
          <TextField
            className={classes.field}
            value={email}
            fullWidth
            disabled
          />
          <TextField
            className={classes.field}
            value={githubPage}
            fullWidth
            disabled
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default InformationsMembers;
