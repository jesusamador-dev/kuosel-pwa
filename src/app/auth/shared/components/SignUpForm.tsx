import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidationSchema } from "@/app/auth/shared/schemas/signUpValidationSchema";
import { SignUpFormModel } from "@/app/auth/shared/interfaces/SignUpFormModel";
import KSLInput from "@/app/shared/components/atoms/KSLInput/KSLInput";
import KSLPasswordInput from "@/app/shared/components/atoms/KSLPasswordInput/KSLPasswordInput";
import KSLButton from "@/app/shared/components/atoms/KSLButton/KSLButton";

const SignUpForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormModel>({
    resolver: yupResolver(signUpValidationSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormModel> = (data) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <div>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <KSLInput
              label="Nombre Completo"
              placeholder="Ingresa tu nombre completo"
              icon="profile"
              {...field}
              error={errors.name?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <KSLInput
              label="Correo Electrónico"
              placeholder="example@gmail.com"
              icon="email"
              {...field}
              error={errors.email?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <KSLPasswordInput
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              {...field}
              error={errors.password?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <KSLPasswordInput
              label="Confirmar Contraseña"
              placeholder="Confirma tu contraseña"
              {...field}
              error={errors.confirmPassword?.message}
            />
          )}
        />
      </div>
      <div className="flex justify-center">
        <KSLButton className="button--primary button--full-width" type="submit">
          Registrarme
        </KSLButton>
      </div>
    </form>
  );
};

export default SignUpForm;
