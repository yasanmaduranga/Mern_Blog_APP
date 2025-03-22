import React from 'react'
import { Link } from "react-router-dom";
import MainCategories from '../components/MainCategories';
import Featuredpost from '../components/Featuredpost';
import PostList from '../components/PostList';


function HomePage() {
  return (
    <div className="mt-1 flex flex-col gap-4">
        
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      
      <div className="flex items-center justify-between">
        
        <div className="">
          <h1 className="text-gray-800 text-1xl md:text-3xl lg:text-4xl font-bold">
            Share and Discuss Everything Tech.
          </h1>
          <p className="mt-4 text-md md:text-l">
            Tired of scattered notes and lost solutions? StackWrites is here to help. Write, organize, and share your technical knowledge in one place—helping both yourself and fellow developers build a smarter tech world.
          </p>
        </div>
       
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="150"
            height="150"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Share What you Know •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Tell Your Experience •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      <MainCategories/>

      <Featuredpost/>

      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList/>
      </div>

    </div>
  )
}

export default HomePage;