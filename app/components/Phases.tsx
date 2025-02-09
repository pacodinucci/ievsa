import React from "react";
import SectionTitle from "./SectionTitle";
import PhasesCarrousel from "./PhasesCarrousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MobilePhasesCarrousel from "./MobilePhasesCarrousel";

const Phases = () => {
  const router = useRouter();

  return (
    <div className="mb-12">
      <div className="pl-6 md:pl-24 pt-12">
        <Image
          src="/logoievsa2.png"
          alt="logo ievsa"
          width={200}
          height={100}
          className="cursor-pointer hidden md:block"
          onClick={() => router.push("/")}
        />
        <Image
          src="/logoievsa2.png"
          alt="logo ievsa"
          width={100}
          height={50}
          className="cursor-pointer block md:hidden"
          onClick={() => router.push("/")}
        />
      </div>
      <SectionTitle
        title="Etapabilidad de la obra paisajista"
        className="uppercase text-green-950 mt-8 md:mt-16 mb-12 px-0 md:px-12"
      />
      <div className="flex flex-col md:flex-row items-center pr-12">
        <p className="MyriadText w-full md:w-[50%] px-6 md:px-24 text-left">
          La materialización de una obra paisajística en el terreno requiere una
          planificación y ejecución organizada para asegurar un resultado final
          de calidad y duradero. Una gestión organizada y una comunicación clara
          entre todos los participantes aseguran que cada fase se complete con
          la máxima eficiencia, logrando un proyecto integral de paisaje que
          cumple con los objetivos y se integre con el entorno.
        </p>
        <div className="flex-1 ml-12">
          <PhasesCarrousel />
        </div>
        <div className="flex-1 hidden">
          <MobilePhasesCarrousel />
        </div>
      </div>
    </div>
  );
};

export default Phases;
