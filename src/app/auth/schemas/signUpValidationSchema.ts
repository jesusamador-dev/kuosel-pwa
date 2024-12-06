import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "El nombre no debe contener números ni caracteres especiales")
    .required("El nombre es obligatorio"),
  email: Yup.string()
    .email("El correo no tiene un formato válido")
    .required("El correo es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Confirmar la contraseña es obligatorio"),
});
