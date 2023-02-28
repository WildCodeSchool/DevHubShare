import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const palette = {
  primaryBlue: { main: "#0088CE" },
  blueDuck: { main: "#009AA6" },
  greenApple: { main: "#82BE00" },
  carbonBlack: { main: "#333333" },

  backgroundColor: { main: "#FFFFFF" },

  headerLink: { main: "#0088CE", Hover: "#" },
  footerLink: { main: "#FFFFFF", Hover: "#B9B9B9" },
};

const typography = {
  footerH5: { color: "#009AA6", fontWeight: "bold", fontStyle: "italic" },
};

const button = {
  footerButton: {
    backgroundColor: "#FFFFFF",
    color: "#009AA6",
    "&:hover": { backgroundColor: "#FFFFFF" },
    fontSize: 8,
    fontWeight: "bold",
    maxWidth: "15%",
    alignSelf: "flex-end",
    marginRight: "6%",
  },
};

const style = {
  signInStyle: {
    paper: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: 1,
      backgroundColor: "",
    },
    form: {
      width: "100%",
      marginTop: 1,
    },
    submit: {
      margin: (3, 0, 2),
    },
  },
};

const theme = createTheme({ breakpoints, palette, typography, button, style });

export default theme;
