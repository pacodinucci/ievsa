import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import GalleryNavbar from "@/components/GalleryNavbar";
import ScaleComponent from "@/components/ScaleComponent";
import { galleryMenuOptions as menuOptions } from "@/lib/constants";

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
              className="w-full flex-shrink-0 h-[calc(95vh)] bg-[#D9D5D0]" // Ajustar si nav/footer tienen otro alto
            >
              {option.projects.length === 1 ? (
                // Un solo proyecto → centrado verticalmente
                <div className="h-full flex items-center justify-center">
                  <ScaleComponent
                    name={option.projects[0].name}
                    description={option.projects[0].description || ""}
                    images={option.projects[0].images}
                    additional_data={option.projects[0].additional_data}
                  />
                </div>
              ) : (
                // Múltiples proyectos → scroll interno solo en esta columna
                <div className="h-full overflow-y-auto no-scrollbar snap-y snap-mandatory">
                  <div className="flex flex-col pb-16">
                    {option.projects.map((project, i) => (
                      <div key={i} className="snap-start">
                        <ScaleComponent
                          name={project.name}
                          description={project.description || ""}
                          images={project.images}
                          additional_data={project.additional_data}
                        />
                      </div>
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
