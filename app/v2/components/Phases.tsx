import React from "react";
import SectionTitle from "./SectionTitle";
import PhasesCarrousel from "./PhasesCarrousel";

const Phases = () => {
  return (
    <div>
      <SectionTitle
        title="Etapabilidad de la obra paisajista"
        className="uppercase text-green-950 mt-24 mb-12 px-12"
      />
      <div className="flex items-center pr-12">
        <p className="MyriadText w-[50%] px-24">
          La materialización de una obra paisajística en el terreno requiere una
          planificación y ejecución organizada para asegurar un resultado final
          de calidad y duradero. Una gestión organizada y una comunicación clara
          entre todos los participantes aseguran que cada fase se complete con
          la máxima eficiencia, logrando un proyecto integral de paisaje que
          cumple con los objetivos y se integre con el entorno.
        </p>
        <div className="flex-1">
          <PhasesCarrousel />
        </div>
      </div>
    </div>
  );
};

export default Phases;
