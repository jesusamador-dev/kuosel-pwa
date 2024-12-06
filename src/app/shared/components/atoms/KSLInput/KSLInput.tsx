import React, { forwardRef } from "react";
import KSLIcon from "@/app/shared/components/atoms/KSLIcon/KSLIcon";

export interface KSLInputProps {
  label: string;
  type?: string;
  value?: string; // `value` será opcional para mayor flexibilidad
  placeholder?: string;
  icon?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  name: string; // Necesario para trabajar con `react-hook-form`
}

const KSLInput = forwardRef<HTMLInputElement, KSLInputProps>(
  (
    { label, type = "text", value, placeholder, icon, onChange, onBlur, error, name },
    ref
  ) => {
    return (
      <div className="flex flex-col space-y-1">
        {/* Etiqueta */}
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>

        {/* Contenedor del Input */}
        <div
        className={`ksl-password-input__wrapper relative mt-1 flex items-center rounded ${
          error
            ? "border-red-500 focus-within:ring-red-500 focus-within:ring-2"
            : "border-gray-300 focus-within:ring-primary focus-within:ring-2"
        }`}
      >
          {/* Icono */}
          {icon && (
            <KSLIcon
              name={icon}
              size="1rem"
              className="text-gray-500 absolute left-3"
            />
          )}
          
          {/* Campo de Entrada */}
          <input
            id={name}
            name={name}
            ref={ref}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            className={`w-full py-1 pl-${icon ? "7" : "3"} pr-3 outline-none text-sm text-gray-700 placeholder-gray-400`}
          />
        </div>

        {/* Mensaje de Error */}
        {error && (
        <p className="ksl-password-input__error text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
      </div>
    );
  }
);

KSLInput.displayName = "KSLInput";

export default KSLInput;
