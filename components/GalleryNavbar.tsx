"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";

const menuOptions = [
  { title: "Residencial" },
  { title: "Empresarial" },
  { title: "Territorial" },
];

interface GalleryNavbarProps {
  onSelect: (index: number) => void;
  currentIndex: number;
}

const GalleryNavbar = ({ onSelect, currentIndex }: GalleryNavbarProps) => {
  const router = useRouter();
  return (
    <div className="px-8 py-4 flex gap-8 shadow-md">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <Image src="/logoievsa2.png" alt="logo ievsa" width={80} height={0} />
      </div>

      <div className="hidden md:flex gap-6">
        {menuOptions.map((option, index) => (
          <button
            key={index}
            className={`${
              montserrat.className
            } text-[#243229] text-lg uppercase cursor-pointer hover:text-[#243229]/60 ${
              currentIndex === index ? "font-medium" : "font-light"
            }`}
            onClick={() => onSelect(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryNavbar;
