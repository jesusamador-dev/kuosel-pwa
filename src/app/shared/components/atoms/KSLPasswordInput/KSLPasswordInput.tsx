import React, { useState, forwardRef } from "react";
import KSLInput from "@/app/shared/components/atoms/KSLInput/KSLInput";
import KSLIcon from "@/app/shared/components/atoms/KSLIcon/KSLIcon";

export interface KSLPasswordInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  name: string;
  className?: string;
}

const KSLPasswordInput = forwardRef<HTMLInputElement, KSLPasswordInputProps>(
  ({ label, value, placeholder, onChange, onBlur, error, name, className }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <KSLInput
        label={label}
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        icon="lock"
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        name={name}
        className={className}
        endAdornment={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none cursor-pointer flex"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <KSLIcon
              name={showPassword ? "eye-off" : "eye"}
              size="1.2rem"
            />
          </button>
        }
      />
    );
  }
);

export default KSLPasswordInput;
