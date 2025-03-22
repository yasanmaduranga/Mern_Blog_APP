import React from "react";
import PostListitem from "./PostListitem";

function PostList() {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2">
      <PostListitem />
      <PostListitem />
      <PostListitem />
      <PostListitem />
      <PostListitem />
    </div>
  );
}

export default PostList;
