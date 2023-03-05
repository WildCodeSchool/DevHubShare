import * as React from "react";
import CreatePost from "../components/HomeAfterSignIn/CreatePost";
import PostFeed from "../components/HomeAfterSignIn/PostFeed";

export default function HomeAfterSignIn() {
  return (
    <div>
      <CreatePost />
      <PostFeed />
    </div>
  );
}
