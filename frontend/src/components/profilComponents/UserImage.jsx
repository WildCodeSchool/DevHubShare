/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
// eslint-disable-next-line
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: "auto",
    fontSize: theme.spacing(18),
    backgroundColor: theme.palette.primary.main,
  },
}));

function UserImage(props) {
  const classes = useStyles();

  return (
    // eslint-disable-next-line
    <Avatar className={classes.avatar} src={props.src}>
      {UserImage.src ? null : <PersonIcon />}
    </Avatar>
  );
}

export default UserImage;
