import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import Thankyou from "./Thankyou";

export default function Footer() {
  return (
    <div className="font-poppins">
      <div className="flex justify-between items-center">
        <div className="w-full h-[0.5px] border border-black" />
        <img src={logo} className="w-[40px] ml-2 mr-2" alt="" />
        <div className="w-full h-[0.5px] border  border-black " />
      </div>
      <div className="mb-5 flex justify-between">
        <p>Abyan Setya</p>
        <Thankyou />
      </div>
    </div>
  );
}
