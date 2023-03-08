/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import HomeAfterSignIn from "./pages/HomeAfterSignIn";
import ProfileUserPage from "./pages/ProfileUserPage";
import ProfileUserRegistered from "./pages/ProfileUserRegisteredPage";
import ProfileMemberPage from "./pages/ProfileMemberPage";
import LanguageSelectFeed from "./pages/LanguageSelectFeed";
import Resources from "./pages/Resources";
import MyPostsPage from "./pages/MyPostsPage";
import SignInPage from "./pages/SignInPage";
import ErreurPage from "./pages/ErreurPage";
import PrivateRoutes from "./services/PrivateRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<SignUpPage />} />
        <Route path="/connexion" element={<SignInPage />} />
        <Route path="/ressources" element={<Resources />} />
        <Route path="/erreur" element={<ErreurPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/creation-compte" element={<ProfileUserPage />} />
          <Route path="/creer-post" element={<HomeAfterSignIn />} />
          <Route path="/mon-compte" element={<ProfileUserRegistered />} />
          <Route path="/profil-membre" element={<ProfileMemberPage />} />
          <Route path="/fil-de-discussion" element={<LanguageSelectFeed />} />
          <Route path="/mes-posts" element={<MyPostsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
