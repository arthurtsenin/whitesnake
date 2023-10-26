import { StaticImageData } from "next/image";

import cardStars from "&/images/internship/card-star.svg";

export type DescriptionItemData = {
  id: number;
  descriptionItem: string;
};

export type InternshipCardsType = {
  id: number;
  title: string;
  descriptionArray: DescriptionItemData[];
  timeCount?: string;
  timeInfo?: string;
  image?: StaticImageData;
  additionalDescription?: string;
};
export const INTERNSHIPCARDS_DATA: Array<InternshipCardsType> = [
  {
    id: 1,
    title: "Практическое задание + теория",
    descriptionArray: [
      {
        id: 1,
        descriptionItem: "Закрепим личного ментора",
      },
      {
        id: 2,
        descriptionItem: "Дадим задание для оценки скиллов",
      },
      {
        id: 3,
        descriptionItem: "Подкрепим теорией по пройденному материалу",
      },
    ],
    timeCount: "1-1,5",
    timeInfo: "месяца",
  },
  {
    id: 2,
    title: "Дополнительная подготовка",
    descriptionArray: [
      {
        id: 1,
        descriptionItem: "Посмотрим результат первого этапа",
      },
      {
        id: 2,
        descriptionItem: "Составим индивидуальный план",
      },
      {
        id: 3,
        descriptionItem: "Прокачаем и подготовим к собеседованию",
      },
    ],
    timeCount: "1,5",
    timeInfo: "месяца",
  },
  {
    id: 3,
    title: "Выход на проекте",
    additionalDescription: "работа в штате",
    descriptionArray: [
      {
        id: 1,
        descriptionItem: "Технический рост в разных доменных областях",
      },
      {
        id: 2,
        descriptionItem: "Бенефиты от компании",
      },
      {
        id: 3,
        descriptionItem: "Ассессмент через 6 месяцев",
      },
    ],
    image: cardStars,
  },
];
