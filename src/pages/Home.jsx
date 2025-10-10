import React from "react";
import { useState } from "react";
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
import { div } from "framer-motion/client";

const Home = () => {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      window.location.href = `/room/${input}`;
    }
  };
  const [createRoom, setCreateRoom] = useState(true);
  return (
    <div id="home" className="w-full h-[1100px] sm:h-[1100px] md:h-[800px]">
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
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-[70%] rounded-sm p-2"
                    placeholder="Enter Room-id/URL"
                  />
                  <div
                    className="btn btn-accent m-1 text-black text-[70%]"
                    onClick={submitHandler}
                  >
                    Join Room <MdGroup size={17} />{" "}
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center">
              <form action="" className="w-[100%]">
                <div className="w-full flex justify-center items-center">
                  <div className="w-[100%] h-16 rounded-lg bg-gradient-to-b from-black to-gray-900 justify-between border-orange-800 border-2 flex items-center text-sm px-1 text-orange-300">
                    {" "}
                    {createRoom ? (
                      <div className="flex w-[100%] items-center justify-between h-[100%] space-x-4">
                        <div className="h-[90%] w-[67%] flex items-center space-x-3">
                          <div className="text-[30%] h-[60%] w-[80%] overflow-hidden border rounded-md flex justify-center items-center bg-[#4f0e0e]">
                            link: Lorem ipsum, dolor sit amet consecteturjcsiuhc
                            hknashas elit. Voluptas, optio!
                          </div>{" "}
                          <div className="cursor-pointer text-white underline text-[50%] border-gray-600">
                            Copy Link!
                          </div>
                        </div>{" "}
                        <div className="h-[90%] w-[35%] flex space-x-2 px-1 items-center">
                          <div className="text-[40%] h-[60%] border w-[55%] flex justify-center items-center rounded-md bg-[#4f0e0e]">
                            ID: 143632
                          </div>{" "}
                          <div className="cursor-pointer text-white underline text-[60%] border-gray-600">
                            Copy ID!
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex justify-center items-center">
                        Click the button to generate link!
                      </div>
                    )}{" "}
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <div
                    className="text-[60%] btn btn-error m-1 w-[80%] my-5 text-black hover:rotate-3"
                    onClick={submitHandler}
                  >
                    Create New Room <MdGroup size={17} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Midium and large screens! */}
      <div className="hidden md:flex justify-around items-center h-[60%]">
        <div className="md:w-[60%] lg:w-[55%] space-y-4 p-4">
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
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-[72%] rounded-md p-2"
                  placeholder="Enter Room-id/URL"
                />
                <div
                  className="md:text-[70%] btn btn-accent m-1 text-black hover:rotate-3"
                  onClick={submitHandler}
                >
                  Join Room <MdGroup size={17} />{" "}
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <form action="" className="md:w-[100%] lg:w-[100%]">
              <div className="w-full flex justify-center items-center">
                <div
                  className="md:text-[40%] btn btn-error m-1 lg:text-[60%] text-black hover:rotate-3"
                  onClick={submitHandler}
                >
                  Create New Room <MdGroup size={17} />
                </div>
                <div className="w-[95%] h-16 rounded-lg bg-gradient-to-b from-black to-gray-900 justify-between border-orange-800 border-2 flex items-center text-sm px-1 text-orange-300">
                  {" "}
                  {createRoom ? (
                    <div className="flex w-[100%] items-center justify-between h-[100%] space-x-4">
                      <div className="h-[90%] w-[67%] flex items-center space-x-3">
                        <div className="md:text-[30%] lg:text-[45%] h-[60%] w-[80%] overflow-hidden border rounded-md flex justify-center items-center bg-[#4f0e0e]">
                          link: Lorem ipsum, dolor sit amet consecteturjcsiuhc
                          hknashas elit. Voluptas, optio!
                        </div>{" "}
                        <div className="cursor-pointer text-white underline md:text-[50%] lg:text-[60%] border-gray-600">
                          Copy Link!
                        </div>
                      </div>{" "}
                      <div className="h-[90%] w-[35%] flex space-x-2 px-1 items-center">
                        <div className="text-[40%] h-[60%] border w-[55%] flex justify-center items-center rounded-md bg-[#4f0e0e]">
                          ID: 143632
                        </div>{" "}
                        <div className="cursor-pointer text-white underline text-[60%] border-gray-600">
                          Copy ID!
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center items-center">
                      Click the button to generate link!
                    </div>
                  )}{" "}
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
              meetings. It offers smooth communication, secure connections, and
              modern features that make collaboration easy, whether for personal
              talks, business discussions, or group sessions and productivity!
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
