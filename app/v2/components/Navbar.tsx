"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react"; // Importa el ícono de Lucide React
import { montserrat } from "@/lib/fonts";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 550) {
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
      className={`fixed flex justify-end items-center h-[12vh] w-full z-50 px-6 md:px-12 bg-[#CAD29D] bg-opacity-30 backdrop-blur-lg transition-opacity duration-1000 ${
        showNavbar ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* <div>
        <Image src="/logoievsa2.png" alt="logo ievsa" width={80} height={0} />
      </div> */}

      <div className="hidden md:block">
        <ul
          className={`${montserrat.className} uppercase flex gap-x-6 cursor-pointer text-[#4B634E]`}
        >
          <li className="hover:text-[#4B634E]/70">Proyectos</li>
          <li className="hover:text-[#4B634E]/70">Equipo</li>
        </ul>
      </div>

      <div className="block md:hidden">
        <Menu size={32} color="#4B634E" />
      </div>
    </div>
  );
};

export default Navbar;
