/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [deletedUser, setDeletedUser] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setEmail("");
    setOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/users?email=${email}`)
      .then((response) => {
        setDeletedUser(response.data);
        handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        Supprimer votre compte
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ATTENTION vous allez supprimer votre compte</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pour supprimer votre compte, veuillez confirmer en entrant votre
            adresse email.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={handleEmailChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleDelete}>Confirmer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}