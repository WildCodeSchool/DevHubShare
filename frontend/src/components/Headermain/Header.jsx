import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
  width: "8%",
});

const Notification = styled("img")({
  width: "2%",
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
          <Logo src={LogoSNCF} alt="logo" />
          <Typography
            variant="h4"
            // component="div"
            sx={{ flexGrow: 1 }}
            color="#009AA6"
          >
            DevHubSHARE
          </Typography>

          <Button color="inherit">
            <Typography variant="h6">
              <Links to="/SignIn">Mon compte</Links>
            </Typography>
          </Button>
          <Notification src={NotificationImg} alt="notificationBell" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
