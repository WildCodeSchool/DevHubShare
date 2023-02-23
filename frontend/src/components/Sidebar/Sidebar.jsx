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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const drawerWidth = 240;

const theme = createTheme({
  typography: {
    fontSize: 20,
  },
});

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
      <ThemeProvider theme={theme}>
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/creer-post">
                <ListItemText
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
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
                  textAlign: "center",
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
                height: 30,
                borderRadius: 2,
                fontSize: 16,
              }}
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              displayEmpty
              // eslint-disable-next-line prettier/prettier
              renderValue={(value) => value || "Sélection du langage"}
              inputProps={{ "aria-label": "Without label" }}
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

          <List>
            {SidebarData.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText
                    sx={{
                      color: "#FFFFFF",
                      textAlign: "center",
                    }}
                    primary={item.title}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </ThemeProvider>
    </Drawer>
  );
}
