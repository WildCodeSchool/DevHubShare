import React from "react";
import Header from "../components/Headermain/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import ProfileUser from "../components/ProfileUser";
import Footer from "../components/Footer";

export default function ProfileUserPage() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <Sidebar />
      </div>
      <div className="div3">
        <ProfileUser />
      </div>
      <div className="div4">
        <Footer />
      </div>
    </div>
  );
}
