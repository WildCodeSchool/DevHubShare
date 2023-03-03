import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Icon } from "@iconify/react";
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
  const [selectOpen, setSelectOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showSidebar, setShowSidebar] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isSmallScreen) {
      setShowButton(true);
      setShowSidebar(false);
    } else {
      setShowButton(false);
      setShowSidebar(true);
    }
  }, [isSmallScreen]);

  const clickButton = () => {
    setShowSidebar(!showSidebar);
  };

  const handleClose = () => {
    setSelectOpen(false);
  };

  const handleOpen = () => {
    setSelectOpen(true);
  };

  return (
    <div className="containerSide">
      <div
        className="sidebar"
        style={{ display: showSidebar ? "flex" : "none" }}
      >
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
      <div
        className="button-wrapper"
        style={{ display: showButton ? "flex" : "none" }}
      >
        <Icon
          icon="eva:arrow-ios-forward-outline"
          color="#333"
          width="35"
          onClick={clickButton}
        />
      </div>
    </div>
  );
}
