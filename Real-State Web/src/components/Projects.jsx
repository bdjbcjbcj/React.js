import React, { useState } from "react";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";
import { projectsData } from "../assets/assets";
import { motion } from "framer-motion";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < projectsData.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <motion.div
    initial={{ opacity: 0, x:-200 }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      className="flex flex-col items-center justify-center md:px-20 lg:px-32 p-16 container w-full mx-auto overflow-hidden"
      id="#Projects"
    >
      <h1 className="text-2xl text-gray-950 sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-6 decoration-1 under text-gray-700 font-light">
          Completed
        </span>{" "}
      </h1>
      <p className=" text-gray-500 text-center max-w-80 mb-8">
        Creafting Spaces,Biulding Legacies-Explore Our Portfolio
      </p>

      {/* Slider Button */}
      <div className="flex justify-end items-center w-full mb-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded bg-gray-200 mr-2 cursor-pointer"
          aria-label="Previous Project"
        >
          <img src={left_arrow} alt="previous" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded bg-gray-200 mr-2 cursor-pointer"
          aria-label="Next Project"
        >
          <img src={right_arrow} alt="next" />
        </button>
      </div>
      {/* Project Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex shrink-0  w-full sm:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="bg-white inline-block w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1">|</span>{" "}
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
