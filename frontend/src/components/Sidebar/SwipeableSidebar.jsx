import * as React from "react";
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
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const drawerWidth = "15rem";

const theme = createTheme({
  typography: {
    fontSize: 19,
  },
  spacing: 1,
});

const themeSelect = createTheme({
  typography: {
    fontSize: 14,
  },
});

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
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <ThemeProvider theme={theme}>
          {/* <Toolbar /> */}
          {/* <Box> */}
          <List sx={{ mx: "auto" }}>
            <ListItem disablePadding sx={{ mt: 70 }}>
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

            <ListItem key="Fil de discussion" disablePadding sx={{ mt: 50 }}>
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
              }}
            >
              <Select
                sx={{
                  color: "#009AA6",
                  height: 30,
                  borderRadius: 2,
                  fontSize: 14,
                  backgroundColor: "white",
                  pr: 10,
                }}
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                displayEmpty
                // eslint-disable-next-line prettier/prettier
                renderValue={(value) => value || "Sélection du langage"}
              >
                <ThemeProvider theme={themeSelect}>
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
                </ThemeProvider>
              </Select>
            </FormControl>

            {SidebarData.map((item) => (
              <ListItem key={item.title} disablePadding sx={{ mt: 50 }}>
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
          {/* </Box> */}
        </ThemeProvider>
      </Stack>
    </Box>
  );

  return (
    <div>
      <Box sx={{ mt: "38%" }}>
        <Button
          onClick={toggleDrawer("left", true)}
          sx={{
            color: "#009AA6",
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        // variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#009AA6",
          },
          [`& .MuiModal-backdrop`]: {
            width: 0,
          },
        }}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
