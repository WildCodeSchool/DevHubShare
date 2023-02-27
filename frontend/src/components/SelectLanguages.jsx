import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      // eslint-disable-next-line no-use-before-define
      options={languages}
      sx={{ width: 300 }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} label="Language" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const languages = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JAVASCRIPT" },
  { label: "PYTHON" },
];
