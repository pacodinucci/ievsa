import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { montserrat, source } from "@/lib/fonts";
import SectionTitle from "./SectionTitle";
import { escalas, processSteps } from "@/lib/constants";

const Timeline = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Ejecutar en el primer render
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="proyectos" className="overflow-x-hidden">
      <SectionTitle
        title="¿Cómo funciona un proyecto de paisajismo?"
        className="uppercase text-green-950 mt-24 px-6 md:px-12"
      />
      {/* Línea Cronológica */}
      <div className="relative flex flex-col items-center space-y-12 p-6 md:p-12 mt-24">
        {/* Línea central */}
        <div className="absolute inset-0 left-[12%] md:left-1/2 transform -translate-x-1/2 w-1 bg-[#A69B97]"></div>

        {/* Pasos */}
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:flex-row w-full max-w-4xl relative py-0 md:py-12 cursor-pointer group ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            onClick={() => router.push(step.link)}
          >
            {/* Punto doble */}
            <div className="absolute left-[6.5%] md:left-1/2 transform -translate-x-1/2 h-5 w-5 mt-10 bg-[#F2F2F2] rounded-full z-10 flex items-center justify-center">
              <div className="h-3 w-3 bg-[#402F2E] rounded-full transition-all duration-500"></div>
            </div>

            {/* Texto */}
            {isMobile ? (
              <div
                className={`flex-1 p-4 text-right md:text-left group cursor-pointer`}
              >
                <h3
                  className={`text-2xl font-bold text-gray-800 mt-2 uppercase transition-all group-hover:text-gray-500`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-gray-600 text-xl pl-4 mt-2 transition-all group-hover:text-gray-500`}
                >
                  {step.description}
                </p>
              </div>
            ) : (
              <motion.div
                className={`flex-1 p-4 text-center md:text-left group cursor-pointer ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3
                  className={`text-2xl font-bold text-gray-800 mt-2 uppercase transition-all group-hover:text-gray-500 ${
                    index % 2 === 0 ? "text-right" : ""
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-gray-600 text-xl mt-2 transition-all group-hover:text-gray-500 ${
                    index % 2 === 0 ? "text-right" : ""
                  }`}
                >
                  {step.description}
                </p>
              </motion.div>
            )}

            {/* Imagen */}
            {isMobile ? (
              <div className="flex-1 p-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={250}
                  height={200}
                  className="group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-1000 ml-10"
                />
              </div>
            ) : (
              <motion.div
                className="flex-1 p-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={332}
                  className={`group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-1000 xl2:scale-150 ${
                    index % 2 === 0 ? "xl2:ml-28" : "xl2:-ml-28"
                  } ${index === processSteps.length - 1 && "xl2:mb-12"}`}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Sección Inferior con Imágenes */}
      <div className="relative bg-[#7F8C79] pt-12 flex justify-center">
        {/* Extensión de la línea */}
        <div className="absolute top-0 left-[12%] md:left-1/2 transform -translate-x-1/2 w-1 h-12 bg-[#A69B97]"></div>

        {/* Punto final */}
        <div className="absolute left-[12%] md:left-1/2 transform -translate-x-1/2 h-4 w-4 bg-[#7F8C79] rounded-full z-10 flex items-center justify-center">
          <div className="h-4 w-4 bg-[#402F2E] rounded-full"></div>
        </div>

        {/* Imágenes en fila */}
        <div className="flex justify-center flex-col space-x-0 space-y-12 md:space-y-0 md:space-x-6 pb-12">
          <div className="flex justify-center flex-col md:flex-row space-x-0 space-y-6 md:space-y-0 md:space-x-6 my-8 md:my-16 overflow-hidden">
            {isMobile
              ? escalas.map((item, index) => (
                  <div
                    key={index}
                    className="h-40 overflow-hidden w-[90vw] relative flex justify-center items-center"
                    onClick={() => router.push(item.link)}
                  >
                    <Image
                      src={item.src}
                      alt="escala image"
                      fill
                      className="object-cover object-center"
                    />
                    {/* <h1
                      className={`${montserrat.className} uppercase text-3xl font-medium tracking-wider text-white z-10`}
                    >
                      {item.title}
                    </h1> */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <h2
                        className={`${source.className} text-white text-3xl font-semibold tracking-wide uppercase text-center px-4`}
                      >
                        {item.title}
                      </h2>
                    </div>
                    {/* <div className="absolute inset-0 bg-black/50" /> */}
                  </div>
                ))
              : escalas.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-[99%] md:w-1/3 h-32 md:h-96 xl2:w-[30vw] xl2:h-[50vh] flex justify-center items-center overflow-hidden rounded-sm shadow-lg bg-gray-200 cursor-pointer group"
                    onClick={() => router.push(item.link)}
                  >
                    {/* Imagen */}
                    <Image
                      src={item.src}
                      alt={`Image ${index + 1}`}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Título superpuesto */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <h2
                        className={`${source.className} text-white text-3xl font-semibold tracking-wide uppercase text-center px-4`}
                      >
                        {item.title}
                      </h2>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
