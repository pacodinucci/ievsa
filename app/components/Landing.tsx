"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { source } from "@/lib/fonts";

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

  const logoSize = useTransform(scrollY, [0, 600], [620, 120]);
  const logoTop = useTransform(scrollY, [0, 600], ["40%", "4.5%"]);
  const logoLeft = useTransform(scrollY, [0, 600], ["30%", "3%"]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      <div
        className="relative min-h-[100vh] flex justify-center items-center bg-[#F2F2F2] overflow-hidden mx-4"
        style={{
          backgroundPositionY: `${scrollYBackground * 0.5}px`,
        }}
      >
        {/* Líneas horizontales animadas */}
        <motion.span
          className="w-[90%] bg-green-950 h-[1.5px] absolute top-10 left-20"
          style={{
            opacity: textOpacity,
          }}
        />
        <motion.span
          className="w-[90%] bg-green-950 h-[1.5px] absolute bottom-10 left-20"
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
              className={`${source.className} uppercase text-[#243329] text-center text-xs md:text-2xl tracking-wider font-[300] whitespace-nowrap`}
            >
              Ingeniería en espacios verdes superpools
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Landing;
