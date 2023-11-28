import { FORM_KEYS } from "../params";

export const LEAVE_REQUEST_FORM_TEMPLATE = [
  {
    id: 1,
    type: "text",
    placeholder: "Название компании*",
    form_key: FORM_KEYS.company,
  },
  {
    id: 2,
    type: "email",
    placeholder: "Email*",
    form_key: FORM_KEYS.email,
  },
  {
    id: 3,
    type: "tel",
    placeholder: "Телефон",
    form_key: FORM_KEYS.phone,
    require: false,
  },
];
