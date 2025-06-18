import React, { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { philoImages as images } from "@/lib/constants";

const FilosofiaTablet = () => {
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
    <div className="relative min-h-screen py-12 md:pb-0 px-0 md:px-12 hidden md:block xl:hidden bg-[#ECEBE9]">
      <SectionTitle
        title="Filosofía y valores"
        className="uppercase text-green-950 mt-12"
      />
      <div className="relative w-[90%] mx-auto">
        <div className="relative w-full">
          {/* Imagen posicionada con float */}
          <div className="w-[40%] md:w-[30%] float-right ml-8 mb-2 mt-6">
            <Image
              src={images[currentImageIndex]}
              alt={`Imagen ${currentImageIndex + 1}`}
              width={500}
              height={400}
              className="shadow-md object-cover w-full h-auto rounded-md"
              style={{ shapeOutside: "margin-box", float: "right" }}
            />
          </div>
          {/* Texto que rodea la imagen */}
          <p className="MyriadValores text-justify leading-relaxed mt-6">
            Para desarrollar una propuesta de diseño, es necesario abordar
            diversos aspectos que permitan una visión integral del territorio.
            Esto implica comprender su geomorfología, hidrología, composición
            florística y la relevancia ecosistémica, considerando la fauna que
            lo habita. Este análisis es crucial independientemente de la escala,
            ya que nos centramos en una intervención macro, en la que los
            pequeños espacios desempeñan su rol como parche conector dentro de
            la matriz general que es el territorio urbano.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilosofiaTablet;
