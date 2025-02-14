import React from "react";
import Image from "next/image";
import { Session } from "next-auth";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

interface CustomersNavbarProps {
  data: Session | null;
}

const CustomersNavbar = ({ data }: CustomersNavbarProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className="absolute top-0 left-0 w-full bg-[#F2F2F2] flex justify-between items-center px-8 py-4">
      <div>
        <Image
          src={"/logoievsa2.png"}
          alt="logo ievsa"
          width={100}
          height={0}
        />
      </div>
      <div className="px-8 cursor-pointer" onClick={handleLogout}>
        <p className="MyriadValoresMobile">{data?.user?.name}</p>
      </div>
    </div>
  );
};

export default CustomersNavbar;
