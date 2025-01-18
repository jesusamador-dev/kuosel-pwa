'use client';

import React from 'react';
import KSLInput from '@/app/shared/components/atoms/KSLInput/KSLInput';
import KSLPasswordInput from '@/app/shared/components/atoms/KSLPasswordInput/KSLPasswordInput';
import KSLButton from '@/app/shared/components/atoms/KSLButton/KSLButton';
import KSLButtonWithIcon from '@/app/shared/components/molecules/KSLButtonWithIcon/KSLButtonWithIcon';
import Image from 'next/image';
import logo from '@/assets/icons/logo.svg'; 

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full p-6">
        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <Image src={logo} alt="Enbank Logo" width={100} height={100} />
          <h1 className="text-2xl font-bold text-primary mt-2">kuosel</h1>
        </div>

        {/* Título */}
        <h2 className="text-4xl font-semibold text-center mb-6">Ingresa a tu cuenta</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Kuosel es una aplicación para la gestión de tus finanzas.
        </p>

        {/* Formulario */}
        <form className="space-y-4">
          <KSLInput
            name="email"
            label="Correo Electrónico"
            placeholder="example@gmail.com"
            icon="email"
          />
          <KSLPasswordInput
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
          />
          <div className="text-right">
            <a
              href="/auth/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <KSLButton
            className="button--primary button--full-width"
            onClick={() => console.log('Inicio de sesión')}
          >
            Iniciar Sesión
          </KSLButton>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-sm text-gray-400">O</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        

        {/* Enlace de Registro */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ¿No tienes una cuenta?{' '}
            <a href="/auth/sign-up" className="text-primary font-semibold">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

