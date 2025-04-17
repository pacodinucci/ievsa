"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isGallery = pathname === "/gallery";

  return (
    <div
      className={`flex justify-center items-center h-[20vh] ${
        isGallery ? "bg-white" : "bg-[#D9D5D0]"
      }`}
    >
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
