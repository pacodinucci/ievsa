import ImageGallery from "@/components/ImageGallery";
import PageHeader from "@/components/PageHeader";
import ScaleComponent from "@/components/ScaleComponent";
import { territorialImages } from "@/lib/constants";
import React from "react";

const TerritorialPage = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <PageHeader title="Territorial" />
      <ScaleComponent images={territorialImages} />
    </div>
  );
};

export default TerritorialPage;
