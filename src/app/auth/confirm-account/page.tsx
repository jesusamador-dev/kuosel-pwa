"use client";
import React from "react";
import ConfirmOTP from "@/app/auth/shared/components/ConfirmOTP"; // Asegúrate de que el path del import es correcto
import KSLButton from "@/app/shared/components/atoms/KSLButton/KSLButton";

interface ConfirmAccountProps {
  email: string;
}

const ConfirmAccount: React.FC<ConfirmAccountProps> = ({}) => {
  const handleVerify = (code: string) => {
    console.log(`Verifying code: ${code}`);
    // Aquí se llamaría a la API para verificar el código
  };

  const handleResendCode = () => {
    console.log("Resending code...");
  };

  return (
    <div className="min-h-screen bg-grayPrincipal flex flex-col justify-between px-6 pb-6 sm:px-6 lg:px-8">
      <header>
        <h2 className="mt-6 text-center text-lg font-medium text-gray-900">
          Confirmar cuenta
        </h2>
      </header>
      <div className="max-w-md w-full space-y-8">
        <p className="text-center text-sm text-gray-600">
          Ingresa el código de verificación que te enviamos a {}
        </p>
        <ConfirmOTP onVerify={handleVerify} onResendCode={handleResendCode} />
      </div>
      <KSLButton className="button button--primary">Verificar</KSLButton>
    </div>
  );
};

export default ConfirmAccount;
