import { useState } from "react";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src="Logo_Home.png" alt="Blog App Logo" w={32} h={32} />
        <span>Blog Application</span>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>

        <div
          className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <div>Home</div>
          <div>Trending</div>
          <div>Most Popular</div>
          <div>About</div>
          <div>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </div>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <div>Home</div>
        <div>Trending</div>
        <div>Most Popular</div>
        <div>About</div>
        <div>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
