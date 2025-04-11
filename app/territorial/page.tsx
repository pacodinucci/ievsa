import ImageGallery from "@/components/ImageGallery";
import PageHeader from "@/components/PageHeader";
import React from "react";

const territorialImages = [
  {
    src: "/FINAL 1.jpg",
    alt: "Acceso principal - Imagen luego de 3 meses de la ejecución. Tonalidades durante el año: Verdes varios.",
  },
  {
    src: "/FINAL 2.jpg",
    alt: "Sector de encuentro - Imagen luego de 6 meses de la ejecución. Tonalidades entre dorados, verdes y grises según estación.",
  },
  {
    src: "/FINAL 3.jpg",
    alt: "Vista desde terraza - Sector de encuentro - Imagen luego de 6 meses de la ejecución.",
  },
  {
    src: "/FINAL 5.jpg",
    alt: "Cantero lineal - Imagen luego de 6 meses de la ejecución. Tonalidades durante el año: verdes y ocres.",
  },
];

const TerritorialPage = () => {
  return (
    <div className="">
      <PageHeader title="Territorial" />
      <div className="grid grid-cols-[15%_1fr_15%] pb-24 px-12">
        <div /> {/* Espacio izquierdo */}
        <div>
          <ImageGallery images={territorialImages} />
        </div>
        <div /> {/* Espacio derecho */}
      </div>
    </div>
  );
};

export default TerritorialPage;
