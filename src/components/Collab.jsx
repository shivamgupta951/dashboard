import React from "react";
import CollabBox from "./CollabBox";
import { motion } from "framer-motion";

const Collab = () => {
  return (
    <>
      <div className="hidden md:flex min-h-[700px] bg-gradient-to-br from-[#4d2707db] via-black to-[#050219] justify-around items-center">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          className="border-dashed border-l-2 md:w-[35%] lg:w-[30%] p-4"
        >
          <h1 className="text-4xl my-8 bg-gradient-to-r from-primary p-1">
            Customers and Brands we've worked with
          </h1>
          <div className="italic">
            We’ve had the privilege of collaborating with a diverse range of
            brands and businesses, helping them bring ideas to life with
            creativity, innovation, and trust. Our partners span across
            industries, each leaving a mark of excellence, and together we’ve
            built meaningful connections that continue to grow stronger every
            day.
          </div>
        </motion.div>
        <CollabBox />
      </div>
      <div className="min-h-[1000px] bg-gradient-to-br from-[#4d2707db] via-black to-[#050219] justify-around items-center text-center flex flex-col md:hidden">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          className="border-dashed w-[85%] sm:w-[60%] border-l-2 p-4"
        >
          <h1 className="text-2xl my-8 bg-gradient-to-r from-primary p-1">
            Customers and Brands we've worked with
          </h1>
          <div className="italic">
            We’ve had the privilege of collaborating with a diverse range of
            brands and businesses, helping them bring ideas to life with
            creativity, innovation, and trust. Our partners span across
            industries, each leaving a mark of excellence, and together we’ve
            built meaningful connections that continue to grow stronger every
            day.
          </div>
        </motion.div>
        <CollabBox />
      </div>
    </>
  );
};

export default Collab;
