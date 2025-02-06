import { source } from "@/lib/fonts";
import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <div className={`ml-6 md:ml-12 ${className}`}>
      <span className="block w-[97%] bg-green-950 h-[1.5px]" />
      <h3 className={`${source.className} mt-2 text-4xl font-semibold`}>
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
