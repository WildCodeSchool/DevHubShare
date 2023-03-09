/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Grid, TextField } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 5,
    marginBottom: theme.spacing(2),
  },
}));

function TexteLibre() {
  const [textArea, setTextArea] = useState("");
  const classes = useStyles();

  useEffect(() => {
    axios.get("http://localhost:5000/users/1").then((response) => {
      setTextArea(response.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <h3>Texte libre</h3>
      <List>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            value={textArea.user_text}
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
