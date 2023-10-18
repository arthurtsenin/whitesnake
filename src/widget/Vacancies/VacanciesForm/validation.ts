import * as yup from "yup";

import { FORM_KEYS } from "./formKeys";

export const FORM_VACANCY_SCHEMA = yup.object({
  [FORM_KEYS.jobTitle]: yup.string().required("Job title is a required field"),
  [FORM_KEYS.name]: yup
    .string()
    .matches(/^([^0-9]*)$/, "Name should not contain numbers")
    .matches(/^\S+$/, "Name should not contain spaces")
    .required("Name is a required field"),
  [FORM_KEYS.surname]: yup
    .string()
    .matches(/^([^0-9]*)$/, "Surname should not contain numbers")
    .matches(/^\S+$/, "Surname should not contain spaces")
    .required("Surname is a required field"),
  [FORM_KEYS.email]: yup
    .string()
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i, "Invalit email format")
    .required("Email is a required field")
    .email("Invalid email format"),
});
