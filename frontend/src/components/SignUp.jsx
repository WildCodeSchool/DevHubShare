/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    axios.get("http://localhost:5000/users").then((response) => {
      setUserData(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/connexion");
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
                Langages préférés
              </Typography>
              {sideLanguages.map((language) => (
                <FormControlLabel
                  key={language.id}
                  control={
                    <Checkbox
                      checked={languageId.includes(language.id)}
                      onChange={() => {
                        if (typeof language.id === "number") {
                          if (languageId.includes(language.id)) {
                            setLanguageId((prev) =>
                              prev.filter((id) => id !== language.id)
                            );
                          } else {
                            setLanguageId((prev) => [...prev, language.id]);
                          }
                        } else {
                          setLanguageId((prev) => prev);
                        }
                      }}
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
