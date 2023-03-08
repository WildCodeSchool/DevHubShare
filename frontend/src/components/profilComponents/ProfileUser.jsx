/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Button } from "@material-ui/core";
import Informations from "./Informations";
import UserImage from "../UserImage";
import TexteLibre from "./TexteLibre";

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
            <UserImage size="5rem" backgroundColor="grey" />
          </div>
          <Informations />
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
