import { RegisterForm } from "@/app/components/RegisterForm";
import Image from "next/image";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <RegisterForm />
      </div>

      <div className="w-1/2 relative hidden md:block">
        <Image src="/image13.png" alt="ievsa" fill className="object-cover" />
      </div>
    </div>
  );
};

export default RegisterPage;
