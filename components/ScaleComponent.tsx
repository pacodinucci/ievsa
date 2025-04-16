import React from "react";
import ImageGallery from "./ImageGallery";
import { montserrat } from "@/lib/fonts";

interface ImageItem {
  src: string;
  alt: string;
}

interface ScaleComponentProps {
  images: ImageItem[];
}

const ScaleComponent = ({ images }: ScaleComponentProps) => {
  return (
    <div className="grid grid-cols-[15%_1fr_15%] px-8 py-12 w-full">
      <div className={`${montserrat.className}`}>
        <h3 className="text-lg font-light text-[#666666]">Casa Camps</h3>
        <p className="text-sm italic text-[#666666]">Paisaje integrador</p>
      </div>
      <div>
        <ImageGallery images={images} />
      </div>
      <div
        className={`${montserrat.className} flex flex-col items-end justify-end text-xs text-[#666666]`}
      >
        <p className="italic">- Propuesta integral de paisaje</p>
        <p className="italic">- Sup. del terreno 1000 m²</p>
        <p className="italic">- Comitente particular</p>
      </div>
    </div>
  );
};

export default ScaleComponent;
