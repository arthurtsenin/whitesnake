import raindrop1 from "&/images/advantages/1.png";
import raindrop2 from "&/images/advantages/2.png";
import raindrop3 from "&/images/advantages/3.png";
import raindrop4 from "&/images/advantages/4.png";
import raindrop5 from "&/images/advantages/5.png";
import raindrop6 from "&/images/advantages/6.png";
import raindrop7 from "&/images/advantages/7.png";
import raindrop8 from "&/images/advantages/8.png";
import raindrop9 from "&/images/advantages/9.png";
import raindrop10 from "&/images/advantages/10.png";
import raindrop11 from "&/images/advantages/11.png";
import raindrop12 from "&/images/advantages/12.png";

export type AdvantageColorVarsType = "green" | "red";
export type AdvantageTabsVars = "Плюшки" | "Бенефиты";
export type AdvantageType = {
  id: number;
  title: string;
  color: AdvantageColorVarsType;
  type: AdvantageTabsVars;
};

export const BENEFITS_DATA: Array<AdvantageType> = [
  {
    id: 1,
    title: "Эффективный рост",
    color: "red",
    type: "Бенефиты",
  },
  {
    id: 2,
    title: "Курсы английского",
    color: "red",
    type: "Бенефиты",
  },
  {
    id: 3,
    title: "Личный ментор",
    color: "red",
    type: "Бенефиты",
  },
  {
    id: 4,
    title: "Гибкий график",
    color: "red",
    type: "Бенефиты",
  },
  {
    id: 5,
    title: "Развлечения",
    color: "red",
    type: "Бенефиты",
  },
  {
    id: 6,
    title: "Оформление практики",
    color: "red",
    type: "Бенефиты",
  },
  {
    id: 7,
    title: "Сытый сотрудник",
    color: "green",
    type: "Плюшки",
  },
  {
    id: 8,
    title: "Спорт и хобби",
    color: "green",
    type: "Плюшки",
  },
  {
    id: 9,
    title: "Транспорт",
    color: "green",
    type: "Плюшки",
  },
  {
    id: 10,
    title: "Sick Days",
    color: "green",
    type: "Плюшки",
  },
  {
    id: 11,
    title: "Техника",
    color: "green",
    type: "Плюшки",
  },
  {
    id: 12,
    title: "Забота о здоровье",
    color: "green",
    type: "Плюшки",
  },
];

export const ADVANTAGES_IMAGES = [
  { id: 1, url: raindrop1 },
  { id: 2, url: raindrop2 },
  { id: 3, url: raindrop3 },
  { id: 4, url: raindrop4 },
  { id: 5, url: raindrop5 },
  { id: 6, url: raindrop6 },
  { id: 7, url: raindrop7 },
  { id: 8, url: raindrop8 },
  { id: 9, url: raindrop9 },
  { id: 10, url: raindrop10 },
  { id: 11, url: raindrop11 },
  { id: 12, url: raindrop12 },
];
export const ADVANTAGES_TABS = [
  {
    name: "Бенефиты",
    nameReverse: "Benefits",
    id: 1,
  },
  {
    name: "Плюшки",
    nameReverse: "Plushki",
    id: 2,
  },
];
export const ADVANTAGES_DESCRIPTION = [
  {
    id: 1,
    text: "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям.",
  },
  {
    id: 2,
    text: "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям.",
  },
  {
    id: 3,
    text: "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям.",
  },
  {
    id: 4,
    text: "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям.",
  },
  {
    id: 5,
    text: "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям.",
  },
  {
    id: 6,
    text: "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям.",
  },
  {
    id: 7,
    text: "Наша компания помогает повышать доступность медицинских услуг.",
  },
  {
    id: 8,
    text: "Наша компания помогает повышать доступность медицинских услуг.",
  },
  {
    id: 9,
    text: "Наша компания помогает повышать доступность медицинских услуг.",
  },
  {
    id: 10,
    text: "Наша компания помогает повышать доступность медицинских услуг.",
  },
  {
    id: 11,
    text: "Наша компания помогает повышать доступность медицинских услуг.",
  },
  {
    id: 12,
    text: "Наша компания помогает повышать доступность медицинских услуг.",
  },
];
