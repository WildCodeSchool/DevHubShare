import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Headermain/Header";
import HomePage from "../components/HomePage/HomePage";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <Sidebar />
      </div>
      <div className="div3">
        <HomePage />
      </div>
      <div className="div4">
        <Footer />
      </div>
    </div>
  );
}
