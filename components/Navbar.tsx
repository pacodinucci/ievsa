"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 700) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed flex justify-between items-center h-[12vh] w-full z-50 px-12 bg-[#CAD29D] bg-opacity-30 backdrop-blur-lg transition-opacity duration-1000 ${
        showNavbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>
        <Image src="/logoievsa2.png" alt="logo ievsa" width={80} height={0} />
      </div>
      <div>Menu</div>
    </div>
  );
};

export default Navbar;
