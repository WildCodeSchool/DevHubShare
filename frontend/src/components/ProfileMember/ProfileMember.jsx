/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InformationsMembers from "./InformationsMember";
import SelectLangProfil from "./SelectLangProfil";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#009aa3",
    borderRadius: 5,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  titre: {
    textAlign: "center",
  },
  select: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
}));

const userProfile = {
  pseudo: "jimy",
  email: "jimmy.logan@mail.com",
  poste: "agent de maintenance",
};

function ProfileMember() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.card}>
        <Grid>
          <h2 className={classes.titre}>Membres</h2>
        </Grid>
        <Grid className={classes.select}>
          <Grid item xs={6}>
            <SelectLangProfil />
          </Grid>
        </Grid>
      </div>
      <div className={classes.card}>
        <Grid>
          <InformationsMembers
            pseudo={userProfile.pseudo}
            email={userProfile.email}
          />
          <InformationsMembers
            pseudo={userProfile.pseudo}
            email={userProfile.email}
          />
          <InformationsMembers
            pseudo={userProfile.pseudo}
            email={userProfile.email}
          />
          <InformationsMembers
            pseudo={userProfile.pseudo}
            email={userProfile.email}
          />
          <InformationsMembers
            pseudo={userProfile.pseudo}
            email={userProfile.email}
          />
          <InformationsMembers
            pseudo={userProfile.pseudo}
            email={userProfile.email}
          />
          <InformationsMembers
            pseudo={userProfile.pseudo}
            email={userProfile.email}
          />
          <InformationsMembers
            pseudo={userProfile.pseudo}
            email={userProfile.email}
          />
        </Grid>
      </div>
    </>
  );
}

export default ProfileMember;
