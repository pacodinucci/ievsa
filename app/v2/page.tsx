"use client";

import React from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
// import TextReveal from "./components/TextReveal";
import MotionEffect from "./components/MotionEffect";

const V2Page = () => {
  return (
    <div className="bg-[#cfd1c3]">
      <Navbar />
      <Landing />
      <MotionEffect />
      <div className="h-[28vh] bg-neutral-300"></div>
      <div className="min-h-screen bg-[#192915]"></div>
    </div>
  );
};

export default V2Page;
