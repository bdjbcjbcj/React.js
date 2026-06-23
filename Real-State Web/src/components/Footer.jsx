import React from "react";
import logo_dark from "../assets/logo_dark.svg";

function Footer() {
  return (
    <div
      className="bg-gray-900 pt-10 px-4 w-full md:px-20 lg:px-32 overflow-hidden"
      id="#Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 md:mb-0 mb-8">
          <img src={logo_dark} alt="" />
          <p className="text-gray-500  my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore et,
            eveniet repellat assumenda numquam.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="text-gray-400 flex flex-col gap-2 ">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 ">
          <h3 className="text-white text-lg font-bold mb-4">
            Subcribe to Our Newspaper
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Lorem ipsum dolor, sit amet Neque at exercitationem consequuntur.
            <div className="my-3 flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 bg-gray-800 text-gray-400 rounded border border-gray-700 focus:outline-none"
              />
              <button className="px-3 rounded py-2 text-white bg-blue-500 hover:bg-blue-700 cursor-pointer w-full">Subscribe</button>
            </div>
          </p>
         
        </div>
        
      </div>
       <hr />
          <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
            Copyright 2026 GreatStact.All rights are reserved.
          </div>
    </div>
  );
}

export default Footer;
