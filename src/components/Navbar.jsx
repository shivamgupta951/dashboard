import React, { useState, useEffect } from "react";
import Yemmy_Meet_logo from "../assets/Yemmy_Meet_logo.png";
import { Cookie, List } from "lucide-react";
import { motion } from "framer-motion";
import doodle_image from "../assets/doodle_image.jpeg";

const Navbar = () => {
  const [navitems, setNavitems] = useState(false);

  // ✅ Close navitems when screen size >= md (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavitems(false);
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`bg-base-200 w-full ${navitems ? "h-28" : "h-16"}`}>
      {/* mobile header */}
      <div
        className={`${
          navitems ? "h-14" : "h-16"
        } flex justify-between px-2 items-center md:hidden`}
      >
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center space-x-1 outline-1 outline-pink-900 px-2 outline rounded-md p-1 bg-base-300"
        >
          <div className="size-4 rounded-lg bg-primary/10 flex items-center justify-center">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div className="font-bold text-[70%]">Yemmy Meet</div>
          <img src={Yemmy_Meet_logo} alt="logo" className="size-6 rounded-lg" />
        </motion.div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex space-x-2"
        >
          <div className="border p-1 text-[60%] bg-blue-900 px-2 rounded-md hover:cursor-grab">
            Get Started
          </div>
          <div>
            <List onClick={() => setNavitems((prev) => !prev)} />
          </div>
        </motion.div>
      </div>

      {/* desktop header */}
      <div className="hidden md:flex mx-2 h-16 justify-between items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center space-x-2 outline-1 outline-pink-900 px-2 outline rounded-md p-1 bg-base-300"
        >
          <div className="size-5 rounded-lg bg-primary/10 flex items-center justify-center">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div className="md:text-[80%] font-bold lg:text-lg">Yemmy Meet</div>
          <img
            src={Yemmy_Meet_logo}
            alt="logo"
            className="md:size-6 size-8 rounded-lg"
          />
        </motion.div>

        <div className="md:space-x-16 flex lg:space-x-28 border-t border-error px-4 border-b p-1 pt-3 pb-2 rounded-lg text-accent">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="border-t border-warning transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b"
          >
            Features
          </motion.div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="border-t border-warning transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b"
          >
            Solutions
          </motion.div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="border-t border-warning transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b"
          >
            Resources
          </motion.div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="border-t border-warning transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b"
          >
            Pricing
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex space-x-4 items-center"
        >
          <img
            src={doodle_image}
            alt="img"
            className="size-8 w-10 animate-bounce rounded-[10%]"
          />
          <div className="border p-1 text-sm bg-blue-900 px-2 rounded-md hover:cursor-grab">
            Get Started
          </div>
        </motion.div>
      </div>

      {/* desktop animation bar */}
      <div className="hidden md:flex justify-center items-center w-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-[30%] border border-primary"
        ></motion.div>
      </div>

      {/* mobile navitems */}
      {navitems && (
        <div className="absolute h-16 w-full flex justify-center items-center pb-2 border-t md:hidden">
          <div className="space-x-8 flex border-t border-error items-center justify-center border-b p-1 py-2 pt-3 px-4 rounded-lg text-accent">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-[70%] border-t border-warning transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b"
            >
              Features
            </motion.div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-[70%] border-t border-warning transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b"
            >
              Solutions
            </motion.div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-[70%] border-t border-warning transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b"
            >
              Resources
            </motion.div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-[70%] border-t border-warning transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b"
            >
              Pricing
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
