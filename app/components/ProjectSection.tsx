import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { projectText, proyectosSections } from "@/lib/constants";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";
import ProjectSnap from "@/components/ProjectSnap";

export const ProjectSection = () => {
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
      title: "Arquitectura del paisaje",
      content: "Contenido del croquis preliminar...",
    },
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

      {/* MENÚ DE NAVEGACIÓN HORIZONTAL */}
      <div className="w-full flex gap-6 py-6 px-24">
        {sections.map((label, index) => (
          <button
            key={index}
            // onClick={() => {
            //   const el = document.getElementById(`section-${index}`);
            //   el?.scrollIntoView({
            //     behavior: "smooth",
            //     inline: "center",
            //     block: "start",
            //   });
            // }}
            onClick={() => {
              const container = document.querySelector(".scroll-container"); // asegurate de darle esta clase al contenedor
              const el = document.getElementById(`section-${index}`);
              if (el && container) {
                const left = el.offsetLeft;
                container.scrollTo({ left, behavior: "smooth" });
              }
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
      <div className="scroll-container w-full overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory">
        <div className="flex w-[400vw] bg-white">
          {proyectosSections.map((section, index) => (
            <section
              key={index}
              id={`section-${index}`}
              data-index={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="h-auto w-screen flex flex-col items-center p-8 snap-start"
            >
              <ProjectSnap
                title={section.title}
                text={section.text}
                description={section.description}
                images={section.images}
                index={index}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
