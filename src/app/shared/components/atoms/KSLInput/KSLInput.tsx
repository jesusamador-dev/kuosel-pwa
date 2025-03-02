import React, { forwardRef, ReactNode } from "react";
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
  endAdornment?: ReactNode
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
      endAdornment
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
          className={`relative flex items-center rounded-md border 
            ${error ? "border-red-500 focus-within:ring-red-500" : "border-gray-300 focus-within:ring-primary"} 
            focus-within:ring-2`}
        >
          {icon && (
              <KSLIcon name={icon} size="1.2rem" className="mx-2 text-gray-400" />
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
          {endAdornment && (
            <div className="mx-2 inset-y-0 flex items-center pointer-events-none text-gray-400">
              {endAdornment}
            </div>
          )}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

KSLInput.displayName = "KSLInput";

export default KSLInput;
