import ImageGallery from "@/components/ImageGallery";
import PageHeader from "@/components/PageHeader";
import ScaleComponent from "@/components/ScaleComponent";
import { empresarialImages } from "@/lib/constants";
import React from "react";

const TerritorialPage = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <PageHeader title="Empresarial" />
      <ScaleComponent images={empresarialImages} />
    </div>
  );
};

export default TerritorialPage;
