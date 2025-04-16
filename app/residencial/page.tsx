import React from "react";
import PageHeader from "@/components/PageHeader";
import ScaleComponent from "@/components/ScaleComponent";
import { residencialImages } from "@/lib/constants";

const ResidencialPage = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <PageHeader title="Residencial" />
      <ScaleComponent images={residencialImages} />
    </div>
  );
};

export default ResidencialPage;
