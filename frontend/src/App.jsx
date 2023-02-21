import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AfterSignIn from "./pages/AfterSignIn";
import ProfileUser from "./pages/ProfileUser";
import ProfileUserRegistered from "./pages/ProfileUserRegistered";
import ProfileMember from "./pages/ProfileMember";
import LanguageSelectFeed from "./pages/LanguageSelectFeed";
import MembersList from "./pages/MembersList";
import Resources from "./pages/Resources";
import MyPosts from "./pages/MyPosts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Accueil" element={<AfterSignIn />} />
        <Route path="/CreationCompte" element={<ProfileUser />} />
        <Route path="/MonCompte" element={<ProfileUserRegistered />} />
        <Route path="/ProfilMembre" element={<ProfileMember />} />
        <Route path="/AccueilFiltre" element={<LanguageSelectFeed />} />
        <Route path="/ListeMembres" element={<MembersList />} />
        <Route path="/Ressources" element={<Resources />} />
        <Route path="/MesPosts" element={<MyPosts />} />
      </Routes>
    </div>
  );
}

export default App;
