"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";

interface PictureComponentProps {
  images?: string[];
  header?: string;
  text?: string;
}

const PictureComponent = ({ images, header, text }: PictureComponentProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images?.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images?.length, images]);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-x-24 max-w-[85vw] md:max-w-[70vw] mx-auto my-24">
      <div className="flex flex-col gap-y-4 md:max-w-[70%]">
        <h2
          className={`${montserrat.className} uppercase text-neutral-500 text-3xl tracking-wide`}
        >
          {header}
        </h2>
        <p
          className={`${montserrat.className} text-lg text-neutral-800 tracking-wide`}
        >
          {text}
        </p>
        <button
          className={`${montserrat.className} w-1/2 md:w-1/3 mx-auto uppercase px-4 border-2 border-[#4B634E] text-[#4B634E] py-2 hover:bg-[#4B634E] hover:text-white transition duration-300 ease-in-out`}
        >
          Conocé el equipo
        </button>
      </div>
      <div className="flex items-center justify-center w-full md:w-auto h-72 mt-6 md:mt-0">
        {images && (
          <Image
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            width={500}
            height={300}
            className="shadow-md object-cover w-full h-full max-h-72 min-w-72"
          />
        )}
      </div>
    </div>
  );
};

export default PictureComponent;
