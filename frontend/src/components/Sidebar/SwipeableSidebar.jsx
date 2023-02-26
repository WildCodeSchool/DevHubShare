import * as React from "react";
import "./swipeableSidebar.css";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

export default function SwipeableSidebar() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    // eslint-disable-next-line no-unneeded-ternary
    left: window.innerWidth < 800 ? false : true,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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

  const toggleDrawer = (anchor, opening) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: opening });
  };

  const list = (anchor) => (
    <Box
      className="sidebar"
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="sidebarList">
        <ListItem disablePadding className="sidebarListItem">
          <ListItemButton component={Link} to="/creer-post">
            <ListItemText className="sidebarListItemText" primary="Accueil" />
          </ListItemButton>
        </ListItem>
        <ListItem
          key="Fil de discussion"
          disablePadding
          className="sidebarListItem"
        >
          <ListItemButton onClick={handleOpen}>
            <ListItemText
              className="sidebarListItemText"
              primary="Fil de discussion"
            />
          </ListItemButton>
        </ListItem>

        <FormControl className="sidebarFormControl">
          <Select
            className="sidebarSelect"
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            displayEmpty
            // eslint-disable-next-line prettier/prettier
            renderValue={(value) => value || "Sélection du langage"}
          >
            {langages.map((langage) => (
              <MenuItem
                className="sidebarMenuItem"
                key={langage}
                component={Link}
                to="/fil-de-discussion"
              >
                {langage}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {SidebarData.map((item) => (
          <ListItem key={item.title} disablePadding className="sidebarListItem">
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <ArrowForwardIosIcon />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
