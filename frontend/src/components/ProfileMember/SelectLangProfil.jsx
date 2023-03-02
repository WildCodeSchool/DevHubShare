/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SelectLangProfil() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={selectLanguage}
      sx={{ width: 200, backgroundColor: "#FFF", borderRadius: 1, padding: 1 }}
      fullWidth
      renderInput={(params) => <TextField {...params} label="language" />}
    />
  );
}

const selectLanguage = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JAVASCRIPT" },
  { label: "PYTHON" },
];
