import ImageGallery from "@/components/ImageGallery";
import PageHeader from "@/components/PageHeader";
import React from "react";

const territorialImages = [
  {
    src: "/residencial1.jpg",
    alt: "Acceso principal - Imagen luego de 3 meses de la ejecución. Tonalidades durante el año: Verdes varios.",
  },
  {
    src: "/residencial2.jpg",
    alt: "Sector de encuentro - Imagen luego de 6 meses de la ejecución. Tonalidades entre dorados, verdes y grises según estación.",
  },
  {
    src: "/residencial3.jpg",
    alt: "Vista desde terraza - Sector de encuentro - Imagen luego de 6 meses de la ejecución.",
  },
  {
    src: "/residencial4.jpg",
    alt: "Cantero lineal - Imagen luego de 6 meses de la ejecución. Tonalidades durante el año: verdes y ocres.",
  },
];

const TerritorialPage = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <PageHeader title="Residencial" />
      <div className="grid grid-cols-[15%_1fr_15%] pb-24 px-12">
        <div />
        <div>
          <ImageGallery images={territorialImages} />
        </div>
        <div />
      </div>
    </div>
  );
};

export default TerritorialPage;
