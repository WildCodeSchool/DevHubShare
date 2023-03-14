import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SignOutButton() {
  const navigate = useNavigate();

  const handleSignOut = (event) => {
    event.preventDefault();
    navigate("/connexion");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={handleSignOut}
        variant="contained"
        sx={{
          backgroundColor: "#009AA6",
          color: "#ffff",
          "&:hover": {
            backgroundColor: "#5dacb2",
          },
        }}
      >
        Déconnexion
      </Button>
    </Stack>
  );
}
