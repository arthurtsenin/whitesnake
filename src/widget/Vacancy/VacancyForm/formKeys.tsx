export type VacancyFormType = Record<string, string>;

export const FORM_KEYS: VacancyFormType = {
  name: "name",
  surname: "surname",
  email: "email",
  phone: "phone",
  telegram: "telegram",
  linkedIn: "linkedIn",
  message: "message",
  url: "url",
  jobTitle: "jobTitle",
};
export const formTemplate = [
  {
    id: 1,
    type: "text",
    placeholder: "Имя*",
    form_key: FORM_KEYS.name,
  },
  {
    id: 2,
    type: "text",
    placeholder: "Фамилия*",
    form_key: FORM_KEYS.surname,
  },
  {
    id: 3,
    type: "email",
    placeholder: "Email*",
    form_key: FORM_KEYS.email,
  },
  {
    id: 4,
    type: "text",
    placeholder: "Телефон",
    form_key: FORM_KEYS.phone,
  },
  {
    id: 5,
    type: "text",
    placeholder: "Telegram",
    form_key: FORM_KEYS.telegram,
  },
  {
    id: 6,
    type: "text",
    placeholder: "LinkedIn",
    form_key: FORM_KEYS.linkedIn,
  },
];
