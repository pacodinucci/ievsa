"use client";

import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { projectText, proyectosSections } from "@/lib/constants";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";
import ProjectSnap from "@/components/ProjectSnap";

const ProyectoPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight;
      const isScrollingDown = e.deltaY > 0;

      if (isAtBottom && isScrollingDown) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY, behavior: "instant" });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const sections = [
    {
      title: "Croquis Preliminar",
      content: "Contenido del croquis preliminar...",
    },
    { title: "Anteproyecto", content: "Contenido del anteproyecto..." },
    {
      title: "Proyecto Ejecutivo",
      content: "Contenido del proyecto ejecutivo...",
    },
  ];

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <PageHeader title="Proyecto" />
      <div
        ref={scrollRef}
        className="overflow-y-scroll snap-y snap-mandatory h-[70vh] no-scrollbar"
      >
        {projectText.map((paragraph, index) => (
          <section
            key={index}
            className="snap-start h-[70vh] w-[90%] ml-24 flex items-center relative"
          >
            {index === 0 && (
              <Image
                src="/snapimg2.png"
                alt="Fondo decorativo"
                className="absolute right-0 top-0 h-full object-contain opacity-20 pointer-events-none rounded-lg"
                width={1000}
                height={100}
              />
            )}
            {index === 2 && (
              <Image
                src="/snapimg3.png"
                alt="Fondo decorativo"
                className="absolute right-0 top-0 h-full object-contain opacity-20 pointer-events-none rounded-lg"
                width={1000}
                height={100}
              />
            )}
            <p className="MyriadText w-[60%] text-lg text-gray-800 z-40">
              {paragraph}
            </p>
          </section>
        ))}
      </div>

      {/* MENÚ DE NAVEGACIÓN HORIZONTAL */}
      <div className="w-full flex gap-6 py-6 px-24 bg-white">
        {sections.map((label, index) => (
          <button
            key={index}
            onClick={() => {
              const el = document.getElementById(`section-${index}`);
              el?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest",
              });
            }}
            className={`${
              montserrat.className
            } uppercase px-4 py-2 font-medium transition border-b-2 ${
              activeIndex === index
                ? "text-black border-black"
                : "text-gray-700 border-transparent hover:text-black hover:border-black"
            }`}
          >
            {label.title}
          </button>
        ))}
      </div>

      {/* SECCIONES HORIZONTALES CONTROLADAS POR MENÚ */}
      <div className="w-full overflow-x-auto scroll-smooth no-scrollbar">
        <div className="flex w-[300vw]">
          {proyectosSections.map((section, index) => (
            <section
              key={index}
              id={`section-${index}`}
              data-index={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="h-[90vh] w-screen flex flex-col justify-center items-center bg-white p-8"
            >
              <ProjectSnap
                title={section.title}
                text={section.text}
                images={section.images}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectoPage;
