import React from "react";
import Yemmy_Meet_logo from "../assets/Yemmy_Meet_logo.png";
import { Cookie } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-base-200 w-full h-14">
      <div className="hidden md:flex mx-2 h-14 justify-between items-center">
        <div className="flex justify-center items-center space-x-2 outline-1 outline-pink-900 px-2 outline rounded-md p-1 bg-base-300">
          <div className="size-5 rounded-lg bg-primary/10 flex items-center justify-center">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div className="font-bold text-lg">Yemmy Meet</div>
          <img src={Yemmy_Meet_logo} alt="logo" className="size-8 rounded-lg" />
        </div>
        <div className="flex space-x-28 border-t border-error px-4 border-b p-1 pt-2 pb-2 rounded-lg text-accent">
          <div className="border-t border-primary transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b">
            Features
          </div>
          <div className="border-t border-primary transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b">
            Solutions
          </div>
          <div className="border-t border-primary transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b">
            Resources
          </div>
          <div className="border-t border-primary transition-all transform duration-300 ease-in-out hover:scale-90 cursor-pointer hover:border-base-content hover:border-b">
            Pricing
          </div>
        </div>
        <div className="border p-1 text-sm bg-blue-900 px-2 rounded-md hover:cursor-grab">Get Started</div>
      </div>
    </div>
  );
};

export default Navbar;
