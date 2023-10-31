import { StaticImageData } from "next/image";

import cardStars from "&/images/internship/card-star.svg";

export type DescriptionItemData = {
  id: number;
  item: string;
};

export type InternshipCardsType = {
  id: number;
  title: string;
  description: DescriptionItemData[];
  timeCount?: string;
  timeInfo?: string;
  image?: StaticImageData;
  mark?: string;
};

export const INTERNSHIP_CARDS_DATA: Array<InternshipCardsType> = [
  {
    id: 1,
    title: "Практическое задание + теория",
    description: [
      {
        id: 1,
        item: "Закрепим личного ментора",
      },
      {
        id: 2,
        item: "Дадим задание для оценки скиллов",
      },
      {
        id: 3,
        item: "Подкрепим теорией по пройденному материалу",
      },
    ],
    timeCount: "1-1,5",
    timeInfo: "месяца",
  },
  {
    id: 2,
    title: "Дополнительная подготовка",
    description: [
      {
        id: 1,
        item: "Посмотрим результат первого этапа",
      },
      {
        id: 2,
        item: "Составим индивидуальный план",
      },
      {
        id: 3,
        item: "Прокачаем и подготовим к собеседованию",
      },
    ],
    timeCount: "1,5",
    timeInfo: "месяца",
  },
  {
    id: 3,
    title: "Выход на проекте",
    mark: "(работа в штате)",
    description: [
      {
        id: 1,
        item: "Технический рост в разных доменных областях",
      },
      {
        id: 2,
        item: "Бенефиты от компании",
      },
      {
        id: 3,
        item: "Ассессмент через 6 месяцев",
      },
    ],
    image: cardStars,
  },
];
