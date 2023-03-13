/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
}));

function RegisteredInformations() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userLanguages, setUserLanguages] = useState([]);
  const [userUpdate, setUserUpdate] = useState([currentUser]);
  const [pseudo, setPseudo] = useState([currentUser]);
  const [firstname, setFirstname] = useState([currentUser]);
  const [lastname, setLastname] = useState([currentUser]);
  const [email, setEmail] = useState([currentUser]);
  const [workplace, setWorkplace] = useState([currentUser]);
  const [github, setGithub] = useState([currentUser]);
  const [linkedin, setLinkedin] = useState([currentUser]);
  const [sideLanguages, setSideLanguages] = useState([]);
  const [languageId, setLanguageId] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const navigate = useNavigate();
  const classes = useStyles();

  const getLanguages = () => {
    axios
      .get("http://localhost:5000/languages")
      .then((response) => response.data)
      .then((data) => {
        setSideLanguages(data);
      });
  };

  useEffect(() => {
    getLanguages();
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/users/4").then((response) => {
      setCurrentUser(response.data);
    });
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.id) {
      axios
        .get("http://localhost:5000/user_has_language/4")
        .then((response) => response.data)
        .then((data) => {
          const userLanguageObjects = data.map((lang) => ({
            language_name: lang.language_name,
          }));
          setUserLanguages(userLanguageObjects);
        });
    }
  }, [currentUser]);

  const handleSaveChanges = (event) => {
    event.preventDefault();
    navigate("/creation-compte");
    const languageUpdate = {
      language_id: languageId,
    };
    axios
      .put(
        "http://localhost:5000/users/4",
        { ...userUpdate, languageId },
        languageUpdate,
        languageId
      )
      .then((response) => {
        setUserUpdate([...userUpdate, response.data]);
        setLanguageId([selectedLanguage]);
        setSelectedLanguage("");
      });
    console.info(languageId, "languageid");
    console.info(languageUpdate, "languageupdate");
  };

  console.info(userUpdate, "userupdate");
  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
    setUserUpdate({ ...userUpdate, pseudo: event.target.value });
  };
  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
    setUserUpdate({ ...userUpdate, firstname: event.target.value });
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
    setUserUpdate({ ...userUpdate, lastname: event.target.value });
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setUserUpdate({ ...userUpdate, email: event.target.value });
  };
  const handleWorkplaceChange = (event) => {
    setWorkplace(event.target.value);
    setUserUpdate({ ...userUpdate, workplace: event.target.value });
  };
  const handleGithubChange = (event) => {
    setGithub(event.target.value);
    setUserUpdate({ ...userUpdate, github: event.target.value });
  };
  const handleLinkkedinChange = (event) => {
    setLinkedin(event.target.value);
    setUserUpdate({ ...userUpdate, linkedin: event.target.value });
  };

  console.info(sideLanguages, "sidelanguage");

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
              value={pseudo}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
              onChange={handlePseudoChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Prénom"
              value={firstname}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
              onChange={handleFirstnameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Nom"
              value={lastname}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
              onChange={handleLastnameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Email"
              value={email}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Poste Actuel"
              value={workplace}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
              onChange={handleWorkplaceChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Git-Hub Page"
              value={github}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
              onChange={handleGithubChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              label="Linkedin"
              value={linkedin}
              fullWidth
              InputLabelProps={{
                shrink: true,
                disableAnimation: true,
                position: "top",
              }}
              onChange={handleLinkkedinChange}
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
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Langages préférés
            </Typography>
            {sideLanguages.map((language) => (
              <FormControlLabel
                key={language.id}
                control={
                  <Checkbox
                    checked={languageId.includes(language.id)}
                    onChange={() =>
                      setLanguageId((prev) =>
                        prev.includes(language.id) &&
                        typeof language.id === "number"
                          ? prev.filter((id) => id !== language.id)
                          : typeof language.id === "number"
                          ? [...prev, language.id]
                          : prev
                      )
                    }
                    name={language.language_name}
                  />
                }
                label={language.language_name}
              />
            ))}
          </Grid>
          <Grid>
            <Button
              variant="contained"
              className={classes.valider}
              onClick={handleSaveChanges}
            >
              Valider
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default RegisteredInformations;
