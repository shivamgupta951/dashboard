import React from "react";
import Navbar from "../components/Navbar";
import Bar from "../components/Bar";

const Home = () => {
  return (
    <div className="w-full">
        <Navbar/>
        <Bar/>
      <h1 className="text-4xl font-bold text-white flex justify-center items-center min-h-screen">Yemmy Meet Content🚀</h1>
      {/* try to add component based content!*/}
    </div>
  );
};

export default Home;
