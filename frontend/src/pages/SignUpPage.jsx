import React from "react";
import Header from "../components/Headermain/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

function SignUpPage() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <Sidebar />
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
