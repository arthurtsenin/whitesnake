export type FormType = Record<string, string>;

export const FORM_URL_PARAMS = {
  BookACall: "/?form=BookACall",
  LeaveRequest: "/?form=LeaveRequest",
};

export const FORM_KEYS: FormType = {
  name: "name",
  surname: "surname",
  email: "email",
  phone: "phone",
  telegram: "telegram",
  linkedIn: "linkedIn",
  company: "company",
  message: "message",
  url: "url",
  jobTitle: "jobTitle",
};
