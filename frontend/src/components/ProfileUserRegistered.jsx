/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Button } from "@material-ui/core";
import Informations from "./profilComponents/Informations";
import UserImage from "./UserImage";
import UserTextArea from "./registeredProfile/UserTextArea";
import ModalSuppression from "./ModalSuppression";

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

const userProfile = {
  pseudo: "jijy",
  nom: "Jimmy",
  prenom: "Logan",
  email: "jimmy.logan@mail.com",
  poste: "agent de maintenance",
  githubPage: "https://github.com/jimmylogan",
  linkedin: "https://linkedin/jimmylogan",
};

function UserProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.retour}>
        Retour
      </Button>
      <Grid container spacing={1}>
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
          <Grid item xs={12} className={classes.valider}>
            <Button variant="contained">Valider</Button>
          </Grid>
        </Grid>
        <Grid className={classes.gridCard} item xs={12} md={6}>
          <Grid item xs={12} className={classes.valider}>
            <Button variant="contained">Déconnecter</Button>
          </Grid>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.texteLibreContainer}>
                <UserTextArea />
              </div>
            </CardContent>
          </Card>
          <Grid item xs={12} className={classes.valider}>
            <Button variant="text" href="/creation-compte">
              Modifier le profile
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.valider}>
            <ModalSuppression />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
