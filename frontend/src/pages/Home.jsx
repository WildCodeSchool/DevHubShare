import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Headermain/Header";
import HomePage from "../components/HomePage/HomePage";
// import SwipeableSidebar from "../components/Sidebar/SwipeableSidebar";

export default function Home() {
  return (
    <div>
      <Header />

      <HomePage />

      <Footer />

      {/* 
        <SwipeableSidebar />
       */}
    </div>
  );
}
