import React, { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { philoImages as images } from "@/lib/constants";

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
      className="relative min-h-screen pt-12 pb-12 md:pb-0 px-0 md:px-12 md:hidden xl:block bg-[#ECEBE9]"
      // style={{ backgroundImage: "url('/image13.png')" }}
    >
      {/* <div className="absolute inset-0 bg-[#D9D5D0] z-0"></div> */}

      {/* Contenido */}
      <div className="relative z-10 min-h-screen">
        <SectionTitle
          title="Filosofía y valores"
          className="px-6 md:px-0 uppercase text-green-950 mt-12"
        />
        <div className="flex flex-col md:flex-row items-center">
          <p className="MyriadValoresXl2 w-[65%] px-24 p-24 hidden md:hidden xl2:block">
            Para desarrollar una propuesta de diseño, es necesario abordar
            diversos aspectos que permitan una visión integral del territorio.
            Esto implica comprender su geomorfología, hidrología, composición
            florística y la relevancia ecosistémica, considerando la fauna que
            lo habita. Este análisis es crucial independientemente de la escala,
            ya que nos centramos en una intervención macro, en la que los
            pequeños espacios desempeñan su rol como parche conector dentro de
            la matriz general que es el territorio urbano.
          </p>
          <p className="MyriadValores w-[70%] px-24 p-24 hidden md:block xl2:hidden">
            Para desarrollar una propuesta de diseño, es necesario abordar
            diversos aspectos que permitan una visión integral del territorio.
            Esto implica comprender su geomorfología, hidrología, composición
            florística y la relevancia ecosistémica, considerando la fauna que
            lo habita. Este análisis es crucial independientemente de la escala,
            ya que nos centramos en una intervención macro, en la que los
            pequeños espacios desempeñan su rol como parche conector dentro de
            la matriz general que es el territorio urbano.
          </p>
          <p className="MyriadValoresMobile w-full px-6 py-6 md:hidden block xl2:hidden">
            Para desarrollar una propuesta de diseño, es necesario abordar
            diversos aspectos que permitan una visión integral del territorio.
            Esto implica comprender su geomorfología, hidrología, composición
            florística y la relevancia ecosistémica, considerando la fauna que
            lo habita. Este análisis es crucial independientemente de la escala,
            ya que nos centramos en una intervención macro, en la que los
            pequeños espacios desempeñan su rol como parche conector dentro de
            la matriz general que es el territorio urbano.
          </p>
          <div className="flex items-center justify-center w-[90%] h-[90%] md:w-auto md:h-96 xl2:h-[550px] mt-6 md:mt-0">
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
