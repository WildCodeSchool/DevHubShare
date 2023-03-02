import React from "react";
import { TableFooter, TableRow, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import LogoSNCF from "../assets/LOGO_SNCF_GROUPE_RVB_small.png";

const Logo = styled("img")({
  width: "4rem",
  marginLeft: "0.3rem",
});

const FooterLink = styled(Link)({
  marginRight: "1rem",
  marginLeft: "1rem",
  textDecoration: "none",
  color: "#FFFFFF",
  "&:hover": {
    color: "#B9B9B9",
  },
});

const FooterContainer = styled(TableFooter)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#333333",
  color: "#FFFFFF",
});

export default function Footer() {
  return (
    <FooterContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "100%",
        }}
      >
        <TableRow sx={{ alignSelf: "center", width: "20%" }}>
          <Logo src={LogoSNCF} alt="logo" />
        </TableRow>
        <TableRow
          sx={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            width: "40%",
          }}
        >
          <FooterLink href="#">DevHub Connect {">"}</FooterLink>
          <FooterLink href="#">DevHub Project {">"}</FooterLink>
        </TableRow>
        <TableRow sx={{ alignSelf: "flex-end", width: "20%" }}>
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
        </TableRow>
      </div>
    </FooterContainer>
  );
}
