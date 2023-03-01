import * as React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
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
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

export default function SwipeableSidebar() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [state, setState] = React.useState({
    // eslint-disable-next-line no-unneeded-ternary
    left: isSmallScreen ? false : true,
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
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
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

            <ListItem key="Fil de discussion" disablePadding>
              <ListItemButton onClick={handleOpen}>
                <ListItemText
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    mt: "35%",
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

            {SidebarData.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText
                    sx={{
                      color: "#FFFFFF",
                      textAlign: "center",
                      mt: "35%",
                    }}
                    primary={item.title}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </Box>
  );

  return (
    <div>
      <Box>
        <Button
          onClick={toggleDrawer("left", true)}
          sx={{
            color: "#009AA6",
            position: "relative",
            bottom: "45rem",
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
        // variant={isSmallScreen ? "temporary" : "permanent"}
        sx={{
          position: "static",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            boxSizing: "border-box",
            backgroundColor: "#009AA6",
            position: "static",
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
