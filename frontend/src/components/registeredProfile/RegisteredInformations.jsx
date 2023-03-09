import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper, TextField, Button, makeStyles } from "@mui/material";
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

function RegisteredInformations() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userLanguages, setUserLanguages] = useState([]);
  const [userUpdate, setUserUpdate] = useState([]);
  //   const [firstname, setFirstname] = useState("");
  //   const [lastname, setLastname] = useState("");
  //   const [workplace, setWorkplace] = useState("");
  //   const [github, setGithub] = useState("");
  //   const [linkedin, setLinkedin] = useState("");
  const classes = useStyles();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const updateUser = {
  //       firstname,
  //       lastname,
  //       workplace,
  //       github,
  //       linkedin,
  //     };

  useEffect(() => {
    axios.get("http://localhost:5000/users/2").then((response) => {
      setCurrentUser(response.data);
    });
  }, []);
  useEffect(() => {
    axios.put("http://localhost:5000/users/2").then((response) => {
      setUserUpdate(response.data);
      //   setFirstname("");
      //   setLastname("");
      //   setWorkplace("");
      //   setGithub("");
      //   setLinkedin("");
    });
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.id) {
      axios
        .get(`http://localhost:5000/user_has_language/1`)
        .then((response) => response.data)
        .then((data) => {
          const userLanguageObjects = data.map((lang) => ({
            language_name: lang.language_name,
          }));
          setUserLanguages(userLanguageObjects);
        });
    }
  }, [currentUser]);

  return (
    <Paper className={classes.root}>
      <Button variant="contained" className={classes.retour} href="/creer-post">
        Retour
      </Button>
      <div className={classes.userImageContainer}>
        <UserImage size="5rem" backgroundColor="grey" />
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Pseudo"
              //   value={currentUser.pseudo}
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
              //   value={firstname.firstname}
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
              label="Nom"
              //   value={userUpdate.lastname}
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
              label="Email"
              //   value={currentUser.email}
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
              //   value={userUpdate.workplace}
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
              label="Git-Hub Page"
              //   value={userUpdate.github}
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
              label="Linkedin"
              //   value={currentUser.linkedin}
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
              label="Langues"
              //   value={userLanguages.map((lang) => lang.language_name).join(", ")}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default RegisteredInformations;
