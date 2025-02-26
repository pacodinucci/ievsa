"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center bg-[#D9D5D0] h-[20vh]">
      <div>
        <Image
          src="/logoievsa2.png"
          alt="logo ievsa"
          width={200}
          height={100}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default Footer;
