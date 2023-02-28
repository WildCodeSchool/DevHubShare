/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";
import SelectLanguage from "../SelectLanguages";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#009aa3",
    padding: theme.spacing(2.5),
    marginBottom: theme.spacing(2),
  },
  field: {
    background: "#FFF",
    borderRadius: 5,
    paddingLeft: 5,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function Informations({
  pseudo,
  nom,
  prenom,
  email,
  poste,
  githubPage,
  linkedin,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Pseudo"
            value={pseudo}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Nom"
            value={nom}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Prenom"
            value={prenom}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Email"
            value={email}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Poste Actuel"
            value={poste}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Git-Hub Page"
            value={githubPage}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Linkedin"
            value={linkedin}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <SelectLanguage />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Informations;
