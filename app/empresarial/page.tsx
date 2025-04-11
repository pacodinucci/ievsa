import ImageGallery from "@/components/ImageGallery";
import PageHeader from "@/components/PageHeader";
import React from "react";

const territorialImages = [
  {
    src: "/empresarial1.jpg",
    alt: "Acceso principal - Imagen luego de 3 meses de la ejecución. Tonalidades durante el año: Verdes varios.",
  },
  {
    src: "/empresarial2.jpg",
    alt: "Sector de encuentro - Imagen luego de 6 meses de la ejecución. Tonalidades entre dorados, verdes y grises según estación.",
  },
  {
    src: "/empresarial3.jpg",
    alt: "Vista desde terraza - Sector de encuentro - Imagen luego de 6 meses de la ejecución.",
  },
  {
    src: "/empresarial4.jpg",
    alt: "Cantero lineal - Imagen luego de 6 meses de la ejecución. Tonalidades durante el año: verdes y ocres.",
  },
];

const TerritorialPage = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <PageHeader title="Empresarial" />
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
