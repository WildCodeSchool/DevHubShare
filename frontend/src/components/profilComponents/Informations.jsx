/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import UserImage from "../UserImage";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#009aa3",
    padding: theme.spacing(2.5),
    marginBottom: theme.spacing(1),
  },
  field: {
    background: "#FFF",
    borderRadius: 5,
    paddingLeft: 5,
    marginBottom: theme.spacing(1),
  },
  valider: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function Informations() {
  const [user, setUser] = useState("");
  const [userLanguages, setUserLanguages] = useState([]);
  const [userUpdate, setUserUpdate] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const classes = useStyles();
  useEffect(() => {
    axios.get("http://localhost:5000/users/209").then((response) => {
      setUser(response.data);
    });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const updateUser = {
      firstname,
      lastname,
      workplace,
      github,
      linkedin,
    };
    useEffect(() => {
      axios
        .put("http://localhost:5000/users/209", updateUser)
        .then((response) => {
          setUserUpdate(response.data);
          setFirstname("");
          setLastname("");
          setWorkplace("");
          setGithub("");
          setLinkedin("");
        });
    }, []);
  };
  useEffect(() => {
    if (user && user.id) {
      // Vérifie si l'utilisateur est défini et a un ID avant de continuer
      axios
        .get(`http://localhost:5000/user_has_language?user_id=${user.id}`)
        .then((response) => response.data)
        .then((data) => {
          const userLanguageObjects = data.map((lang) => ({
            id: lang.language_id,
            language_name: lang.language_name,
          }));
          setUserLanguages(userLanguageObjects);
          console.info("user languages", userLanguageObjects);
        });
    }
  }, [user]);

  return (
    <Paper className={classes.root}>
      <Button variant="contained" className={classes.retour}>
        Retour
      </Button>
      <div className={classes.userImageContainer}>
        <UserImage size="5rem" backgroundColor="grey" />
      </div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Pseudo"
              value={user.pseudo}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Prénom"
              value={user.firstname}
              fullWidth
              onChange={(e) => setFirstname(e.target.value)}
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Nom"
              value={user.lastname}
              fullWidth
              onChange={(e) => setLastname(e.target.value)}
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Email"
              value={user.email}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Poste Actuel"
              value={user.workplace}
              fullWidth
              onChange={(e) => setWorkplace(e.target.value)}
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Git-Hub Page"
              value={user.github}
              fullWidth
              onChange={(e) => setGithub(e.target.value)}
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Linkedin"
              value={user.linkedin}
              fullWidth
              onChange={(e) => setLinkedin(e.target.value)}
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Langues"
              value={userLanguages.map((lang) => lang.language_name).join(", ")}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
            />
          </Grid>
          <Grid item xs={12} className={classes.valider}>
            <Button variant="contained">Valider</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default Informations;
