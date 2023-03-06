import React from "react";
import Header from "../components/Headermain/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import FeedSelected from "../components/FeedPost/FeedSelected";
import Footer from "../components/Footer";

export default function LanguageSelectFeed() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <Sidebar />
      </div>
      <div className="div3">
        <FeedSelected />
      </div>
      <div className="div4">
        <Footer />
      </div>
    </div>
  );
}
