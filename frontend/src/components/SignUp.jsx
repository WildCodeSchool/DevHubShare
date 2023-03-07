/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormControlLabel, Checkbox } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [userData, setUserData] = useState([]);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [languageId, setLanguageId] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [sideLanguages, setSideLanguages] = useState([]);
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
    axios.get("http://localhost:5000/users").then((response) => {
      setUserData(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      pseudo,
      email,
      password,
      language_id: languageId,
    };

    axios.post("http://localhost:5000/users", newUser).then((response) => {
      setUserData([...userData, response.data]);
      setPseudo("");
      setEmail("");
      setPassword("");
      setLanguageId([selectedLanguage]);
      setSelectedLanguage("");
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inscription
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="pseudo"
                label="Pseudo"
                type="text"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adresse mail"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Language préferer
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Inscription
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/connexion" variant="body2">
                Déja inscrit ? Se connecter
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
