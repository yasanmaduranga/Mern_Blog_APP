import React from "react";
import PostListitem from "./PostListitem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return res.data;
};

const PostList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchPosts(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured: "+ error.message;

  console.log(data);

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
