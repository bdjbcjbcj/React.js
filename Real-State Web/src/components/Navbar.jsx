import React, {  useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.svg";

function Navbar() {
    let [ShowMenu, setShowMenu]=useState(false);
    useEffect(()=>{
        if(ShowMenu){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='auto'
        }
        return()=>{
            document.body.style.overflow='auto'
        }
    },[ShowMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 bg-transparent md:px-20 lg:px-32">
        <img src={logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white cursor-pointer hover:bg-gray-400 px-8 py-2 rounded-full">
          Sign up
        </button>
        <img onClick={()=>setShowMenu(true)} className="md:hidden w-7" src={menu_icon} alt="" />
      </div>
      {/* Mobile-menu */}
      <div className={` md:hidden ${ShowMenu ? "fixed w-full": 'h-0 w-0'}  top-0 bottom-0 right-o overflow-hidden bg-white transition-all`}>
        <div className="flex  justify-end p-6  cursor-pointer">
          <img onClick={()=>setShowMenu(false)} src={cross_icon} alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium  cursor-pointer ">
          <a onClick={()=>setShowMenu(false)} href="#Header" className="px-4 py-2  inline-block">
            Home
          </a>
          <a onClick={()=>setShowMenu(false)} href="#About" className="px-4 py-2  inline-block ">
            About
          </a>
          <a onClick={()=>setShowMenu(false)} href="#Projects" className="px-4 py-2  inline-block">
            Projects
          </a>
          <a onClick={()=>setShowMenu(false)} href="#Testimonials" className="px-4 py-2  inline-block">
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
