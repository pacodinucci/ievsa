"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { source } from "@/lib/fonts";

interface LandingProps {
  isMobileMenuOpen: boolean;
}

const Landing = ({ isMobileMenuOpen }: LandingProps) => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  // const [siMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detecta si es móvil (menor a 768px)
    };

    handleResize(); // Ejecutar al cargar la página
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoSize = useTransform(
    scrollY,
    [0, 600],
    isMobile ? [350, 100] : [620, 120]
  );

  const logoLeft = useTransform(
    scrollY,
    [0, 600],
    isMobile ? ["5%", "3%"] : ["30%", "3%"]
  );

  const logoTop = useTransform(scrollY, [0, 600], ["40%", "3.2%"]);

  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      <div className="relative min-h-[100dvh] flex justify-center items-center bg-[#F2F2F2] overflow-hidden mx-4">
        {/* Líneas horizontales animadas */}
        <motion.span
          className={`w-[90%] bg-green-950 h-[1.5px] absolute top-10 ${
            isMobile ? "left-5" : "left-20"
          }`}
          style={{
            opacity: textOpacity,
          }}
        />
        <motion.span
          className={`w-[90%] bg-green-950 h-[1.5px] absolute bottom-10 ${
            isMobile ? "left-5" : "left-20"
          }`}
          style={{
            opacity: textOpacity,
          }}
        />

        {/* Logo animado */}
        <motion.div
          style={{
            position: "fixed",
            width: logoSize,
            height: logoSize,
            top: logoTop,
            left: logoLeft,
          }}
          className={`${
            isMobileMenuOpen
              ? "opacity-0 scale-95 z-20 transition-all duration-300"
              : "opacity-100 scale-100 z-40"
          }`}
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-40 flex flex-col gap-y-4 items-center"
          >
            <Image
              src="/logoievsa2.png"
              alt="logo ievsa"
              width={500}
              height={300}
              className="w-3/4 md:w-4/5"
            />
            <motion.h2
              style={{ opacity: textOpacity }}
              className={`${source.className} uppercase text-[#243329] text-center text-xs md:text-2xl tracking-wider font-[300] whitespace-nowrap`}
            >
              Ingeniería en espacios verdes S.A.
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Landing;
