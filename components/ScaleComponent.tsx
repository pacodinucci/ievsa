import React from "react";
import ImageGallery from "./ImageGallery";
import { montserrat } from "@/lib/fonts";

interface ImageItem {
  src: string;
  alt: string;
}

interface ProjectDetails {
  proposal: string;
  surface: string;
  principal: string;
}

interface ScaleComponentProps {
  name: string;
  description: string;
  images: ImageItem[];
  additional_data?: ProjectDetails;
}

const ScaleComponent = ({
  name,
  description,
  images,
  additional_data,
}: ScaleComponentProps) => {
  return (
    <div className="flex flex-col gap-4 md:grid grid-cols-[15%_1fr_15%] px-8 pt-4 pb-12 md:py-12 w-full">
      <div className={`${montserrat.className}`}>
        <h3 className="text-lg font-light text-[#666666]">{name}</h3>
        <p className="text-sm italic text-[#666666]">{description}</p>
      </div>
      <div>
        <ImageGallery images={images} />
      </div>
      <div
        className={`${montserrat.className} flex flex-col items-end justify-end text-xs text-[#666666]`}
      >
        <p className="italic">- {additional_data?.proposal}</p>
        <p className="italic">- {additional_data?.surface}</p>
        <p className="italic">- {additional_data?.principal}</p>
      </div>
    </div>
  );
};

export default ScaleComponent;
