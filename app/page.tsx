"use client";

import React from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import TeamSection from "./components/TeamSection";
import FilosofiaSection from "./components/FilosofiaSection";
import Timeline from "./components/Timeline";
// import Footer from "./components/Footer";

const V2Page = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Navbar />
      <Landing />
      <TeamSection />
      <FilosofiaSection />
      <Timeline />
      {/* <Footer /> */}
    </div>
  );
};

export default V2Page;
