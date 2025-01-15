import React from "react";
import { Link, Links, NavLink, Route, Router, Routes } from "react-router-dom";

const NavbarPages = () => {
  return (
    <nav className="h-[13vh] w-full  flex flex-col">
      <div className="flex h-[60%] w-full bg-[#580909]"></div>

      {/* links  */}
      <div className="flex h-[40%] text-white  w-full bg-[#814D4D] items-center justify-around  ">
        <p>Quick Sort</p>
        <p>Quick Sort</p>
        <p>Quick Sort</p>
        <p>Quick Sort</p>
        <p>Quick Sort</p>
        <p>Quick Sort</p>
      </div>
    </nav>
  );
};

export default NavbarPages;
