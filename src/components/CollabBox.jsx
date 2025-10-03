import React from "react";
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.png";
import { motion } from "framer-motion";
import { FaEarlybirds } from "react-icons/fa";

const CollabBox = () => {
  return (
    <motion.div
      animate={{ rotate: [0, 6, -6, 12, -12, 360] }}
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: "easeInOut",
      }}
      className="relative flex w-[70%] sm:w-[50%] justify-between flex-wrap h-80 md:w-[36%] lg:w-[26%] rounded-lg bg-gradient-to-br from-purple-950 via-slate-900 to-black p-6 border hover:ring-2"
    >
      <div className="absolute -top-9 left-0 text-4xl">
        <FaEarlybirds />
      </div>
      <div className="size-[30%] px-2 sm:size-[30%] border flex justify-center items-center rounded-2xl my-1 animate-pulse-slow sm:px-4 hover:-rotate-2 cursor-pointer">
        <img src={logo1} alt="logo" />
      </div>
      <div className="size-[30%] px-2 sm:size-[30%] border flex justify-center items-center rounded-2xl my-1 animate-pulse-slow sm:px-4 hover:-rotate-2 cursor-pointer">
        <img src={logo2} alt="logo" />
      </div>
      <div className="size-[30%] px-2 sm:size-[30%] border flex justify-center items-center rounded-2xl my-1 animate-pulse-slow sm:px-4 hover:-rotate-2 cursor-pointer">
        <img src={logo3} alt="logo" />
      </div>
      <div className="size-[30%] px-2 sm:size-[30%] border flex justify-center items-center rounded-2xl my-1 animate-pulse-slow sm:px-4 hover:-rotate-2 cursor-pointer">
        <img src={logo4} alt="logo" />
      </div>
      <div className="size-[30%] px-2 sm:size-[30%] border flex justify-center items-center rounded-2xl my-1 animate-pulse-slow sm:px-4 hover:-rotate-2 cursor-pointer">
        <img src={logo5} alt="logo" />
      </div>
      <div className="size-[30%] px-2 sm:size-[30%] border flex justify-center items-center rounded-2xl my-1 animate-pulse-slow sm:px-4 hover:-rotate-2 cursor-pointer">
        <img src={logo6} alt="logo" />
      </div>
      <div className="size-[30%] px-2 sm:size-[30%] border flex justify-center items-center rounded-2xl my-1 animate-pulse-slow sm:px-4 hover:-rotate-2 cursor-pointer">
        <img src={logo7} alt="logo" />
      </div>
      <div className="size-[30%] px-2 sm:size-[30%] border flex justify-center items-center rounded-2xl my-1 animate-pulse-slow sm:px-4 hover:-rotate-2 cursor-pointer">
        <img src={logo8} alt="logo" />
      </div>
      <div className="size-[30%] px-2 sm:size-[30%] border flex justify-center items-center rounded-2xl my-1 animate-pulse-slow sm:px-4 hover:-rotate-2 cursor-pointer">
        <img src={logo9} alt="logo" />
      </div>
    </motion.div>
  );
};

export default CollabBox;
