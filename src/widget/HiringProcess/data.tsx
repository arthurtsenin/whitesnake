import { StaticImageData } from "next/image";

import interview from "&/images/hiring-process/interview.png";
import offer from "&/images/hiring-process/offer.png";
import prescreen from "&/images/hiring-process/prescreen.png";
import reply from "&/images/hiring-process/reply.png";

export type HiringProcessCardType = {
  id?: number;
  title: string;
  instructions: Array<string>;
  image: StaticImageData;
};

export const HIRING_PROCESS_DATA: Array<HiringProcessCardType> = [
  {
    id: 1,
    title: "Отклик на вакансию",
    instructions: [
      "Заполни форму и оставь заявку",
      "Получи обратную связь от рекрутера",
      "Согласуй удобное время для собеседования",
    ],
    image: reply,
  },
  {
    id: 2,
    title: "Прескрин",
    instructions: [
      "Пройди 10-минутное собеседование, на которому тебя проверят английский и базовые технические знания",
    ],
    image: prescreen,
  },
  {
    id: 3,
    title: "Техническое интервью",
    instructions: [
      "Пройди 30-60-минутное техническое интервью",
      "Получи оценку своих знаний теории и практики",
      "Узнай больше о проектах и планах по своему развитию в компании",
    ],
    image: interview,
  },
  {
    id: 4,
    title: "Оффер!",
    instructions: ["Экскурсия по офису", "Обсуждение условий работы"],
    image: offer,
  },
];
