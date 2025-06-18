"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { montserrat } from "@/lib/fonts";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isGallery = pathname === "/gallery";

  return (
    <div
      id="contacto"
      className={`flex justify-between items-center px-8 h-[20vh] ${
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
      <span className="border border-[#20361e] h-[30%]" />
      <div className="flex flex-col">
        <div className="text-[#20361e] flex gap-x-4">
          <a href="mailto:contacto@ievsa.com.ar">
            <GoMail size={30} className="cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/ievsa.espaciosverdes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} className="cursor-pointer" />
          </a>
          <a
            href="https://wa.me/5491137799727"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
