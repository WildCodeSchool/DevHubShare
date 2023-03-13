import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Stack, Container, Typography, Select, MenuItem } from "@mui/material";
import ProfileCard from "./ProfileCard";

export default function ProfileMembers() {
  const [languages, setLanguages] = useState([]);
  const [languageNameSelected, setLanguageNameSelected] = useState("");
  const [languageSelected, setLanguageSelected] = useState([]);
  const [users, setUsers] = useState([]);
  const [languagesUsers, setLanguagesUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    };
    const getUsersHasLanguages = async () => {
      const response = await axios.get(
        "http://localhost:5000/user_has_language"
      );
      setLanguagesUsers(response.data);
    };
    getUsers();
    getUsersHasLanguages();
  }, []);

  useEffect(() => {
    const handleLanguage = async () => {
      const languageName = languageNameSelected;
      const response = await axios.get("http://localhost:5000/languages");
      const allLanguages = response.data;
      const selectLanguage = allLanguages.filter(
        (language) => language.language_name === languageName
      );
      setLanguages(response.data);
      setLanguageSelected(selectLanguage);
    };
    handleLanguage();
  }, [languageNameSelected]);

  const handleLanguageChange = (event) => {
    setLanguageNameSelected(event.target.value);
  };
  const usersFiltered = () => {
    if (languageSelected.length > 0) {
      const languageId = languageSelected[0].id;
      const languageIdUsers = languagesUsers.filter(
        (language) => language.language_id === languageId
      );
      const userIds = languageIdUsers.map((language) => language.user_id);
      return users.filter((user) => userIds.includes(user.id));
    }
    return users;
  };

  const navigate = useNavigate();
  const onClickUser = (userIdSelected) => {
    navigate(`/profil-membre/${userIdSelected}`);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        mt: 3,
        mb: 3,
      }}
    >
      <Typography variant="h4" sx={{ color: "#009AA6", fontWeight: "medium" }}>
        <em>Profil des membres {languageNameSelected}</em>
      </Typography>
      <Stack
        spacing={2}
        sx={{
          mt: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          boxShadow: "10px 10px 15px 2px #D7D7D7",
          backgroundColor: "#009AA6",
          width: "100%",
        }}
      >
        <Select
          id="language"
          onChange={handleLanguageChange}
          displayEmpty
          renderValue={(value) => value || "Sélectionner un langage"}
          size="small"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#009AA6",
            borderRadius: 1,
            alignSelf: "flex-end",
            width: "30%",
            mt: 1,
            mb: 1,
          }}
        >
          {languages?.map((language) => (
            <MenuItem
              key={language.id}
              value={language.language_name}
              sx={{ color: "#009AA6" }}
            >
              {language.language_name}
            </MenuItem>
          ))}
        </Select>
        {usersFiltered()?.map((user) => (
          <ProfileCard
            key={user.id}
            picture={user.picture}
            pseudo={user.pseudo}
            email={user.email}
            userText={user.user_text}
            onClickUser={() => onClickUser(user.id)}
          />
        ))}
      </Stack>
    </Container>
  );
}
