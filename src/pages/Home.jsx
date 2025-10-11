import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Bar from "../components/Bar";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import { AiFillApi } from "react-icons/ai";
import { motion } from "framer-motion";
import Yemmy_Meet_logo from "../assets/Yemmy_Meet_logo.png";
import { MdGroup } from "react-icons/md";
import ElectricBorder from "../components/ElectricBorder";
import toast from "react-hot-toast";

const Home = () => {
  const [input, setInput] = useState("");
  const [link, setLink] = useState("http://localhost:5173/room/12345");
  const [meet_id, setMeet_id] = useState("267292");
  const [firstCreation, setfirstCreation] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const generateRandomId = (length = 8) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%#@*_";
    let id = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      id += chars[randomIndex];
    }
    return id;
  };

  const setDisabledTrue = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 2500); // re-enable button after 2.5s
  };

  const newMeetRoom = () => {
    let temp_link = "http://localhost:5173/room/";
    let new_id = generateRandomId();
    temp_link = temp_link.concat(new_id);
    setLink(temp_link);
    setMeet_id(new_id);
    toast.success("New YemmyMeet Room Created!");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      window.location.href = `/room/${input}`;
    }
  };

  return (
    <div id="home" className="w-full h-[1200px] sm:h-[1200px] md:h-[800px]">
      <Navbar />
      <Bar />

      {/* Small screens */}
      <div className="flex flex-col justify-center items-center md:hidden gap-6 px-2">
        {/* Info Section */}
        <div className="flex justify-center items-center py-8">
          <ElectricBorder className="w-[90%] bg-black relative rounded-2xl animate-pulse">
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

        {/* Room Join & Create Section */}
        <div className="w-[95%] flex flex-col items-center space-y-6">
          {/* Heading */}
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
              />
            </motion.div>
            <div className="text-[20%] sm:text-[30%] w-[60%] tracking-tight text-center">
              Connect with friends, family, and Companions with Yemmy Room-ID
              and have a secure meet with them!
            </div>
          </h1>

          {/* Join Room Input */}
          <form onSubmit={submitHandler} className="w-full flex justify-center">
            <div className="flex w-full justify-center items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-[70%] rounded-sm p-2"
                placeholder="Enter Room-id/URL"
              />
              <button
                type="submit"
                className="btn btn-accent m-1 text-black text-[70%] flex items-center gap-1"
              >
                Join Room <MdGroup size={17} />
              </button>
            </div>
          </form>

          {/* Create Room Section (Above Link Info) */}
          <div className="w-full flex flex-col justify-center items-center space-y-3">
            <button
              className={`text-[60%] btn w-[80%] text-black hover:rotate-3 relative ${
                isDisabled ? "btn-disabled opacity-70 cursor-not-allowed" : "btn-error"
              }`}
              disabled={isDisabled}
              onClick={() => {
                setfirstCreation(true);
                newMeetRoom();
                setDisabledTrue();
              }}
            >
              {firstCreation ? (
                <div className="text-[70%] absolute -top-3 right-2 text-yellow-300 tracking-wider">
                  Click Again to Generate new Link!
                </div>
              ) : (
                ""
              )}
              {isDisabled ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  Create New Room <MdGroup size={17} />
                </>
              )}
            </button>

            {/* Generated Link / Info */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "easeInOut",
              }}
              className={`${
                firstCreation
                  ? "w-[95%] h-24 rounded-lg bg-gradient-to-b from-black to-gray-900 justify-between border-orange-800 border-2 flex flex-col items-center text-sm px-2 text-orange-300"
                  : "w-[95%] h-24 rounded-lg justify-center flex items-center text-sm px-2 text-orange-300 border"
              }`}
            >
              {firstCreation ? (
                <>
                  <div className="flex w-full justify-between items-center space-x-3 mt-2 h-10">
                    <div className="text-[70%] h-[100%] w-[85%] overflow-hidden border rounded-md flex justify-center items-center bg-[#4f0e0e]">
                      Link: {link}
                    </div>
                    <div className="cursor-pointer text-white underline text-[50%]">
                      Copy Link!
                    </div>
                  </div>
                  <div className="flex w-full justify-between items-center space-x-3 mb-2 h-8">
                    <div className="text-[80%] h-[100%] border w-[85%] flex justify-center items-center rounded-md bg-[#4f0e0e]">
                      Id: {meet_id}
                    </div>
                    <div className="cursor-pointer text-white underline text-[60%]">
                      Copy ID!
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-[60%] text-center">
                  Click the button to generate link!
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Medium and Large screens */}
      <div className="hidden md:flex justify-around items-center h-[65%]">
        <div className="md:w-[60%] lg:w-[50%] space-y-4 p-4">
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

          {/* Join Room Input */}
          <div className="flex justify-center items-center">
            <form action="" className="md:w-[90%]" onSubmit={submitHandler}>
              <div className="w-full flex justify-center items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-[72%] rounded-md p-2"
                  placeholder="Enter Room-id/URL"
                />
                <button
                  type="submit"
                  className="md:text-[70%] btn btn-accent m-1 text-black hover:rotate-3"
                >
                  Join Room <MdGroup size={17} />
                </button>
              </div>
            </form>
          </div>

          {/* Create New Room */}
          <div className="flex justify-center items-center">
            <div className="md:w-[100%] lg:w-[100%] flex flex-col items-center space-y-3">
              <button
                className={`md:text-[40%] relative w-[50%] btn m-1 lg:text-[60%] text-black hover:rotate-3 ${
                  isDisabled
                    ? "btn-disabled opacity-70 cursor-not-allowed"
                    : "btn-error"
                }`}
                disabled={isDisabled}
                onClick={() => {
                  setfirstCreation(true);
                  newMeetRoom();
                  setDisabledTrue();
                }}
              >
                {firstCreation ? (
                  <div className="absolute -top-4 right-2 text-yellow-300 tracking-wider">
                    Click Again to Generate new Link!
                  </div>
                ) : (
                  ""
                )}
                {isDisabled ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <>
                    Create New Room <MdGroup size={17} />
                  </>
                )}
              </button>

              {/* Generated Info */}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "easeInOut",
                }}
                className={`${
                  firstCreation
                    ? "w-[95%] h-28 rounded-lg bg-gradient-to-r from-blue-950 via-black to-gray-950 justify-between border-orange-800 border-2 flex items-center text-sm px-1 text-orange-300"
                    : "w-[95%] h-28 rounded-lg justify-center flex items-center text-sm px-1 border"
                }`}
              >
                {firstCreation ? (
                  <div className="flex flex-col w-[100%] items-center justify-between h-[100%]">
                    <div className="h-[90%] w-[95%] flex items-center space-x-3">
                      <div className="text-[70%] h-[60%] w-[80%] overflow-hidden border rounded-md flex justify-center items-center bg-[#4f0e0e]">
                        Link: {link}
                      </div>{" "}
                      <div className="cursor-pointer text-white underline text-[70%] border-gray-600">
                        Copy Link!
                      </div>
                    </div>{" "}
                    <div className="h-[90%] w-[90%] flex space-x-3 items-center">
                      <div className="text-[80%] h-[60%] border w-[80%] flex justify-center items-center rounded-md bg-[#4f0e0e]">
                        Id: {meet_id}
                      </div>{" "}
                      <div className="cursor-pointer text-white underline text-[70%] border-gray-600">
                        Copy ID!
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-[90%] text-orange-400 text-center">
                    Click the button to generate link!
                  </div>
                )}
              </motion.div>
            </div>
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
