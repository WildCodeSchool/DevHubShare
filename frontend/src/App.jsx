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
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/create-post" element={<AfterSignIn />} />
        <Route path="/account-creation" element={<ProfileUser />} />
        <Route path="/my-account" element={<ProfileUserRegistered />} />
        <Route path="/member-profile" element={<ProfileMember />} />
        <Route path="/feed-" element={<LanguageSelectFeed />} />
        <Route path="/members-list" element={<MembersList />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/my-posts" element={<MyPosts />} />
      </Routes>
    </div>
  );
}

export default App;
