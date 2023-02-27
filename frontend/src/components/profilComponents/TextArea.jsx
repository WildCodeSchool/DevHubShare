import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MaxHeightTextarea() {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Texte libre"
        variant="outlined"
        rows={5}
        maxRows={10}
      />
    </Box>
  );
}
