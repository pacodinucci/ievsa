import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { team } from "@/lib/constants";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const equipoRef = useRef(null);
  const equipoIsInView = useInView(equipoRef, { amount: 0.3, once: true });
  const [expandedBox, setExpandedBox] = useState<string | null>(null);

  return (
    <div className="py-16 px-0 md:px-12 pb-6 md:pb-12 bg-[#ECEBE9]">
      <motion.div
        ref={ref}
        initial={{ x: -200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="hidden md:block relative"
      >
        <p className="MyriadFont max-w-full md:w-[80%] px-6 md:px-24 py-6 md:p-24 text-center md:text-left leading-relaxed">
          Planificamos y diseñamos espacios para ser habitados, priorizando una
          mirada integral donde el bienestar, el cuidado natural y el
          aprovechamiento de los espacios es un compromiso. Entendemos al
          paisaje como un nexo entre la arquitectura y el territorio.
        </p>
        <div id="equipo" className="absolute bottom-16 left-0 opacity-0" />
      </motion.div>
      <div className="block md:hidden">
        <p className="MyriadValores max-w-full md:w-[80%] px-6 py-6 text-left">
          Planificamos y diseñamos espacios para ser habitados, priorizando una
          mirada integral donde el bienestar, el cuidado natural y el
          aprovechamiento de los espacios es un compromiso. Entendemos al
          paisaje como un nexo entre la arquitectura y el territorio.
        </p>
      </div>
      <div>
        <SectionTitle
          title="Equipo"
          className="px-6 md:px-0 mt-12 text-green-950 uppercase"
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
              className={`border-4 hover:shadow-lg shadow-black border-[#F2F2F2] rounded-sm relative bg-cover bg-center h-96 w-[90vw] md:w-96 xl2:h-[500px] xl2:w-[500px] flex items-end justify-center text-white text-xl font-bold transition-shadow duration-300 cursor-pointer ${
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
    </div>
  );
};

export default TeamSection;
