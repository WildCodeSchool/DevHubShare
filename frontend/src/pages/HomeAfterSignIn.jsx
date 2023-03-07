import * as React from "react";
import Header from "../components/Headermain/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import CreatePost from "../components/HomeAfterSignIn/CreatePost";
import Feed from "../components/HomeAfterSignIn/PostFeed";
import Footer from "../components/Footer";

export default function HomeAfterSignIn() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <Sidebar />
      </div>
      <div className="div3">
        <CreatePost />
        <Feed />
      </div>
      <div className="div4">
        <Footer />
      </div>
    </div>
  );
}
