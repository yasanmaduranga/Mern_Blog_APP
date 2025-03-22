import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

function PostListitem() {
  return (
    <div className="flex flex-col w-full lg:flex-row mb-6">
      <div className="w-full md:hidden lg:block lg:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      <div className="flex flex-col m-1 lg:w-2/3 lg:px-2">
        <Link to="/test" className="text-2xl font-semibold lg:mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm lg:mb-2">
          <span>Written By</span>
          <Link className="text-blue-800">Joen Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure illum laudantium commodi, perspiciatis quasi vero, natus aperiam, earum doloremque quo modi nisi architecto sint harum at deleniti reprehenderit voluptates atque?</p>
        <Link to="/test"  className="underline text-blue-800 text-sm lg:mt-2">Read More</Link>
      </div>
    </div>
  );
}

export default PostListitem;
