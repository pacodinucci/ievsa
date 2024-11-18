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
        const offset = -rect.top; // Calcula el desplazamiento relativo al contenedor
        setScrollY(offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="relative h-[70vh] mx-4 overflow-hidden" // Contenedor con overflow oculto
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${Math.min(scrollY * 0.3, 100)}px)`, // Permite que la imagen siga moviéndose
          height: "150%", // La imagen sigue siendo más alta para evitar espacios en blanco
          top: "-25%", // Comienza fuera del contenedor para cubrir cualquier espacio superior
        }}
      >
        <Image
          src="/garden4.jpg"
          alt="ievsa garden"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="bg-white/40 absolute inset-0" />
    </div>
  );
};

export default ParallaxPicture;
