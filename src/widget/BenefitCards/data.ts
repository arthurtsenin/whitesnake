import { BenefitCardData } from "./types";

import cube from "&/benefit-cards/cube.svg";
import spiral from "&/benefit-cards/spiral.svg";

export const BENEFIT_CARD_WITH_ICON_DATA: BenefitCardData[] = [
  {
    cardTitle: "Для клиентов",
    cardDesc: `Мы реализуем проекты международного масштаба от первоначального анализа до запуска и поддержки.`,
    buttonText: "Связаться с нами",
    icon: cube,
  },
  {
    cardTitle: "Работа в Whitesnake",
    cardDesc: `Если ты разработчик, мы с радостью с тобой пообщаемся и рассмотрим возможность работать с нами.`,
    buttonText: "Вакансии",
    icon: spiral,
  },
];

export const BENEFIT_CARD_WITHOUT_ICON_DATA: BenefitCardData[] = [
  {
    cardTitle: "Для клиентов",
    cardDesc: `Мы реализуем проекты международного масштаба от первоначального анализа до запуска и поддержки.`,
    buttonText: "Оставить заявку",
  },
  {
    cardTitle: "Работа в Whitesnake",
    cardDesc: `Если ты разработчик, мы с радостью с тобой пообщаемся и рассмотрим возможность работать с нами.`,
    buttonText: "Карьера",
  },
];
