export type ContactType = {
  id: number;
  url: string;
  title: string;
  description: string;
};

export const CONTACTS_DATA: Array<ContactType> = [
  {
    id: 1,
    url: "#",
    title: "Связаться по email",
    description: "",
  },
  {
    id: 2,
    url: "#",
    title: "Запланировать встречу",
    description: "Calendly",
  },
  {
    id: 3,
    url: "#",
    title: "Оставить заявку",
    description: "на сайте",
  },
  {
    id: 4,
    url: "#",
    title: "Linkedin",
    description: "",
  },
];
