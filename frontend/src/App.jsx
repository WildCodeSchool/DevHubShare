import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import AfterSignIn from "./pages/AfterSignIn";
import ProfileUserPage from "./pages/ProfileUserPage";
import ProfileUserRegistered from "./pages/ProfileUserRegistered";
import ProfileMember from "./pages/ProfileMember";
import LanguageSelectFeed from "./pages/LanguageSelectFeed";
import MembersList from "./pages/MembersList";
import Resources from "./pages/Resources";
import MyPosts from "./pages/MyPosts";
import SignInPage from "./pages/SignInPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<SignUpPage />} />
        <Route path="/connexion" element={<SignInPage />} />
        <Route path="/creer-post" element={<AfterSignIn />} />
        <Route path="/creation-compte" element={<ProfileUserPage />} />
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
