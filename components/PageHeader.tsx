"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import SectionTitle from "@/app/components/SectionTitle";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="pl-24 pt-12">
        <Image
          src="/logoievsa2.png"
          alt="logo ievsa"
          width={200}
          height={100}
          className="cursor-pointer hidden md:block"
          onClick={() => router.push("/")}
        />
        <Image
          src="/logoievsa2.png"
          alt="logo ievsa"
          width={100}
          height={50}
          className="cursor-pointer block md:hidden"
          onClick={() => router.push("/")}
        />
      </div>
      <SectionTitle
        title={title}
        className="uppercase text-green-950 mt-16 mb-12 px-12"
      />
    </div>
  );
};

export default PageHeader;
