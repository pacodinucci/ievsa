"use client";

import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import TeamSection from "./components/TeamSection";
import FilosofiaSection from "./components/FilosofiaSection";
import Timeline from "./components/Timeline";
import FilosofiaTablet from "./components/FilosofiaTablet";
import { ContactComponent } from "./components/ContactComponent";
// import Footer from "./components/Footer";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F2F2F2]">
      <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <Landing isMobileMenuOpen={isMobileMenuOpen} />
      <TeamSection />
      <FilosofiaSection />
      <FilosofiaTablet />
      <Timeline />
    </div>
  );
};

export default Home;
