import React, { useEffect, useRef, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { proyectosSections } from "@/lib/constants";
import Image from "next/image";
import { ibm, montserrat } from "@/lib/fonts";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectMobile = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / sectionWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const sectionWidth = container.offsetWidth;
    container.scrollTo({
      left: index * sectionWidth,
      behavior: "smooth",
    });
  };

  const goLeft = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const goRight = () => {
    if (activeIndex < proyectosSections.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <PageHeader title="Proyecto" />

      {/* TÍTULO DINÁMICO CON FLECHAS */}
      <div className="h-16 flex justify-center items-center relative">
        {proyectosSections.map((section, i) => (
          <h2
            key={i}
            className={`${
              montserrat.className
            } uppercase absolute text-xl text-green-950 transition-opacity duration-500 ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {section.title}
          </h2>
        ))}

        {/* Flechas de navegación */}
        <button
          onClick={goLeft}
          className="absolute left-2 p-2 text-green-950 disabled:opacity-30"
          disabled={activeIndex === 0}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={goRight}
          className="absolute right-2 p-2 text-green-950 disabled:opacity-30"
          disabled={activeIndex === proyectosSections.length - 1}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* CONTENEDOR SCROLLABLE */}
      <div
        ref={scrollRef}
        className="overflow-x-auto snap-x snap-mandatory flex w-full no-scrollbar"
      >
        {proyectosSections.map((section, index) => (
          <div
            key={index}
            className="w-screen shrink-0 snap-start p-4 flex flex-col items-center"
          >
            <p className={`${ibm.className} text-lg font-medium mb-2`}>
              {section.text}
            </p>
            <p
              className={`${ibm.className} text-base italic text-gray-700 mb-4`}
            >
              {section.description}
            </p>

            {/* Mostrar imágenes si existen */}
            <div className="flex flex-col gap-4 items-center">
              {section.images?.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Imagen ${i + 1}`}
                  width={500}
                  height={300}
                  className="rounded shadow"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
