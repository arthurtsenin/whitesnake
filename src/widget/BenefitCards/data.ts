import { BenefitCardData } from "./types";
import { FORM_URL_PARAMS } from "../Form/params";
import { ROUTES } from "../Navigation/routes";

import cube from "&/images/benefit-cards/cube.png";
import spiral from "&/images/benefit-cards/spiral.png";

export const BENEFIT_CARD_WITH_ICON_DATA: BenefitCardData[] = [
  {
    cardTitle: "Для клиентов",
    cardDesc: `Реализация проектов под ключ, расширение вашей команды опытными разработчиками, экспертный консалтинг.`,
    buttonText: "Связаться с нами",
    icon: cube,
    link: FORM_URL_PARAMS.LeaveRequest,
  },
  {
    cardTitle: "Работа в Whitesnake",
    cardDesc: `Мы всегда рады новым членам команды! Выбирай вакансию и расти вместе с нами!`,
    buttonText: "Вакансии",
    icon: spiral,
    link: ROUTES.FIVE.href,
  },
];

export const BENEFIT_CARD_WITHOUT_ICON_DATA: BenefitCardData[] = [
  {
    cardTitle: "Для клиентов",
    cardDesc: `Мы реализуем проекты международного масштаба от первоначального анализа до запуска и поддержки.`,
    buttonText: "Оставить заявку",
    link: "#",
  },
  {
    cardTitle: "Работа в Whitesnake",
    cardDesc: `Если ты разработчик, мы с радостью с тобой пообщаемся и рассмотрим возможность работать с нами.`,
    buttonText: "Карьера",
    link: ROUTES.FIVE.href,
  },
];
