"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Numerical Integration",
    title: "project 1",
    description:
      "This project is designed to implement a Riemann sum approximation for calculating integrals over specified intervals using various points of approximation, such as left-hand endpoint, right-hand endpoint, and midpoint. This project helps in understanding and modeling the practical application of integration in different scenarios, such as data transfer over a network or the calculation of area under curves.",
    stack: [{ name: "Python" }],
    image: "/assets/work/1633003175693.png",
    live: "",
    github: "https://github.com/Jsimpson7/numerical-Integration/blob/main/ProjectNumericalIntegration/project8.py",
  },
  {
    num: "02",
    category: "Simulation and Visualization of the Lorenz System",
    title: "project 2",
    description:
      "The code we're talking about creates a simulation and visualization of the Lorenz system, which was introduced by Edward Lorenz in 1963. This system is made up of three linked nonlinear equations that change over time and is known for showing chaotic behaviors under certain conditions.",
    stack: [{ name: "Python" }],
    image: "/assets/work/lorenz2.png",
    live: "",
    github: "https://github.com/Jsimpson7/simulation-and-visualization-of-the-Lorenz-system/blob/main/Projct%205/Project5JoshS.py",
  },
  {
    num: "03",
    category: "Command Line Interpreter",
    title: "project 3",
    description:
      "This C++ program functions as a command-line interpreter designed to enhance user interaction with Linux systems. It allows for direct execution of commands and supports batch command processing, which can be delineated using semicolons. ",
    stack: [{ name: "C++" }, { name: "Linux" }],
    image: "/assets/work/pexels-pixabay-207580.jpg",
    live: "",
    github: "https://github.com/Jsimpson7/commandlineinterpreter/blob/main/project6/CommandLineInterpreterJS.cpp",
    },
    {
     num: "04",
     category: "Simulation and Visualization of the Lorenz System",
     title: "project 4",
     description:
            "A playful Python project showcasing a simulated virus and a scanner to explore basic cybersecurity concepts and file manipulation." ,
     stack: [{ name: "Python" }],
        image: "/assets/work/virustotal_api_python-750x375.png",
     live: "",
        github: "https://github.com/Jsimpson7/Pythonvirus",
    },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
