import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { phases } from "@/lib/constants";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const MobilePhasesCarrousel = () => {
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
    <div className="relative overflow-hidden bg-[#F2F2F2] py-12 w-[80vw] mx-auto">
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
            className="aspect-video w-[100%] shrink-0 rounded-sm relative bg-cover bg-center h-[500px]"
            style={{
              backgroundImage: `url(${phase.src})`,
              padding: "2rem", // Ajusta el padding según lo necesario
            }}
          >
            {/* Contenido */}
            <div className="relative z-10 bg-black/50 text-white p-6 rounded-sm max-w-lg">
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

export default MobilePhasesCarrousel;
