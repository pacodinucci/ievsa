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
    <>
      <div
        id="contacto"
        className={`flex flex-col md:flex-row-reverse justify-center items-center gap-y-6 py-8 px-8 md:px-24 h-auto ${
          isGallery ? "bg-white" : "bg-[#D9D5D0]"
        } relative`}
      >
        <div className="flex md:absolute md:bottom-10 md:right-10">
          <div className="text-[#20361e] flex gap-x-8">
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
        <div className="order-first md:order-none">
          <Image
            src="/logoievsa2.png"
            alt="logo ievsa"
            width={200}
            height={100}
            className="w-32 md:w-[200px] h-auto cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
      </div>
      <div className="bg-black text-[#a2a2a2] text-center text-xs pt-1">
        © 2025 IEVSA - Todos los derechos reservados.
      </div>
    </>
  );
};

export default Footer;
