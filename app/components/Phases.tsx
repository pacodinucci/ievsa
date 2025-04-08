import React from "react";
import { useRouter } from "next/navigation";
import PhasesCarrousel from "./PhasesCarrousel";
import MobilePhasesCarrousel from "./MobilePhasesCarrousel";
import PageHeader from "@/components/PageHeader";

const Phases = () => {
  const router = useRouter();

  return (
    <div className="mb-12">
      <PageHeader title="Etapabilidad de la obra paisajista" />
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
