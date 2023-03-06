import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Icon } from "@iconify/react";
import { NavLink, Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./sidebarStyle.css";

export default function Sidebar() {
  const [selectOpen, setSelectOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showSidebar, setShowSidebar] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const [sideLanguages, setSideLanguages] = useState([]);

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
                  component={Link}
                  to="/fil-de-discussion"
                >
                  {langage.language_name}
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
