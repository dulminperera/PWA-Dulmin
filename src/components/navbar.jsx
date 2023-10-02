import React, { useState } from "react"; // Import React
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

function Navbar() {
  const [nav, setNav] = useState(false);
  // const [bgEffect, setBgEffect] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div
      className={
        "sticky top-0 left-0 right-0 py-3 px-1 sm:px-5 flex justify-between items-center mx-auto bg-blue-950 z-50  border-b backdrop-blur-xl w-full"
      }
    >
      <HiMenuAlt2 onClick={handleNav} size={40} color="white" />
      <h1 className="text-2xl font-bold md:3xl bg-clip-text text-transparent bg-gradient-to-r text-white">
        Insurance Nexus
      </h1>
      <div className="flex gap-5">
        <ul className="hidden md:flex flex-row gap-8 capitalize items-center">
          <Link
            to="/home"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            {" "}
            Home{" "}
          </Link>

          <Link
            to="/health"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            {" "}
            Health{" "}
          </Link>
          <Link
            to="/vehicle"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            {" "}
            Vehicle{" "}
          </Link>
          <Link
            to="/life"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            {" "}
            Life{" "}
          </Link>
        </ul>

        <div className="flex items-center gap-3">
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-t from-purple-600/80 to-purple-950/80 backdrop-blur-lg  p-10 ease-in duration-500"
                : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-300 "
            }
          >
            <div className="flex w-full items-center justify-end"></div>
            <div className="w-full h-[50%] list-none flex flex-col gap-5  items-start capitalize">
              <Link
                to="/home"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                {" "}
                Home{" "}
              </Link>

              <Link
                to="/health"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                {" "}
                Health{" "}
              </Link>
              <Link
                to="/vehicle"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                {" "}
                Vehicle{" "}
              </Link>
              <Link
                to="/life"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                {" "}
                Life{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
          
    </div>
  );
}

export default Navbar;
