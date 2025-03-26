import React from "react";
import Comment from "../components/Comment";

function comments() {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form className="flex items-center justify-between gap-8 w-full">
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="bg-gray-200 w-full p-4 rounded-xl"
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
          Send
        </button>
      </form>

        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  );
}

export default comments;
