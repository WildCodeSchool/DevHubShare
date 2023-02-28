import * as React from "react";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import LogoSNCF from "../assets/LOGO_SNCF_GROUPE_RVB_small.png";

const preventDefault = (event) => event.preventDefault();

const Logo = styled("img")({
  width: "4rem",
  marginLeft: "0.3rem",
});

const FooterLink = styled(Link)({
  marginRight: "1rem",
  marginLeft: "1rem",
});

export default function Footer() {
  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
        backgroundColor: "#333333",
        color: "#FFFFFF",
        py: 0.1,
      }}
      onClick={preventDefault}
    >
      <Grid container justifyContent="space-around">
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Logo src={LogoSNCF} alt="logo" />
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FooterLink
            href="#"
            sx={{
              textDecoration: "none",
              color: "#FFFFFF",
              "&:hover": {
                color: "#B9B9B9",
              },
            }}
          >
            DevHub Connect {">"}
          </FooterLink>
          <FooterLink
            href="#"
            sx={{
              textDecoration: "none",
              color: "#FFFFFF",
              "&:hover": {
                color: "#B9B9B9",
              },
            }}
          >
            DevHub Project {">"}
          </FooterLink>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.5rem",
              marginRight: "0.3rem",
            }}
          >
            <em>
              WCS Marseille 2023_Créé par Nelly, Karine, Sandra et Geoffroy
            </em>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}