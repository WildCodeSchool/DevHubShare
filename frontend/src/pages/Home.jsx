import * as React from "react";
import Header from "../components/Headermain/Header";
import HomePage from "../components/HomePage/HomePage";
import Footer from "../components/Footer";
import SwipeableSidebar from "../components/Sidebar/SwipeableSidebar";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <HomePage />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <SwipeableSidebar />
      </div>
    </div>
  );
}
