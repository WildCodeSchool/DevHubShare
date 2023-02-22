import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const langages = ["Javascript", "PHP", "Python", "Java", "HTML", "CSS"];

  return (
    <Drawer
      className="fullContainer"
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#009AA6",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem key="Accueil" disablePadding>
            <ListItemButton component={Link} to="/creer-post">
              <ListItemText
                sx={{
                  color: "#FFFFFF",
                }}
                primary="Accueil"
              />
            </ListItemButton>
          </ListItem>
        </List>

        <ListItem key="Fil de discussion" disablePadding>
          <ListItemButton onClick={handleOpen}>
            <ListItemText
              sx={{
                color: "#FFFFFF",
              }}
              primary="Fil de discussion"
            />
          </ListItemButton>
        </ListItem>

        <FormControl
          sx={{
            m: 1,
            minWidth: 130,
            backgroundColor: "white",
          }}
        >
          <Select
            sx={{
              color: "#009AA6",
            }}
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem>Selection du langage</MenuItem>
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

        <List>
          {SidebarData.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemText
                  sx={{
                    color: "#FFFFFF",
                  }}
                  primary={item.title}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
