import * as yup from "yup";

import { FORM_KEYS } from "./formKeys";

export const FORM_INTERNSHIP_SCHEMA = yup.object({
  [FORM_KEYS.name]: yup
    .string()
    .required("Имя обязательное поле")
    .matches(/^([^0-9]*)$/, "Имя не должно содержать цифр")
    .matches(/^\S+$/, "Имя не должно содержать пробелов"),
  [FORM_KEYS.surname]: yup
    .string()
    .required("Фамилия обязательное поле")
    .matches(/^([^0-9]*)$/, "Фамилия не должна содержать цифр")
    .matches(/^\S+$/, "Фамилия не должна содержать цифр"),
  [FORM_KEYS.email]: yup
    .string()
    .matches(
      /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
      "Неверный формат электронной почты",
    )
    .email("Неверный формат электронной почты")
    .required("Электронная почта обязательное поле"),
});
