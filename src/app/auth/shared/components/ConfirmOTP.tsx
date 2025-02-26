import React, { useEffect } from "react";
import { useForm, Controller, FieldPath } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import KSLInput from "@/app/shared/components/atoms/KSLInput/KSLInput";
import KSLButton from "@/app/shared/components/atoms/KSLButton/KSLButton";

// Definir el esquema de validación con yup
const otpValidationSchema = yup.object().shape({
  code: yup
    .array()
    .of(
      yup
        .string()
        .required("Este campo es obligatorio")
        .length(1, "Debe ser un solo dígito")
        .matches(/^\d$/, "Debe ser un número")
    )
    .length(6, "Debes ingresar los 6 dígitos")
    .required(),
});

interface ConfirmOTPProps {
  onVerify: (code: string) => void;
  onResendCode: () => void;
}

interface OTPFormValues {
  code: string[]; // Representa los 6 dígitos del código OTP
}

const ConfirmOTP: React.FC<ConfirmOTPProps> = ({ onVerify, onResendCode }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormValues>({
    resolver: yupResolver(otpValidationSchema),
    defaultValues: {
      code: new Array(6).fill(""), // Inicializamos el código con 6 entradas vacías
    },
  });

  // Enfocar el primer input al cargar la página
  useEffect(() => {
    const firstInput = document.querySelector<HTMLInputElement>("input[name^='code-0']");
    firstInput?.focus();
  }, []);

  // Función con tipos para manejar el cambio
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: { onChange: (value: string) => void },
    index: number
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const formInputs = Array.from(
      document.querySelectorAll<HTMLInputElement>("input[name^='code']")
    );

    const inputEvent = e.nativeEvent as InputEvent;
    console.log(inputEvent)

    if (value.length > 1) {
      field.onChange(value[0]);
      e.target.value = value[0];
    } else {
      field.onChange(value);
    }

    if (inputEvent.inputType === "deleteContentBackward") {
      console.log("entra")
      const previousInput = formInputs[index - 1];
      previousInput?.focus();
    } else if (value && index < formInputs.length - 1) {
      const nextInput = formInputs[index + 1];
      nextInput?.focus();
    }
  };

  return (
    <form className="space-y-6">
      <div className="flex justify-center">
        <div className="flex gap-5">
          {new Array(6).fill("").map((_, index) => (
            <Controller
              key={index}
              name={`code-${index}` as FieldPath<OTPFormValues>}
              control={control}
              render={({ field }) => (
                <KSLInput
                  name={field.name}
                  type="number"
                  className="h-[45px] w-[30px] text-center pr-0 pl-0 text-primary text-2xl"
                  error={errors.code?.[index]?.message}
                  onChange={(e) => handleChange(e, field, index)}
                />
              )}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <KSLButton onClick={onResendCode} className="button button--link">
          Reenviar OTP
        </KSLButton>
      </div>
    </form>
  );
};

export default ConfirmOTP;
