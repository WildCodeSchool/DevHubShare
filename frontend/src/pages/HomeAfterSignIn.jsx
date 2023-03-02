import * as React from "react";
import CreatePost from "../components/HomeAfterSignIn/CreatePost";
import Feed from "../components/HomeAfterSignIn/Feed";

export default function HomeAfterSignIn() {
  return (
    <div>
      <CreatePost />
      <Feed />
    </div>
  );
}
