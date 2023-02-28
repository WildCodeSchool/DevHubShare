/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 5,
    marginBottom: theme.spacing(2),
  },
}));

function TexteLibre() {
  const classes = useStyles();

  const texte = {
    texte:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus ex quis ante ullamcorper, vitae malesuada elit lobortis. Sed faucibus ex quis ante ullamcorper, vitae malesuada elit lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  };

  return (
    <div className={classes.root}>
      <h3>Texte libre</h3>
      <List>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Texte"
            value={texte.texte}
            multiline
            rows={8}
            fullWidth
            disabled
          />
        </Grid>
      </List>
    </div>
  );
}

export default TexteLibre;
