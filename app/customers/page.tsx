"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CustomersNavbar from "../components/CustomersNavbar";

const CustomersPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (status === "unauthenticated") {
      router.push("/auth/login");
    } else if (status === "authenticated") {
      setIsAuthenticating(false);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [status, router]);

  if (isAuthenticating) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-[#A69B97]">
        <Image
          src={"/logoievsa2.png"}
          alt="logo ievsa"
          width={150}
          height={150}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <CustomersNavbar data={data} />
      <div className="MyriadValores pt-48 px-24 flex flex-col gap-4">
        <p>
          Acá mostramos todo lo que le queremos mostrar al cliente, en caso de
          serlo, si no es cliente se le muestran datos de contacto. En el caso
          de usuarios admin (ustedes), se muestra un dashboard para gestionar
          toda la información, contenido, etc.
        </p>
        <p>Por ahora, haciendo clic sobre el nombre se cierra sesión.</p>
      </div>
    </div>
  );
};

export default CustomersPage;
