import React from "react";
import Navbar from "../components/Navbar";
import Bar from "../components/Bar";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import { AiFillApi } from "react-icons/ai";
import { motion } from "framer-motion";
import Yemmy_Meet_logo from "../assets/Yemmy_Meet_logo.png";
import { MdGroup } from "react-icons/md";
import Collab from "../components/Collab";
import ElectricBorder from "../components/ElectricBorder";

const Home = () => {
  return (
    <div id="home" className="w-full h-[900px] sm:h-[1000px] md:h-[800px]">
      <Navbar />
      <Bar />
      {/* Small sceeens! */}
      <div className="flex gap-4 flex-col justify-center items-center md:hidden">
        <div className="flex justify-center items-center py-8">
          <ElectricBorder className="w-[80%] h-[60%] bg-black relative rounded-2xl animate-pulse">
            <AiFillApi className="absolute right-2 top-2 size-5 animate-spin-slow" />
            <div className="flex justify-center space-x-2 items-center pb-4 mt-6 border-b-2">
              <img
                src={pic1}
                className="w-[45%] shadow-md shadow-purple-900"
                alt="picture"
              />
              <div className="text-[35%] h-[80%] w-[32%] text-center">
                Yemmy Meet is a seamless video calling platform built under the
                Yemmy Foundation, designed to connect people through reliable
                meetings. It offers smooth communication, secure connections,
                and modern features that make collaboration easy, whether for
                personal talks, business discussions, or group sessions and
                productivity!
              </div>
            </div>
            <div className="h-[40%] flex justify-center space-x-4 items-center my-2 py-4 border-t-2 border-green-600">
              <img
                src={pic2}
                className="w-[45%] h-[35%] rounded-xl"
                alt="picture"
              />
              <img src={pic3} className="w-[30%] rounded-md" alt="picture" />
            </div>
          </ElectricBorder>
        </div>
        <div className="flex justify-around items-center h-[80%]">
          <div className="w-[100%] space-y-4 p-4 ">
            <h1 className="text-5xl font-bold flex justify-center items-center text-warning border border-dashed p-4 rounded-lg bg-gradient-to-br from-teal-900">
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "easeInOut",
                }}
                className="w-[30%]"
              >
                <img
                  src={Yemmy_Meet_logo}
                  className="border-4 border-red-600 rounded-2xl mx-2 w-[70%]"
                  alt="image"
                />{" "}
              </motion.div>
              <div className="text-[20%] sm:text-[30%] w-[60%] tracking-tight text-center">
                Connect with friends , family and Companions with Yemmy Room-id
                and have a secure meet with them!
              </div>
            </h1>
            <div className="flex justify-center items-center">
              <form action="" className="w-[100%]">
                <div className="w-full flex justify-center items-center">
                  <input
                    type="text"
                    className="w-[60%] rounded-sm p-2"
                    placeholder="Enter Room id"
                  />
                  <div className="btn btn-accent m-1 text-black">
                    Join Room <MdGroup size={17} />{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Midium and large screens! */}
      <div className="hidden md:flex justify-around items-center h-[60%]">
        <div className="w-[50%] space-y-4 p-4">
          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
            className="text-5xl font-bold flex justify-center items-center text-warning border border-dashed p-4 rounded-lg bg-gradient-to-br from-teal-900"
          >
            <motion.div
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "easeInOut",
              }}
              className="w-[30%]"
            >
              <img
                src={Yemmy_Meet_logo}
                className="border-4 border-red-600 rounded-2xl mx-4 w-[80%]"
                alt="image"
              />{" "}
            </motion.div>
            <div className="md:text-sm lg:text-[40%] w-[60%] tracking-tight text-center">
              Connect with friends , family and Companions with Yemmy Room-id
              and have a secure meet with them!
            </div>
          </motion.h1>
          <div className="flex justify-center items-center">
            <form action="" className="md:w-[90%]">
              <div className="w-full flex justify-center items-center">
                <input
                  type="text"
                  className="w-[70%] rounded-sm p-2"
                  placeholder="Enter Room id"
                />
                <div className="btn btn-accent m-1 text-black hover:rotate-3">
                  Join Room <MdGroup size={17} />{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
          <ElectricBorder
            initial={{ y: 10, x: 10, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="md:w-[35%] md:h-[65%] p-2 bg-black relative rounded-2xl lg:w-[30%] lg:h-[80%] animate-pulse"
          >
            <AiFillApi className="absolute right-2 top-2 size-5 animate-spin-slow" />
            <div className="flex justify-center space-x-2 items-center pb-4 border-b-2 mt-[13%] xl:mt-[10%]">
              <img
                src={pic1}
                className="w-[45%] shadow-md shadow-purple-900"
                alt="picture"
              />
              <div className="md:text-[35%] lg:text-[45%] h-[80%] w-[32%] text-center">
                Yemmy Meet is a seamless video calling platform built under the
                Yemmy Foundation, designed to connect people through reliable
                meetings. It offers smooth communication, secure connections,
                and modern features that make collaboration easy, whether for
                personal talks, business discussions, or group sessions and
                productivity!
              </div>
            </div>
            <div className="md:h-[130px] flex justify-center space-x-4 lg:h-[150px] items-center my-2 border-t-2 border-green-600">
              <img
                src={pic2}
                className="w-[50%] h-[80%] rounded-xl"
                alt="picture"
              />
              <img src={pic3} className="h-[80%] rounded-md" alt="picture" />
            </div>
          </ElectricBorder>
      </div>
    </div>
  );
};

export default Home;
