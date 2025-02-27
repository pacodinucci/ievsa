import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { X } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Iván Palacios",
    title: "Ingeniero agrónomo y fundador de IEVSA",
    role: "Encargado de gestión comercial. Coordinación y dirección de obra.",
    text: [
      "Es el pilar de nuestro equipo, destacándose por su excelente comunicación con los clientes y su trato atento con todos los integrantes del equipo.",
      "Su experiencia y compromiso aseguran que cada diseño se ejecute con presición y calidad, superando las expectativas de nuestros clientes. En IEVSA, bajo su dirección, transformamos ideas en espacios verdes funcionales, buscando siempre dejar una huella positiva en el paisaje",
    ],
    note: "El es el encargado de que  las ideas se materialicen como fueron pensadas.",
    src: "/ivan.png",
  },
  {
    name: "Iara Parisi",
    title: "Lic. en Planificación y diseño del paisaje",
    role: "Diseñadora encargada de proyecto y dirección de obra.",
    text: [
      "Líder de proyectos en IEVSA, combina su experiencia como diseñadora y docente para dirigir con pasión el equipo de diseño.",
      "Su enfoque centrado en crear espacios con identidad, integra de manera equilibrada los deseos del comensal con los principios del estudio sobre la intervención en el paisaje natural. Comprometiéndose a respetar el entorno, asegurando que cada proyecto ofrezca un espacio habitable y funcional, sin perder de vista la importancia de transformarlo además en hábitat para flora y fauna local.",
    ],
    note: "Ella es la encargada de transmitir las intenciones proyectuales.",
    src: "/iara.png",
  },
  {
    name: "Melany Vitalevi",
    title: "Lic. en planificación y diseño del paisaje",
    role: "Diseñadora proyectista y encargada de documentación de obra.",
    text: [
      "Dibujante y proyectista en IEVSA, especializada en el diseño integrando diferentes disciplinas.",
      "Sus planos y detalles técnicos cumplen rigurosamente con los estándares de calidad y seguridad según el sector, y gracias a su visión del diseño y representación gráfica, logra una integración continua entre lo construido y el entorno natural. Encargada de la documentación necesaria para garantizar que cada proyecto se ejecute y construya con la máxima precisión, cuidando el ecosistema y promoviendo la sostenibilidad.",
    ],
    note: "Ella es la encargada de proyectar y bajar al plano las ideas.",
    src: "/meli.png",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const equipoRef = useRef(null);
  const equipoIsInView = useInView(equipoRef, { amount: 0.3, once: true });
  const [expandedBox, setExpandedBox] = useState<string | null>(null);

  return (
    <div className="py-16 px-0 md:px-12 pb-6 md:pb-40 bg-[#D9D5D0]">
      <motion.div
        ref={ref}
        initial={{ x: -200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="hidden md:block"
      >
        <p className="MyriadFont max-w-full md:w-[80%] px-6 md:px-24 py-6 md:p-24 text-center md:text-left">
          Diseñamos espacios sensoriales para ser vividos desde una mirada
          antrópica y natural, entendemos el paisaje cómo un conector entre la
          arquitectura y el territorio que habitamos.
        </p>
      </motion.div>
      <div className="block md:hidden">
        <p className="MyriadFont max-w-full md:w-[80%] px-6 py-6 text-left">
          Diseñamos espacios sensoriales para ser vividos desde una mirada
          antrópica y natural, entendemos el paisaje cómo un conector entre la
          arquitectura y el territorio que habitamos.
        </p>
      </div>
      <div>
        <SectionTitle
          title="Equipo"
          className="mt-12 text-green-950 uppercase"
        />
        <motion.div
          ref={equipoRef}
          initial={{ y: 200, opacity: 0 }}
          animate={equipoIsInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="mt-12 md:px-12 flex justify-between flex-col md:flex-row items-center gap-y-8 gap-x-4"
        >
          {team.map((item) => (
            <motion.div
              key={item.name}
              layoutId={item.name}
              className={`relative bg-cover bg-center h-96 w-[90vw] md:w-96 xl2:h-[500px] xl2:w-[500px] rounded-sm flex items-end justify-center text-white text-xl font-bold shadow-md shadow-neutral-800 hover:shadow-[#8e8f87] transition-shadow duration-300 cursor-pointer ${
                expandedBox === item.name ? "z-50" : ""
              }`}
              style={{
                backgroundImage: `url(${item.src})`,
              }}
              onClick={() => setExpandedBox(item.name)}
            >
              <div className="pt-4 rounded-b-sm bg-neutral-600/70 w-full h-28">
                {/* <h3 className="text-2xl tracking-wide font-extralight"> */}
                <h3 className="MyriadTeamSection px-2 py-2 w-full rounded-sm rounded-br-none rounded-bl-none">
                  {item.name}
                </h3>
                {/* <p className="text-sm tracking-wider font-thin"> */}
                <p className="text-myriad-sm md:text-myriad-md lg:text-myriad-lg xl:text-myriad-xl px-2 py-1 pb-2 w-full rounded-sm rounded-tl-none rounded-r-none">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <AnimatePresence>
          {expandedBox && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedBox(null)}
              />
              <motion.div
                layoutId={expandedBox}
                className="fixed h-[95%] md:h-[86%] w-[90%] md:w-[40%] inset-x-5 md:inset-x-10 top-5 md:top-20 mx-auto z-50 shadow-lg bg-white bg-cover bg-center rounded-sm"
              >
                <button
                  className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 z-50"
                  onClick={() => setExpandedBox(null)}
                >
                  <X />
                </button>

                <div className="min-h-full flex flex-row w-full rounded-lg text-[#8C8C8C] MyriadModal relative">
                  <div className="w-full h-full p-8 flex flex-col justify-between absolute top-0 left-0 z-20 bg-white/70 md:static">
                    <h2 className="text-4xl font-bold mb-4">
                      {team.find((box) => box.name === expandedBox)?.name}
                    </h2>
                    <p className="italic text-base mb-4">
                      {team.find((box) => box.name === expandedBox)?.title}
                    </p>
                    <h3 className="font-bold text-base mb-2">
                      {team.find((box) => box.name === expandedBox)?.role}
                    </h3>
                    {team
                      .find((box) => box.name === expandedBox)
                      ?.text.map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-sm">
                          {paragraph}
                        </p>
                      ))}
                    <p className="italic text-sm mt-6">
                      {team.find((box) => box.name === expandedBox)?.note}
                    </p>
                  </div>

                  <div className="w-full relative">
                    <Image
                      src={
                        team.find((box) => box.name === expandedBox)
                          ?.src as string
                      }
                      alt="IEVSA team member"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      {/* <div>
        <SectionTitle
          title="Filosofía y valores"
          className="uppercase text-green-950 mt-60"
        />
        <p className="MyriadValores w-[80%] px-24 p-24">
          Para desarrollar una propuesta de diseño, es necesario abordar
          diversos aspectos que permitan una visión integral del territorio.
          Esto implica comprender su geomorfología, hidrología, composición
          florística y la relevancia ecosistémica, considerando la fauna que lo
          habita. Este análisis es crucial independientemente de la escala, ya
          que nos centramos en una intervención macro, en la que los pequeños
          espacios desempeñan su rol como parche conector dentro de la matriz
          general que es el territorio urbano.
        </p>
      </div> */}
      {/* <div>
        El entendimiento del territorio cómo un ecosistema permite tener una
        actitud conciliadora y respetuosa con el entorno, interviniendo los
        espacios con el men impacto posible sobre nuestros ecosistemas.
      </div> */}
    </div>
  );
};

export default TeamSection;
