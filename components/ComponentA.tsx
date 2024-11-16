import { montserrat } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

const ComponentA = () => {
  return (
    <div className="flex gap-x-12 px-24 py-36">
      <div className="relative">
        <h2
          className={`${montserrat.className} absolute top-2 left-2 bg-white/90 px-24 py-6 shadow-2xl text-3xl uppercase tracking-wide`}
        >
          Nuestro compromiso
        </h2>
        <Image
          src="/garden3.jpg"
          alt="garden ievsa"
          width={600}
          height={0}
          className="ml-16"
        />
      </div>
      <div className="max-w-96">
        <p className="text-neutral-800 text-lg tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus
          voluptates id, sed ipsa rerum eligendi debitis dolor amet earum
          officia magni, accusamus enim necessitatibus ut ipsum dolore? Unde
          dicta maiores totam amet aperiam.
        </p>
        <span className="underline text-[#243329] text-lg">Leer Más &gt;</span>
      </div>
    </div>
  );
};

export default ComponentA;
