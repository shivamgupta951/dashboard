import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
const Bar = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full md:hidden">
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

      <div className="text-[50%] bg-gradient-to-r from-gray-700 via-base-300 to-orange-900 h-12 opacity-40 flex justify-center items-center md:text-[70%] px-8 md:px-20">
        <div className="md:w-[85%] lg:w-[55%] text-center">
          Yemmy Meet by Yemmy Foundation is a secure and reliable video calling
          platform that makes online meetings simple, collaborative, and
          accessible for everyone with modern features.
        </div>
      </div>
    </div>
  );
};

export default Bar;
