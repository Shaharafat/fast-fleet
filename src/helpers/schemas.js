/*
 *
 * Title: Validation schema
 * Description: Yup data validation schemas
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */

import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
});

export const searchSchema = yup.object().shape({
  from: yup.string().min(3).required(),
  to: yup.string().min(3).required()
})