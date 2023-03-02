import * as React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { NavLink, Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./sidebarStyle.css";

const langages = [
  "Tous langages",
  "Javascript",
  "PHP",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "Autre",
];

export default function Sidebar() {
  const [selectOpen, setSelectOpen] = React.useState(false);

  const handleClose = () => {
    setSelectOpen(false);
  };

  const handleOpen = () => {
    setSelectOpen(true);
  };

  return (
    <div className="containerSide">
      <div className="sidebar">
        <div className="topSection">
          <NavLink to="/" className="link">
            <div className="link_text">Accueil</div>
          </NavLink>
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
                borderRadius: 2,
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
              {langages.map((langage) => (
                <MenuItem
                  sx={{
                    color: "#009AA6",
                  }}
                  key={langage}
                  component={Link}
                  to="/fil-de-discussion"
                >
                  {langage}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {SidebarData.map((item) => {
            return (
              <NavLink to={item.path} key={item.kName} className="link">
                <div className="link_text">{item.title}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
