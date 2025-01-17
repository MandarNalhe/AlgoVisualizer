import React from "react";
import { Link, Links, NavLink, Route, Router, Routes } from "react-router-dom";

const NavbarPages = ({ data, getSortingName }) => {
  return (
    <nav className="h-[15vh] w-full  flex flex-col">
      <div className="flex h-[60%] w-full border-[#9F7601] mt-2 border-[2px] items-center justify-between px-10">
        <p className="heading">back</p>
        <h1 className="text-2xl font-black heading tracking-wider">
          Algo <span className="text-[#9F7601] font-black text-xl ">-</span>{" "}
          <span className="text-sky-500">genX</span>
        </h1>
        <p className="othertxt">About</p>
      </div>

      {/* links  */}
      <div className="flex h-[40%] text-white  w-full border-[1px] border-green-300 mt-3 items-center justify-around  ">
        {data.map((e, i) => {
          return (
            <p
              key={i}
              className={`cursor-pointer ${
                e.active ? "text-sky-400" : "text-white"
              }`}
              onClick={() => getSortingName(i)}
            >
              {e.name}
            </p>
          );
        })}
      </div>
    </nav>
  );
};

export default NavbarPages;
