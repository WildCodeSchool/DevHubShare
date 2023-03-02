import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" style={{ color: "black" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "black" }}>
        La page que vous cherchez n'existe pas.
      </Typography>
      <Button variant="contained" href="/">
        Retour à l'accueil
      </Button>
    </Box>
  );
}
