import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectLanguage() {
  const [selectOpen, setSelectOpen] = useState(false);
  const [sideLanguages, setSideLanguages] = useState([]);

  const handleClose = () => {
    setSelectOpen(false);
  };

  const handleOpen = () => {
    setSelectOpen(true);
  };

  const getLanguages = () => {
    axios
      .get("http://localhost:5020/languages")
      .then((response) => response.data)
      .then((data) => {
        setSideLanguages(data);
        console.info("langages api", data);
      });
  };

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    // <Autocomplete
    //   disablePortal
    //   id="combo-box-demo"
    //   // eslint-disable-next-line no-use-before-define
    //   options={sideLanguages}
    //   sx={{ backgroundColor: "#FFF", borderRadius: 1 }}
    //   fullWidth
    //   // eslint-disable-next-line react/jsx-props-no-spreading
    //   renderInput={(params) => <TextField {...params} label="Language" />}
    // />
    <FormControl
      sx={{
        m: 1,
        minWidth: 130,
      }}
    >
      <Select
        sx={{
          color: "#009AA6",
          height: 30,
          borderRadius: 1,
          fontSize: 14,
          backgroundColor: "white",
        }}
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={selectOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        displayEmpty
        // eslint-disable-next-line prettier/prettier
        renderValue={(value) => value || "Sélection du langage"}
      >
        {sideLanguages.map((langage) => (
          <MenuItem
            sx={{
              color: "#009AA6",
            }}
            key={langage.id}
            value={langage.language_name}
          >
            {langage.language_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

// const languages = [
//   { label: "HTML" },
//   { label: "CSS" },
//   { label: "JAVASCRIPT" },
//   { label: "PYTHON" },
// ];
