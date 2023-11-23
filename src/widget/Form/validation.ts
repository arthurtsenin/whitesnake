import * as yup from "yup";

import { FORM_KEYS } from "./params";

export const FORM_VACANCIES_SCHEMA = yup.object({
  [FORM_KEYS.jobTitle]: yup.string().required("Поле не должно быть пустым"),
  [FORM_KEYS.name]: yup
    .string()
    .required("Поле не должно быть пустым")
    .matches(/^([^0-9]*)$/, "Имя не должно содержать цифр")
    .matches(/^\S+$/, "Имя не должно содержать пробелов"),
  [FORM_KEYS.surname]: yup
    .string()
    .required("Поле не должно быть пустым")
    .matches(/^([^0-9]*)$/, "Фамилия не должна содержать цифр")
    .matches(/^\S+$/, "Фамилия не должна содержать цифр"),
  [FORM_KEYS.email]: yup
    .string()
    .required("Поле не должно быть пустым")
    .matches(
      /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
      "Неверный формат электронной почты",
    )
    .email("Неверный формат электронной почты"),
});

export const FORM_VACANCY_SCHEMA = yup.object({
  [FORM_KEYS.name]: yup
    .string()
    .matches(/^([^0-9]*)$/, "Имя не должно содержать цифр")
    .matches(/^\S+$/, "Имя не должно содержать пробелов")
    .required("Имя обязательное поле"),
  [FORM_KEYS.surname]: yup
    .string()
    .matches(/^([^0-9]*)$/, "Фамилия не должна содержать цифр")
    .matches(/^\S+$/, "Фамилия не должна содержать цифр")
    .required("Фамилия обязательное поле"),
  [FORM_KEYS.email]: yup
    .string()
    .required("Электронная почта обязательное поле")
    .matches(
      /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
      "Неверный формат электронной почты",
    )
    .email("Неверный формат электронной почты"),
});

export const LEAVE_REQUEST_SCHEMA = yup.object({
  [FORM_KEYS.company]: yup
    .string()
    .required("Название компании обязательное поле"),
  [FORM_KEYS.email]: yup
    .string()
    .required("Электронная почта обязательное поле")
    .matches(
      /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
      "Неверный формат электронной почты",
    )
    .email("Неверный формат электронной почты"),
});

export const BOOK_A_CALL_SCHEMA = yup.object({
  [FORM_KEYS.email]: yup
    .string()
    .required("Электронная почта обязательное поле")
    .matches(
      /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
      "Неверный формат электронной почты",
    )
    .email("Неверный формат электронной почты"),
});
