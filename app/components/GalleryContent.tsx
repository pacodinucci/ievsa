import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import GalleryNavbar from "@/components/GalleryNavbar";
import ScaleComponent from "@/components/ScaleComponent";
import {
  empresarialProjects,
  residencialProjects,
  territorialProjects,
} from "@/lib/constants";

const menuOptions = [
  {
    title: "Residencial",
    images: residencialProjects,
  },
  {
    title: "Empresarial",
    images: empresarialProjects,
  },
  {
    title: "Territorial",
    images: territorialProjects,
  },
];

const GalleryContent = () => {
  const searchParams = useSearchParams();
  const initialIndex = parseInt(searchParams.get("index") || "0", 10);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const indexFromUrl = parseInt(searchParams.get("index") || "0", 10);
    if (indexFromUrl !== currentIndex) {
      setCurrentIndex(indexFromUrl);
    }
  }, [searchParams]);

  return (
    <div className="overflow-hidden">
      <GalleryNavbar
        onSelect={(index) => setCurrentIndex(index)}
        currentIndex={currentIndex}
      />

      {/* Slider container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {menuOptions.map((option, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-[calc(100vh)] bg-[#D9D5D0]" // Ajustar si nav/footer tienen otro alto
            >
              {option.images.length === 1 ? (
                // Un solo proyecto → centrado verticalmente
                <div className="h-full flex items-center justify-center">
                  <ScaleComponent
                    name={option.images[0].name}
                    description={option.images[0].description || ""}
                    images={option.images[0].images}
                    //   details={option.images[0].details}
                  />
                </div>
              ) : (
                // Múltiples proyectos → scroll interno solo en esta columna
                <div className="h-full overflow-y-auto no-scrollbar">
                  <div className="flex flex-col gap-16">
                    {option.images.map((project, i) => (
                      <ScaleComponent
                        key={i}
                        name={project.name}
                        description={project.description || ""}
                        images={project.images}
                        //   details={project.details}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryContent;
