/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Button } from "@material-ui/core";
import RegisteredInformations from "./RegisteredInformations";
import UserTextArea from "./UserTextArea";
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

function UserProfileRegistered() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <RegisteredInformations />
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
            <ModalSuppression />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfileRegistered;
