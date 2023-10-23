import { FORM_URL_PARAMS } from "@/shared/provider/params";

export type ContactType = {
  id: number;
  url: string;
  title: string;
  target: string;
  description: string;
};

export const CONTACTS_DATA: Array<ContactType> = [
  {
    id: 1,
    url: FORM_URL_PARAMS.LeaveRequest,
    target: "_self",
    title: "Связаться по email",
    description: "",
  },
  {
    id: 2,
    url: "#",
    target: "_self",
    title: "Запланировать встречу",
    description: "Calendly",
  },
  {
    id: 3,
    url: "#",
    target: "_self",
    title: "Оставить заявку",
    description: "на сайте",
  },
  {
    id: 4,
    url: "https://www.linkedin.com/company/whitesnake/",
    target: "_blank",
    title: "Linkedin",
    description: "",
  },
];
