import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(1, "Age must be at least 1")
    .max(100, "Age must be at most 100")
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: "min 5 characters, 1 upper case, 1 lower case, 1 digit.",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
