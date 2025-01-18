import React, { useState } from "react";
import KSLIcon from "@/app/shared/components/atoms/KSLIcon/KSLIcon";

export interface KSLPasswordInputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const KSLPasswordInput: React.FC<KSLPasswordInputProps> = ({
  label,
  value,
  placeholder,
  onChange,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="ksl-password-input">
      {/* Label */}
      <label className="ksl-password-input__label text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Input Wrapper */}
      <div
        className={`ksl-password-input__wrapper relative mt-1 flex items-center rounded-md border ${
          error
            ? "border-red-500 focus-within:ring-red-500 focus-within:ring-2"
            : "border-gray-300 focus-within:ring-primary focus-within:ring-2"
        }`}
      >
        {/* Lock Icon */}
        <KSLIcon
          name="lock"
          size="1.2rem"
          className="ksl-password-input__icon absolute left-3 text-gray-400"
        />

        {/* Input Field */}
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="ksl-password-input__field w-full pl-7 pr-7 py-1 border-none rounded-md focus:outline-none"
        />

        {/* Show/Hide Password Button */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`ksl-password-input__toggle absolute right-3 focus:outline-none ${showPassword ? 'text-primary': 'text-gray-400'}`}
        >
          <KSLIcon
            name={showPassword ? "eye-off" : "eye"}
            size="1.2rem"
            className={`ksl-password-input__toggle-icon`}
          />
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <p className="ksl-password-input__error text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default KSLPasswordInput;
