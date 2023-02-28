import React from "react";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

export default function Post() {
  //   const [post, setPost] = useState(post);
  //   const [languageSelected, setLanguageSelected] = useState("");
  return (
    <Container
      fixed
      sx={{
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          width: "20%",
          height: "80%",
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          padding: "5%",
          flexShrink: 0,
          flexGrow: 0,
        }}
      >
        <Avatar
          src="/broken-image.jpg"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "80%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "2%",
          borderRadius: 2,
          padding: "2%",
        }}
      >
        <Typography color="#0088CE">TAG</Typography>
        <TextField
          defaultValue=""
          variant="standard"
          size="small"
          sx={{
            borderRadius: 2,
            width: "100%",
            marginBottom: "5%",
            borderColorHover: "black",
          }}
        />
        <TextField
          value=""
          variant="filled"
          size="small"
          sx={{
            marginBottom: "5%",
            borderRadius: 2,
            width: "100%",
          }}
        />
        <TextField
          label="Response"
          multiline
          rows={2}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 2,
            border: "solid 2px #82BE00",
            backgroundColor: "white",
            boxSizing: "border-box",
          }}
        />
      </Box>
    </Container>
  );
}
