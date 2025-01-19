'use client';

import React from "react";
import SignUpForm from "@/app/auth/shared/components/SignUpForm";
import KSLButtonWithIcon from "@/app/shared/components/molecules/KSLButtonWithIcon/KSLButtonWithIcon";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-grayPrincipal">
      <div className="w-full max-w-md bg-white min-h-screen">
        <h1 className="text-4xl font-bold text-center text-font mt-10">Crea tu cuenta</h1>
        <p className="text-md text-gray-400 text-center mt-5">
          Kuosel es una aplicación para la gestión de tus finanzas.
        </p>
        <div className="mt-5">
          <SignUpForm />
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-sm text-gray-400">O continúa con</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <div className="flex justify-center gap-4 mt-4 w-70 mx-auto">
            <KSLButtonWithIcon
              buttonType="bordered"
              iconName="apple"
              iconPosition="left"
              onClick={() => console.log("Inicio con Apple")}
            />
            <KSLButtonWithIcon
              buttonType="bordered"
              iconName="google"
              iconPosition="left"
              onClick={() => console.log("Inicio con Google")}
            />
            <KSLButtonWithIcon
              buttonType="bordered"
              iconName="facebook"
              iconPosition="left"
              onClick={() => console.log("Inicio con Facebook")}
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <a href="/auth/login" className="text-primary font-semibold">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
