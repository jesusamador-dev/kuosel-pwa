import React, { forwardRef } from "react";
import KSLIcon from "@/app/shared/components/atoms/KSLIcon/KSLIcon";

interface KSLInputProps {
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  icon?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  name: string;
  className?: string;
}

const KSLInput = forwardRef<HTMLInputElement, KSLInputProps>(
  (
    {
      label,
      type = "text",
      value,
      placeholder,
      icon,
      onChange,
      onBlur,
      error,
      name,
      className,
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col space-y-1`}>
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div
          className={`relative flex items-center rounded-md border ${error ? "border-red-500 focus-within:ring-red-500" : "border-gray-300 focus-within:ring-primary"} focus-within:ring-2`}
        >
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <KSLIcon name={icon} size="1rem" className="text-gray-500" />
            </div>
          )}
          <input
            id={name}
            name={name}
            ref={ref}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="off"
            className={`w-full py-2 pl-${icon ? "10" : "3"} pr-3 text-sm rounded-md text-gray-700 placeholder-gray-400 bg-white outline-none ${className}`}
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

KSLInput.displayName = "KSLInput";

export default KSLInput;
