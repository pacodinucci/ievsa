import React from "react";
import Image from "next/image";

interface PictureComponentProps {
  src?: string;
  header?: string;
  text?: string;
}

const PictureComponent = ({ src, header, text }: PictureComponentProps) => {
  return (
    <div className="px-12 py-40 flex justify-center w-full">
      <div className="relative flex border-l-4 border-[#CAD29D] before:absolute before:left-0 before:top-0 before:w-[3%] before:h-[4px] before:bg-[#CAD29D] after:absolute after:left-0 after:bottom-0 after:w-[3%] after:h-[4px] after:bg-[#CAD29D] px-4 py-6">
        <Image src={src || ""} alt="garden ievsa" width={600} height={0} />
      </div>
      <div className="w-[40%] flex flex-col gap-6 mt-6">
        <h2 className="text-3xl text-neutral-500 font-semibold tracking-wide">
          {header}
        </h2>
        <p className="text-lg text-neutral-800">{text}</p>
      </div>
    </div>
  );
};

export default PictureComponent;
