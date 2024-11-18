import { montserrat } from "@/lib/fonts";
import React from "react";

const LandingContent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-x-24 max-w-[85vw] md:max-w-[70vw] mx-auto my-24">
      <div className="flex flex-col gap-y-4 md:max-w-[70%]">
        <h3
          className={`${montserrat.className} uppercase text-neutral-500 text-3xl tracking-wide`}
        >
          Proyectos para ser vividos
        </h3>
        <p
          className={`${montserrat.className} text-lg text-neutral-800 tracking-wide`}
        >
          Creemos que los jardines brindan un equilibrio entre la vida moderna y
          la conexión y serenidad de la naturaleza. Nos esforzamos por fomentar
          esta conexión en cada espacio al aire libre que creamos. Todos
          nuestros espacios están diseñados a medida, con un enfoque en paisajes
          vegetales artísticos y exuberantes, y una sensibilidad de diseño
          moderno. Ofrecemos servicios en plantaciones expertas, trabajos en
          madera personalizados, trabajos en piedra, muebles de exterior
          diseñados a medida y todo tipo de espacios al aire libre.
        </p>
      </div>
      <div className="py-12 mx-auto">
        <button
          className={`${montserrat.className} uppercase px-4 border-2 border-[#4B634E] text-[#4B634E] py-2 hover:bg-[#4B634E] hover:text-white transition duration-300 ease-in-out`}
        >
          Conocé nuestros proyectos
        </button>
      </div>
    </div>
  );
};

export default LandingContent;
