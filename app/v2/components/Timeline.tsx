import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Permit",
    description:
      "We'll prepare and submit a formal application to your local planning department.",
    image: "/image1.png", // Si no tiene imagen
    time: "One Week Later",
  },
  {
    id: 2,
    title: "Site prep",
    description:
      "We'll get your yard ready by installing the foundation and utility connections.",
    image: "/image2.png",
    time: "Approx. Two Weeks Later",
  },
  {
    id: 3,
    title: "Transport",
    description:
      "Your backyard begins its journey from our factory to your home.",
    image: "/image3.png",
    time: "Two Weeks Later",
  },
  {
    id: 4,
    title: "Crane in",
    description:
      "In just a few hours, we crane in the backyard onto its foundation.",
    image: "/image4.png",
    time: "After Crane-in Day",
  },
  {
    id: 5,
    title: "Wrap up",
    description:
      "We connect the backyard to the grid, test everything, and ensure it's good to go.",
    image: "/image5.png",
    time: "One Day Later",
  },
];

const escalas = [
  {
    title: "Residencial",
    src: "/residencial.png",
  },
  {
    title: "Empresarial",
    src: "/empresarial.png",
  },
  {
    title: "Territorial",
    src: "/territorial.png",
  },
];

const Timeline = () => {
  return (
    <>
      {/* Línea Cronológica */}
      <div className="relative flex flex-col items-center space-y-12 p-6 md:p-12 mt-24">
        {/* Línea central */}
        <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-1 bg-[#A69B97]"></div>

        {/* Pasos */}
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex flex-col md:flex-row w-full max-w-4xl relative ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Punto doble */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-5 w-5 mt-10 bg-[#F2F2F2] rounded-full z-10 flex items-center justify-center">
              <div className="h-3 w-3 bg-[#402F2E] rounded-full"></div>
            </div>

            {/* Texto */}
            <motion.div
              className={`flex-1 p-4 text-center md:text-left ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              <span className="text-sm font-bold uppercase text-gray-500">
                {step.time}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>

            {/* Imagen */}
            <motion.div className="flex-1 p-4">
              <Image
                src={step.image}
                alt={step.title}
                width={300}
                height={200}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Sección Inferior con Imágenes */}
      <div className="relative bg-[#7F8C79] pt-12 flex justify-center">
        {/* Extensión de la línea */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-[#A69B97]"></div>

        {/* Punto final */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-4 w-4 bg-[#7F8C79] rounded-full z-10 flex items-center justify-center">
          <div className="h-4 w-4 bg-[#402F2E] rounded-full"></div>
        </div>

        {/* Imágenes en fila */}
        <div className="flex justify-center space-x-12 pb-12 mt-12">
          {escalas.map((item, index) => (
            <div
              key={index}
              className="relative w-1/3 h-96 flex justify-center items-center overflow-hidden rounded-sm shadow-lg bg-gray-200 cursor-pointer"
            >
              {/* Imagen */}
              <Image
                src={item.src}
                alt={`Image ${index + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
              {/* Título superpuesto */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <h2 className="text-white text-3xl font-semibold tracking-wide uppercase text-center px-4">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Timeline;
