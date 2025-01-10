import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const phases = [
  {
    phase: 1,
    title: "Nivelación Gruesa",
    src: "/phase1.png",
    brief:
      "Una vez finalizado el proyecto paisajistico junto con la documentación necesaria para su ejecución, comienza el trabajo de limpieza del terreno y nivelación gruesa.",
  },
  {
    phase: 2,
    title: "Estacados y contenciones",
    src: "/phase2.png",
    brief:
      "Estructuras esenciales para proporcionar soporte y estabilidad a los escenarios del paisaje.",
  },
  {
    phase: 3,
    title: "Sistema de riego",
    src: "/phase3.png",
    brief:
      "Para asegurar la vitalidad del jardín, es crucial una adecuada gestión del recurso hídrico. El agua se distribuye de manera eficiente para alcanzar cada rincón del jardín, adaptándose a las necesidades de diferentes tipos de vegetación.",
  },
  {
    phase: 4,
    title: "Intervenciones estructurales",
    src: "/phase4.png",
    brief:
      "De acuerdo con el proyecto de diseño, es fundamental colaborar de manera interdisciplinaria con diversos profesionales. Por esta razón, contamos con equipos especializados en herrería, carpintería, electricidad y construcción.",
  },
  {
    phase: 5,
    title: "Sistemas eléctricos e iluminación",
    src: "/phase5.png",
    brief:
      "Diseñado para permitir el uso de los espacios durante el día como en la noche, destacando diferentes elementos mediante circuitos específicos.",
  },
  {
    phase: 6,
    title: "Delimitación de canteros",
    src: "/phase6.png",
    brief:
      "De acuerdo con los planos ejecutivos, se delimitan las áreas destinadas a los canteros, donde se plantara vegetación.",
  },
  {
    phase: 7,
    title: "Plantación",
    src: "/phase7.png",
    brief:
      "Una vez delimitados los canteros, se inicia la etapa de gestión de plantación. Según el cómputo de los planos ejecutivos, se realizan los pedidos de plantas a viveros productores, asegurando así la calidad y adaptabilidad de las especies seleccionadas.",
  },
  {
    phase: 8,
    title: "Nivelación fina",
    src: "/phase8.png",
    brief:
      "La nivelación fina es el proceso previo a la colocación del césped con tierra abonada.",
  },
  {
    phase: 9,
    title: "Colocación de césped",
    src: "/phase9.png",
    brief:
      "Una vez preparado el terreno, se procede a la colocación del césped. Este puede presentarse en panes o rollos, según la superficie que se deba cubrir, y se elige entre diferentes variedades según la textura y densidad deseadas.",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const PhasesCarrousel = () => {
  const [phaseIndex, setPhaseIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setPhaseIndex((pv) => {
          if (pv === phases.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && phaseIndex < phases.length - 1) {
      setPhaseIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && phaseIndex > 0) {
      setPhaseIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#F2F2F2] py-12 max-w-4xl mx-auto">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${phaseIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={phaseIndex} />
      </motion.div>

      <Dots phaseIndex={phaseIndex} setPhaseIndex={setPhaseIndex} />
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {phases.map((phase, index) => {
        return (
          <motion.div
            key={index}
            animate={{ scale: imgIndex === index ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[100%] shrink-0 rounded-xl relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${phase.src})`,
              padding: "2rem", // Ajusta el padding según lo necesario
            }}
          >
            {/* Contenido */}
            <div className="relative z-10 bg-black/50 text-white p-6 rounded-lg max-w-lg">
              <h4 className="text-lg font-bold">Etapa {phase.phase}</h4>
              <h2 className="text-2xl font-semibold mt-2">{phase.title}</h2>
              <p className="text-base mt-4">{phase.brief}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({
  phaseIndex,
  setPhaseIndex,
}: {
  phaseIndex: number;
  setPhaseIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {phases.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setPhaseIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === phaseIndex ? "bg-[#402F2E]" : "bg-[#A69B97]"
            }`}
          />
        );
      })}
    </div>
  );
};

export default PhasesCarrousel;
