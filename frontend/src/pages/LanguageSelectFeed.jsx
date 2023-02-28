import React from "react";
import Feed from "../components/FeedPost/Feed";
import Header from "../components/Headermain/Header";
import Footer from "../components/Footer";

export default function LanguageSelectFeed() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Feed />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
