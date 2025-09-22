import React from "react";
import Navbar from "../components/Navbar";
import Bar from "../components/Bar";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Bar />
      <div className="hidden lg:flex justify-around items-center h-[80%] border">
        <div className="border bg-[#060227] rounded-2xl">box 1</div>
        <div className="bg-[#060227] rounded-2xl w-[30%] h-[70%] animate-pulse border-2 border-red-500">
          <div className="flex justify-center space-x-2 items-center pb-4 mt-10 border-b-2">
            <img src={pic1} className="w-[45%]" alt="picture" />
            <div className="text-[55%] h-[80%] w-[30%] text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nobis tempora, accusantium, minima quae magnam aliquid atque, perspiciatis vero animi assumenda delectus veniam voluptatibus officiis. Impedit tenetur expedita placeat voluptate!</div>
          </div>
          <div className="flex justify-center space-x-4 h-[40%] items-center my-2 border-t-2 border-green-600">
            <img src={pic2} className="w-[50%] h-[80%] rounded-xl" alt="picture" />
            <img src={pic3} className="h-[80%] rounded-md" alt="picture" />
          </div>
        </div>
      </div>
      {/* try to add component based content!*/}
    </div>
  );
};

export default Home;
