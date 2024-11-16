"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative min-h-[97vh] flex justify-center items-center bg-zinc-100 overflow-hidden mx-4"
      style={{
        backgroundPositionY: `${scrollY * 0.5}px`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/garden1.jpg"
          alt="gardenievsa"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="bg-white/40 absolute inset-0" />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-30 flex flex-col gap-y-4"
      >
        <Image
          src="/logoievsa2.png"
          alt="logo ievsa"
          width={500}
          height={300}
        />
        <h2 className="uppercase text-[#243329] text-xl tracking-wide">
          Ingeniería en espacios verdes superpools
        </h2>
      </motion.div>
    </div>
  );
};

export default Landing;
