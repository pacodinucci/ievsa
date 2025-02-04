"use client";

import React from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import TeamSection from "./components/TeamSection";
import FilosofiaSection from "./components/FilosofiaSection";
import Timeline from "./components/Timeline";

const V2Page = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Navbar />
      <Landing />
      <TeamSection />
      <FilosofiaSection />
      <Timeline />
      <div className="min-h-screen bg-[#192915]"></div>
    </div>
  );
};

export default V2Page;
