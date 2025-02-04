"use client";

import React from "react";
import SectionTitle from "../components/SectionTitle";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProyectoPage = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F2F2F2] border border-[#F2F2F2] min-h-screen">
      <div className="pl-24 pt-12">
        <Image
          src="/logoievsa2.png"
          alt="logo ievsa"
          width={200}
          height={100}
          className="cursor-pointer"
          onClick={() => router.push("/v2")}
        />
      </div>
      <SectionTitle
        title="Proyecto"
        className="uppercase text-green-950 mt-16 mb-12 px-12"
      />
      <div className="MyriadText w-[50%] px-24">
        Aca va Anteproyecto, Idea Preliminar y Proyecto Ejecutivo.
      </div>
    </div>
  );
};

export default ProyectoPage;
