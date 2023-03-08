/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BasicModal from "./BasicModal";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// async function connect(email, password) {
//   const headers = new Headers();
//   headers.append("Content-Type", "application/json");

//   const options = {
//     method: "POST",
//     mode: "cors",
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//     headers,
//   };

//   const response = await fetch("http://localhost:5000/login", options);
//   return response.json();
// }

// // eslint-disable-next-line no-undef
// const tokens = await connect(email, password);
// localStorage.setItem("tokens", JSON.stringify(tokens));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label=" Adresse Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Se souvenir de moi"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Connexion
          </Button>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={6}>
              <BasicModal />
            </Grid>
            <Grid item xs={6}>
              <Button href="/inscription">Pas de compte? S'inscrire</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
