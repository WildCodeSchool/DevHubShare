/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Button } from "@material-ui/core";
import Informations from "./profilComponents/Informations";
import UserImage from "./profilComponents/UserImage";
import TexteLibre from "./profilComponents/TexteLibre";
import SendMessage from "./profilComponents/SendMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    background: "#009aa3",
    marginBottom: theme.spacing(2),
  },
  userImageContainer: {
    marginBottom: theme.spacing(5),
  },
  texteLibreContainer: {
    background: "#FFF",
    marginBottom: theme.spacing(2),
  },
  sendMessage: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(1),
  },
  retour: {
    display: "flex",
    alignItems: "flex-start",
  },
}));

const userProfile = {
  pseudo: "joe",
  nom: "Jean",
  prenom: "Dupont",
  email: "jean.dupont@mail.com",
  poste: "agent de maintenance",
  githubPage: "https://github.com/jeandupont",
  linkedin: "https://linkedin/jeandupont",
};

function UserProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.retour}>
        Retour
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className={classes.userImageContainer}>
            <UserImage />
          </div>
          <Informations
            pseudo={userProfile.pseudo}
            nom={userProfile.nom}
            prenom={userProfile.prenom}
            email={userProfile.email}
            poste={userProfile.poste}
            githubPage={userProfile.githubPage}
            linkedin={userProfile.linkedin}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.texteLibreContainer}>
                <TexteLibre />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.sendMessage}>
          <SendMessage
            firstName={userProfile.firstName}
            lastName={userProfile.lastName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
