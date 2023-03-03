import React from "react";
import Header from "../components/Headermain/Header";
import SwipeableSidebar from "../components/Sidebar/SwipeableSidebar";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";

function SignInPage() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <SwipeableSidebar />
      </div>
      <div className="div3">
        <SignIn />
      </div>
      <div className="div4">
        <Footer />
      </div>
    </div>
  );
}

export default SignInPage;
