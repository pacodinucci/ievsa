"use client";

import React, { useState } from "react";
import GalleryNavbar from "@/components/GalleryNavbar";
import {
  empresarialImages,
  residencialImages,
  territorialImages,
} from "@/lib/constants";
import ScaleComponent from "@/components/ScaleComponent";

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

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="overflow-hidden">
      <GalleryNavbar
        onSelect={(index) => setCurrentIndex(index)}
        currentIndex={currentIndex}
      />

      {/* Slider container */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {menuOptions.map((option, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full flex items-center justify-center text-3xl font-semibold bg-gray-100"
            >
              {/* {option.title} */}
              <ScaleComponent images={option.images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
