import { LoginForm } from "@/app/components/LoginForm";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>
      <div className="w-1/2 relative hidden md:block">
        <Image src="/image15.png" alt="ievsa" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
