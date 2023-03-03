import React from "react";
import Header from "../components/Headermain/Header";
import SwipeableSidebar from "../components/Sidebar/SwipeableSidebar";
import ProfileUserRegistered from "../components/ProfileUserRegistered";
import Footer from "../components/Footer";

export default function ProfileUserRegisteredPage() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <SwipeableSidebar />
      </div>
      <div className="div3">
        <ProfileUserRegistered />
      </div>
      <div className="div4">
        <Footer />
      </div>
    </div>
  );
}
