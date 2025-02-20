"use client";

import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import TeamSection from "./components/TeamSection";
import FilosofiaSection from "./components/FilosofiaSection";
import Timeline from "./components/Timeline";
// import Footer from "./components/Footer";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F2F2F2]">
      <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <Landing isMobileMenuOpen={isMobileMenuOpen} />
      <TeamSection />
      <FilosofiaSection />
      <Timeline />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
