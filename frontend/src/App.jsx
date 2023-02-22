import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AfterSignIn from "./pages/AfterSignIn";
import ProfileUser from "./pages/ProfileUser";
import ProfileUserRegistered from "./pages/ProfileUserRegistered";
import ProfileMember from "./pages/ProfileMember";
import LanguageSelectFeed from "./pages/LanguageSelectFeed";
import MembersList from "./pages/MembersList";
import Resources from "./pages/Resources";
import MyPosts from "./pages/MyPosts";

import "./App.css";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/connexion" element={<SignInPage />} />
        <Route path="/creer-post" element={<AfterSignIn />} />
        <Route path="/creation-compte" element={<ProfileUser />} />
        <Route path="/mon-compte" element={<ProfileUserRegistered />} />
        <Route path="/profil-membre" element={<ProfileMember />} />
        <Route path="/fil-de-discussion" element={<LanguageSelectFeed />} />
        <Route path="/liste-membres" element={<MembersList />} />
        <Route path="/ressources" element={<Resources />} />
        <Route path="/mes-posts" element={<MyPosts />} />
      </Routes>
    </div>
  );
}

export default App;
