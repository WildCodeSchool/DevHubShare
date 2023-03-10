import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import LogoSNCF from "./images/logo_sncf.png";
import NotificationImg from "./images/bellNotification.png";

const Links = styled(Link)({
  color: "#0088CE",
  textDecoration: "none",
});

const Button = styled("button")({
  border: "none",
  background: "none",
  color: "#0088CE",
});

const Logo = styled("img")({
  width: "45%",
});

const Notification = styled("img")({
  width: "12%",
  // marginRight: "2%",
});

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          borderBottom: "solid 1px #D7D7D7",
        }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Logo src={LogoSNCF} alt="logo" />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h4"
                // component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "4vw",
                  color: "#009AA6",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                DevHubSHARE
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button color="inherit">
                <Typography variant="h6" fontSize="1.2vw">
                  <Links to="/connexion">Connexion</Links>
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography variant="h6" fontSize="1.2vw">
                  <Links to="/mon-compte">Mon compte</Links>
                </Typography>
              </Button>
              <Notification src={NotificationImg} alt="notificationBell" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
