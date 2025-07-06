import * as Yup from "yup";
/**
 * @name Regex
 * @description Regex code for validation
 * @returns RegexExpressions
 */

const PasswordError =
  "Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
export const passRegexp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?!.* ).{8,40}$/;

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const zipRegExp = /[1-9]{1}[0-9]{2}[0-9]{3}$/;
export const nameRegExp = /^([a-zA-Z ]){2,20}$/;

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .matches(
      nameRegExp,
      "Name must be 2-20 characters long and contain only letters and spaces"
    ),
  email: Yup.string()
    .trim()
    .required("Enter the required field")
    .matches(emailRegExp, "Please enter valid Email"),
  password: Yup.string()
    .trim()
    .required("Enter the required field")
    .max(16, "Password should be maximum of 16 characters")
    .min(8, "Password should be minimum of 8 characters")
    .matches(passRegexp, PasswordError),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Enter the required field")
    .matches(emailRegExp, "Please enter valid Email"),
  password: Yup.string()
    .trim()
    .required("Enter the required field")
    .max(16, "Password should be maximum of 16 characters")
    .min(8, "Password should be minimum of 8 characters")
    .matches(passRegexp, PasswordError),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Enter the required field")
    .matches(emailRegExp, "Please enter valid Email"),
});

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .required("Enter the required field")
    .max(16, "Password should be maximum of 16 characters")
    .min(8, "Password should be minimum of 8 characters")
    .matches(passRegexp, PasswordError),
  confirmPassword: Yup.string()
    .trim()
    .required("Enter the required field")
    .oneOf([Yup.ref("password")], "Password and Confirm Password must match"),
});
