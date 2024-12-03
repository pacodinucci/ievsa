"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import { montserrat } from "@/lib/fonts";

const Landing = () => {
  const { scrollY } = useScroll();

  const [scrollYBackground, setScrollYBackground] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYBackground(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSize = useTransform(scrollY, [0, 600], [620, 100]);
  const logoTop = useTransform(scrollY, [0, 600], ["40%", "4.5%"]);
  const logoLeft = useTransform(scrollY, [0, 600], ["30%", "3%"]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      <Navbar />
      <div
        className="relative min-h-[100vh] flex justify-center items-center bg-zinc-100 overflow-hidden mx-4"
        style={{
          backgroundPositionY: `${scrollYBackground * 0.5}px`,
        }}
      >
        {/* Logo animado */}
        <motion.div
          style={{
            position: "fixed", // Fija el logo a la ventana del navegador
            width: logoSize,
            height: logoSize,
            top: logoTop,
            left: logoLeft,
          }}
          className="z-50"
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-30 flex flex-col gap-y-4 items-center"
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
              className={`${montserrat.className} uppercase text-[#243329] text-center text-xs md:text-xl tracking-wide font-medium whitespace-nowrap`}
            >
              Ingeniería en espacios verdes superpools
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Contenido principal */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollYBackground * 0.5}px)`,
          }}
        >
          {/* Imagen de fondo */}
          <Image src="/image14.png" alt="image" fill objectFit="cover" />
          <div className="bg-white/20 absolute inset-0" />
        </div>
      </div>
    </>
  );
};

export default Landing;
