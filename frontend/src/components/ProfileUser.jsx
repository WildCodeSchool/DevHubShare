import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Button, Box, Grid } from "@mui/material";
import Avatar from "./profilComponents/Avatar";
import TextArea from "./profilComponents/TextArea";
import SelectLanguages from "./SelectLanguages";

export default function ProfileUser() {
  return (
    <Container>
      <Box component="span" m={1}>
        <Grid container spacing={35}>
          <Grid item xs={1}>
            <Button>Retour</Button>
          </Grid>
          <Grid item xs={6}>
            <Avatar />
          </Grid>
        </Grid>
      </Box>
      <Box component="span" m={1}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <form>
            <TextField id="outlined-basic" label="Pseudo" variant="outlined" />
          </form>
          <Grid marginTop={2}>
            <form>
              <TextField id="outlined-basic" label="Nom" variant="outlined" />
            </form>
          </Grid>
          <Grid marginTop={2}>
            <form>
              <TextField
                id="outlined-basic"
                label="Prénom"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid marginTop={2}>
            <form>
              <TextField
                id="outlined-basic"
                label="Email*"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid marginTop={2}>
            <form>
              <TextField
                id="outlined-basic"
                label="Poste actuel"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid marginTop={2}>
            <form>
              <TextField
                id="outlined-basic"
                label="Github"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid marginTop={2}>
            <form>
              <TextField
                id="outlined-basic"
                label="Linkedin"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid marginTop={2}>
            <SelectLanguages />
          </Grid>
          <Grid marginLeft={40}>
            <Button variant="contained">Valider</Button>
          </Grid>
          <TextArea />
          <Box marginTop={5}>* Champs obligatoire</Box>
        </Grid>
      </Box>
    </Container>
  );
}
