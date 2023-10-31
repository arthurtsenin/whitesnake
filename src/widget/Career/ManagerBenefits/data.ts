import { StaticImageData } from "next/image";

import leftCard from "&/images/career/left-card.png";
import middleCard from "&/images/career/middle-card.png";
import rightCard from "&/images/career/right-card.png";

export type ManagerBenefitType = {
  id?: number;
  title: string;
  subtitle: string;
  imageSrc: StaticImageData;
};

export const MANAGER_BENEFITS_DATA: Array<ManagerBenefitType> = [
  {
    id: 1,
    title: "Бонусы к з/п",
    subtitle:
      "Выработали прозрачную систему мотивации, где пропорционально количеству стажеров растет материальная компенсация и не только",
    imageSrc: leftCard,
  },
  {
    id: 2,
    title: "Собственный сквад",
    subtitle:
      "Максимально постараемся помочь в начале пути. Другие сквад-лиды поделятся опытом и дадут рекомендации",
    imageSrc: middleCard,
  },
  {
    id: 3,
    title: "Навыки менеджера",
    subtitle:
      "Дадим возможность уйтис проекта с сохранением оклада и контролировать работу сквада, выполнять задачи по офису",
    imageSrc: rightCard,
  },
];
