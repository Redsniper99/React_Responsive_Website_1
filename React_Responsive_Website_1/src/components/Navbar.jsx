import React from "react";
import { useState } from "react"
import { close, logo6, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-5 justify-between item-center navbar">
      <img src={logo6} alt="logo" className="w-[280px] h-[150px] pr-20" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mb-5 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0':'mr-10'} text-white mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img src={toggle ? close : menu}  alt="menu" className="w-[70px] h-[70px] object-contain mb-8 mr-2"
        onClick={()=> setToggle((prev) => !prev)}/>

        <div
            className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}
        

        >


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
