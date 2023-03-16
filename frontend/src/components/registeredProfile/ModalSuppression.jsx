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
  const [deletedUser, setDeletedUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setEmail("");
    setOpen(false);
    setErrorMessage("");
  };
  const handleConfirm = () => {
    if (!email) {
      setErrorMessage("Veuillez entrer votre adresse e-mail");
      return;
    }
    const token = localStorage.getItem("token");

    axios
      .delete(`http://localhost:5000/users/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setDeletedUser(response.data);
        setErrorMessage("");
        console.info("Compte supprimé avec succès!", deletedUser);
        handleClose();
        console.info("token:", token);
        console.info("email", email);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(
          "Une erreur s'est produite lors de la suppression du compte"
        );
      });
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
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
            Pour supprimer votre compte, veuillez confirmer votre adresse email.
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
            error={!!errorMessage}
            helperText={errorMessage}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleConfirm}>Confirmer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
