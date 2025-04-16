import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import GalleryNavbar from "@/components/GalleryNavbar";
import ScaleComponent from "@/components/ScaleComponent";
import {
  empresarialImages,
  residencialImages,
  territorialImages,
} from "@/lib/constants";

const menuOptions = [
  {
    title: "Residencial",
    images: residencialImages,
  },
  {
    title: "Empresarial",
    images: empresarialImages,
  },
  {
    title: "Territorial",
    images: territorialImages,
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
              className="w-full flex-shrink-0 h-full flex items-center justify-center text-3xl font-semibold bg-gray-100"
            >
              <ScaleComponent images={option.images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryContent;
