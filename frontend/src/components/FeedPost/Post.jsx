import React from "react";
import { Grid, Typography, Container, TextField, Avatar } from "@mui/material";
// import UserImage from "../profilComponents/UserImage";

export default function Post() {
  return (
    <Container
      maxWidth="100%"
      maxHeight="100%"
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        padding: "0%",
        mb: "4%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb="1%"
        width="100%"
      >
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            src="/broken-image.jpg"
            sx={{
              width: "64%",
              height: "46%",
              borderRadius: "50%",
            }}
          />
          {/* <UserImage
            sx={{ width: "20%", height: "20%", borderRadius: "50%" }}
          /> */}
        </Grid>
        <Grid item xs={10}>
          <Grid container direction="column" spacing={2} sx={{ width: "100%" }}>
            <Grid item>
              <Typography color="#0088CE" fontWeight="bold">
                TAG
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                defaultValue=""
                variant="standard"
                size="small"
                sx={{
                  borderRadius: 2,
                  width: "100%",
                  borderColorHover: "black",
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                multiline
                rows={1}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  border: "solid 2px #82BE00",
                  backgroundColor: "white",
                  boxSizing: "border-box",
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                multiline
                rows={1}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  border: "solid 2px #82BE00",
                  backgroundColor: "white",
                  boxSizing: "border-box",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
