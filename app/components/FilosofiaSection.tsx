import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const images = [
  "/IG1.png",
  "/IG2.png",
  "/IG3.png",
  "/IG4.png",
  "/IG5.png",
  "/IG6.png",
];

const FilosofiaSection = () => {
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
    <div
      className="relative bg-cover bg-center h-screen pt-12 px-12"
      style={{ backgroundImage: "url('/image13.png')" }}
    >
      <div className="absolute inset-0 bg-[#D9D5D0] z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 h-screen">
        <SectionTitle
          title="Filosofía y valores"
          className="uppercase text-green-950 mt-12"
        />
        <div className="flex items-center">
          <p className="MyriadValores w-[70%] px-24 p-24">
            Para desarrollar una propuesta de diseño, es necesario abordar
            diversos aspectos que permitan una visión integral del territorio.
            Esto implica comprender su geomorfología, hidrología, composición
            florística y la relevancia ecosistémica, considerando la fauna que
            lo habita. Este análisis es crucial independientemente de la escala,
            ya que nos centramos en una intervención macro, en la que los
            pequeños espacios desempeñan su rol como parche conector dentro de
            la matriz general que es el territorio urbano.
          </p>
          <div className="flex items-center justify-center w-full md:w-auto h-96 mt-6 md:mt-0">
            {images && (
              <Image
                src={images[currentImageIndex]}
                alt={`Imagen ${currentImageIndex + 1}`}
                width={1000}
                height={500}
                className="shadow-md object-cover w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilosofiaSection;
