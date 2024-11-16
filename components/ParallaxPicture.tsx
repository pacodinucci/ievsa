"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const ParallaxPicture = () => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const offset = window.scrollY - rect.top;
        setScrollY(offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={parallaxRef} className="relative h-[70vh] mx-4 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`, // Movimiento parallax
          height: "180%", // La imagen es significativamente más alta que el contenedor
          top: "-40%", // La imagen comienza más arriba para cubrir siempre el contenedor
        }}
      >
        <Image
          src="/garden4.jpg"
          alt="ievsa garden"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default ParallaxPicture;
