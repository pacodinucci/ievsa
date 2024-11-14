import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-zinc-100">
      <div className="absolute inset-0">
        <Image
          src="/garden1.jpg"
          alt="gardenievsa"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="bg-white/40 absolute inset-0" />
      <Image
        src="/logoievsa2.png"
        alt="logo ievsa"
        width={500}
        height={300}
        className="z-50"
      />
    </div>
  );
};

export default Landing;
