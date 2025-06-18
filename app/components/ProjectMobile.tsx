import React, { useRef, useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { projectText, proyectosSections } from "@/lib/constants";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";
import ProjectSnap from "@/components/ProjectSnap";

export const ProjectMobile = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const sectionWidth = container.offsetWidth;
    container.scrollTo({
      left: activeIndex * sectionWidth,
      behavior: "smooth",
    });
  }, [activeIndex]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerCenter = scrollContainer.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      buttonRefs.current.forEach((btn, i) => {
        if (btn) {
          const rect = btn.getBoundingClientRect();
          const distance = Math.abs(
            rect.left + rect.width / 2 - containerCenter
          );
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div
        ref={scrollRef}
        className="w-full flex gap-6 py-6 px-6 overflow-x-auto snap-x snap-mandatory no-scrollbar -mt-6"
      >
        {sections.map((label, index) => (
          <button
            key={index}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onClick={() => {
              buttonRefs.current[index]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
              });
            }}
            className={`${
              montserrat.className
            } uppercase px-4 py-2 font-medium transition snap-center shrink-0 ${
              activeIndex === index
                ? "text-green-950 border-b-2 border-green-950"
                : "text-green-950 hover:text-black"
            }`}
          >
            {label.title}
          </button>
        ))}
      </div>

      {/* SECCIONES HORIZONTALES CONTROLADAS POR MENÚ */}
      <div
        ref={contentRef}
        className="w-full overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        <div className="flex w-[400vw]">
          {proyectosSections.map((section, index) => (
            <section
              key={index}
              id={`section-${index}`}
              data-index={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="w-screen flex flex-col items-center p-8 snap-start"
            >
              <ProjectSnap
                title={section.title}
                text={section.text}
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
