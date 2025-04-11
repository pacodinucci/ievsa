"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Imagen principal con altura total = 3 imágenes chicas + espacio entre ellas */}
      <div className="relative w-full md:w-auto h-[526px] flex-1 rounded-sm overflow-hidden shadow-md">
        <Image
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white text-sm p-2">
          {images[selectedIndex].alt}
        </div>
      </div>

      {/* Miniaturas a la derecha */}
      <div className="flex md:flex-col gap-4 w-full md:w-[200px]">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative w-full h-[120px] rounded-sm overflow-hidden border-2 ${
              index === selectedIndex ? "border-black" : "border-transparent"
            } hover:border-gray-400 transition`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
