import React from "react";
import Header from "../components/Headermain/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import ResourcesComponent from "../components/ResourcesComponent/ResourcesComponent";
import Footer from "../components/Footer";

export default function Resources() {
  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <Sidebar />
      </div>
      <div className="div3">
        <ResourcesComponent />
      </div>
      <div className="div4">
        <Footer />
      </div>
    </div>
  );
}
