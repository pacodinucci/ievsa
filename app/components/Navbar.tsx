"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { montserrat } from "@/lib/fonts";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const menuOptions = [
  {
    title: "Equipo",
    link: "#equipo",
  },
  {
    title: "Proyectos",
    link: "#proyectos",
  },
  {
    title: "Contacto",
    link: "#contacto",
  },
  {
    title: "Clientes",
    link: "/customers",
  },
];

interface NavbarProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsMobileMenuOpen }: NavbarProps) => {
  const router = useRouter();
  const session = useSession();
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // console.log("Session --> ", session);

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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (link: string) => {
    setIsMenuOpen(false);
    router.push(link);
  };

  return (
    <nav
      className={`fixed flex justify-end items-center h-[10vh] w-full z-40 px-6 md:px-12 bg-white bg-opacity-30 backdrop-blur-lg transition-opacity duration-1000 ${
        showNavbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="hidden md:block">
        <ul className={`${montserrat.className} uppercase flex gap-x-6`}>
          {menuOptions.map((option, index) => (
            <li
              key={index}
              className={`${montserrat.className} text-[#243229] text-lg uppercase cursor-pointer font-semibold hover:text-[#243229]/60`}
              onClick={() => router.push(option.link)}
            >
              {option.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="block md:hidden">
        <Menu size={32} color="#4B634E" onClick={toggleMenu} />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              clipPath: "circle(0% at 100% 0%)", // Empieza desde un punto pequeño en la esquina superior derecha
              opacity: 0,
            }}
            animate={{
              clipPath: "circle(150% at 100% 0%)", // Expande la circunferencia para cubrir la pantalla
              opacity: 1,
            }}
            exit={{
              clipPath: "circle(0% at 100% 0%)", // Se cierra volviendo a la esquina
              opacity: 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-screen h-screen bg-[#F2F2F2] flex flex-col items-center justify-center z-50"
          >
            {/* Botón para cerrar el menú */}
            <X
              size={32}
              color="#243229"
              className="absolute top-10 right-6 cursor-pointer"
              onClick={toggleMenu}
            />

            {/* Opciones del menú */}
            <ul
              className={`${montserrat.className} uppercase text-[#243229] text-2xl font-semibold space-y-6 flex flex-col justify-center items-center`}
            >
              <div className="mb-24">
                <Image
                  src={"/logoievsa2.png"}
                  alt="logo ievsa"
                  width={200}
                  height={0}
                />
              </div>
              {menuOptions.map((option, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#ccc] transition-colors"
                  onClick={() => handleNavigation(option.link)}
                >
                  {option.title}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
