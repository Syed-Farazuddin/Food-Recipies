import React from "react";
import { FaHeart, FaHome, FaMoon, FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div className=" font-bold flex gap-4 justify-between items-center p-4 bg-rose-200">
      <h1 className="text-2xl text-rose-500 font-serif font-extrabold">
        Food Recipies
      </h1>
      <ul className="flex gap-8">
        <div className="flex items-center justify-center bg-white rounded-lg px-2 text-black border-[1px] border-black">
          <input
            type="text"
            className="w-[100%] px-4 rounded-lg text-black py-2 border-none outline-none"
            placeholder="Search for Recipies"
          />
          <p className="w-8 h-8 rounded-full bg-slate-500 flex justify-center items-center text-white">
            <FaSearch />
          </p>
        </div>
      </ul>
      <ul className="flex justify-evenly gap-4">
        <li>
          <FaHome className="bg-rose-500 text-white p-2 h-[35px] w-[35px] rounded-full hover:bg-rose-800" />
        </li>
        <li>
          <FaHeart className="bg-rose-500 text-white p-2 h-[35px] w-[35px] rounded-full hover:bg-rose-800" />
        </li>
        <li className="">
          <FaMoon className="bg-rose-500 text-white p-2 h-[35px] w-[35px] rounded-full hover:bg-rose-800" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
