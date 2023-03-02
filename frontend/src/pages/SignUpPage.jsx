import React from "react";
import Header from "../components/Headermain/Header";
import SwipeableSidebar from "../components/Sidebar/SwipeableSidebar";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

function SignUpPage() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <SwipeableSidebar />
      </div>
      <div className="div3">
        <SignUp />
      </div>
      <div className="div4">
        <Footer />
      </div>
    </div>
  );
}

export default SignUpPage;
