import * as React from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import image from "./images/FondImg.jpg";

const Links = styled(Link)({
  color: "#0088CE",
});

export default function HomePage() {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${image})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          height: "90%",
          minHeight: "fit-content",
          width: "70%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 5px #009AA6",
          borderRadius: "10px",
          marginTop: "5vh",
          marginBottom: "5vh",
        }}
      >
        <Typography
          variant="body1"
          component="h1"
          sx={{
            maxWidth: "100%",
            textAlign: "center",
            wordWrap: "break-word",
            color: "white",
          }}
        >
          <p>
            Bienvenue sur DevHubSHARE, la plateforme dédiée aux développeurs
            débutants et confirmés. Notre objectif est de créer un espace de
            communication et d'échange où les développeurs de tous niveaux
            peuvent se connecter et partager leurs connaissances.
          </p>
          <p>
            Vous cherchez des réponses à vos questions sur le développement
            informatique, les outils et les langages de programmation ? Ou
            peut-être souhaitez-vous partager vos connaissances et expériences
            avec d'autres développeurs ? N'hésitez pas à vous inscrire pour
            rejoindre notre communauté active et engagée de développeurs
            passionnés.
          </p>
          <p>
            Chez DevHubSHARE, nous sommes convaincus que le partage de
            connaissances est essentiel pour réussir dans le domaine du
            développement informatique.
          </p>
        </Typography>
      </Box>
      <Typography sx={{ color: "white" }}>
        Rejoignez-nous dès maintenant pour profiter des avantages d'une
        communauté collaborative et pour développer vos compétences en
        programmation.
      </Typography>
      <Typography sx={{ color: "#0088CE" }}>
        <Links to="/connexion" sx={{ color: "#0088CE" }}>
          Je m'inscris
        </Links>
      </Typography>
    </Container>
  );
}
