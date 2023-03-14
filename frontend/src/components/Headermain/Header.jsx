import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Grid, useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
// import LogoSNCF from "./images/logo_sncf.png";
import LogoSNCF from "./images/DevHubSHARE_logo.png";
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
  maxWidth: "7rem",
  minWidth: "6rem",
});

const Notification = styled("img")({
  width: "1.5rem",
  minHeight: "1.5rem",
});

export default function NavBar() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  return (
    <Container
      position="fixed"
      sx={{
        maxHeight: "96px",
        alignItems: "center",
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "#FFFFFF",
          borderBottom: "solid 1px #D7D7D7",
          flexWrap: "nowrap",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ padding: 0 }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xl={2}
              lg={2}
              md={2}
              sm={2.5}
              xs={2.6}
              sx={{
                position: isMobile && "none",
              }}
            >
              <Logo src={LogoSNCF} alt="logo" />
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontSize: isTablet ? "250%" : "400%",
                  color: "#009AA6",
                }}
              >
                DevHubSHARE
              </Typography>
            </Grid>
            <Grid
              container
              xl={2}
              lg={2}
              md={2}
              sm={3}
              xs={2.6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button color="inherit">
                <Typography variant="h6">
                  <Links to="/connexion">Connexion</Links>
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography variant="h6">
                  <Links to="/mon-compte">Mon compte</Links>
                </Typography>
              </Button>
              <Notification src={NotificationImg} alt="notificationBell" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
