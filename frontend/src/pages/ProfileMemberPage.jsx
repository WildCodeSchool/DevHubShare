import React from "react";
import Header from "../components/Headermain/Header";
import SwipeableSidebar from "../components/Sidebar/SwipeableSidebar";
import ProfileMember from "../components/ProfileMember/ProfileMember";
import Footer from "../components/Footer";

export default function ProfileMemberPage() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <SwipeableSidebar />
      </div>
      <div className="div3">
        <ProfileMember />
      </div>
      <div className="div4">
        <Footer />
      </div>
    </div>
  );
}
