import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Headermain/Header";
import HomePage from "../components/HomePage/HomePage";
// import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />

      <HomePage />

      <Footer />

      {/* 
        <Sidebar />
       */}
    </div>
  );
}
