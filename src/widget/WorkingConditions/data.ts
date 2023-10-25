import { StaticImageData } from "next/image";

import diamonds from "&/images/career/diamonds.png";
import flash from "&/images/career/flash.png";
import skittles from "&/images/career/skittles.png";
import target from "&/images/career/target.png";

export type WorkingConditionType = {
  id?: number;
  title: string;
  subtitle: string;
  imageSrc: StaticImageData;
};

export const WORKING_CONDITIONS_DATA: Array<WorkingConditionType> = [
  {
    id: 1,
    title: "Возможности роста",
    subtitle: "Постоянное обучение, внутренние встречи и внутренние хатаконы",
    imageSrc: skittles,
  },
  {
    id: 2,
    title: "Прозрачная система мотивации",
    subtitle:
      "Мы предоставляем возможность постоянного обучения членам нашей команды, что позволяет им оставаться в курсе последних технологий и отраслевых тенденций.",
    imageSrc: flash,
  },
  {
    id: 3,
    title: "Сплоченность",
    subtitle:
      "Мы организуем внутренние встречи и тренинги, чтобы наши разработчики могли обменяться опытом и узнать что-то новое.",
    imageSrc: diamonds,
  },
  {
    id: 4,
    title: "Work&life баланс",
    subtitle:
      "Мы организуем внутренние хакатоны, на которых наши разработчики могут работать над новыми проектами и идеями.",
    imageSrc: target,
  },
];
