/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

function TexteLibre() {
  const classes = useStyles();

  const texte = {
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus ex quis ante ullamcorper, vitae malesuada elit lobortis. Sed faucibus ex quis ante ullamcorper, vitae malesuada elit lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  };

  return (
    <div className={classes.root}>
      <h3>Texte libre</h3>
      <List>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            label="Biography"
            value={texte.biography}
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
