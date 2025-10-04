import React from "react";
import { Mail, MapPin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div id="footer">
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
          className="w-[30%] border border-green-900"
        ></motion.div>
      </div>
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
          className="w-[30%] border border-green-900"
        ></motion.div>
      </div>

      <footer className="bg-gradient-to-t from-[#1f1105db] via-black to-[#050219] text-gray-300 px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          {/* Left Section */}
          <div className="text-center md:text-left flex-1">
            <h4 className="text-white text-xl font-semibold leading-snug">
              Yemmy Meet by Yemmy Foundation is a secure and
              <br />
              reliable video calling platform that makes online <br /> meetings
              simple collaborative, and accessible
              <br />
              for everyone with modern features.
            </h4>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
              <p>Greater Noida, UP, India</p>
            </div>

            <div className="flex items-center justify-center gap-3 md:justify-start">
              <Mail className="w-5 h-5 text-gray-400" />
              <p>yemmymeets@gmail.com</p>
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com/shivamgupta951"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 md:justify-start hover:text-white transition"
            >
              <Github className="w-5 h-5 text-gray-400" />
              <span className="px-2 bg-orange-950 rounded-md py-1">shivamgupta951</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-3">
          <div className="flex gap-6">
            <button
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              Home
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("collab")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              Collabs
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("review")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              Reviews
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              Info
            </button>
          </div>
          <p className="text-gray-400">© Copyright 2021. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
