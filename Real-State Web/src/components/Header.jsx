import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Header() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center w-full mb-8 overflow-x-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <motion.div 
      initial={{opacity: 0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once: true}}
      className="container text-center text-white mx-auto py-4 mt-12  px-6 md:px-20 lg:px-32">
        <h2 className="text-7xl max-w-2xl inline-block font-semibold sm:text-6xl md:text-7xl ">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a className="border border-white px-8 py-3 rounded" href="#Projects">
            Projects
          </a>
          <a className=" bg-blue-500 px-8 py-3 rounded" href="#Contact">
            Contact us
          </a>
        </div>
      </motion.div>

      <Navbar />
    </div>
  );
}

export default Header;
