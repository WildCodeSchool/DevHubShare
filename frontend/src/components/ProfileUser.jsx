/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Button } from "@material-ui/core";
import axios from "axios";
import Informations from "./profilComponents/Informations";
import UserImage from "./UserImage";
import TexteLibre from "./profilComponents/TexteLibre";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  retour: {
    display: "flex",
    alignItems: "flex-start",
  },
  card: {
    background: "#82BE00",
    marginBottom: theme.spacing(2),
  },
  userImageContainer: {
    marginBottom: theme.spacing(5),
  },
  texteLibreContainer: {
    background: "#FFF",
    borderRadius: 5,
    marginBottom: theme.spacing(2),
  },
  valider: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(1),
  },
  gridCard: {
    display: "grid",
    alignItems: "center",
  },
}));

// const userProfile = {
//   pseudo: "jijy",
//   nom: "Jimmy",
//   prenom: "Logan",
//   email: "jimmy.logan@mail.com",
//   poste: "agent de maintenance",
//   githubPage: "https://github.com/jimmylogan",
//   linkedin: "https://linkedin/jimmylogan",
// };

function UserProfile() {
  const [user, setUser] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get("http://localhost:5000/users/1").then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.retour}>
        Retour
      </Button>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <div className={classes.userImageContainer}>
            <UserImage size="5rem" backgroundColor="grey" />
          </div>
          <Informations
            pseudo={user.pseudo}
            nom={user.nom}
            prenom={user.prenom}
            email={user.email}
            poste={user.poste}
            githubPage={user.githubPage}
            linkedin={user.linkedin}
          />
          <Grid item xs={12} className={classes.valider}>
            <Button variant="contained">Valider</Button>
          </Grid>
        </Grid>
        <Grid className={classes.gridCard} item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.texteLibreContainer}>
                <TexteLibre />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
