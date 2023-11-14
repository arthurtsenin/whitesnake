import { StaticImageData } from "next/image";

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

export type AdvantageType = {
  id: number;
  title: string;
  description: string;
  color: "green" | "red";
  figure: StaticImageData | string;
  type: "плюшки" | "бенефиты";
};

export const BENEFITS_DATA: Array<AdvantageType> = [
  {
    id: 1,
    title: "Эффективный рост",
    description:
      "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям. Мы ценим творчество и свободу мысли и достигаем по-настоящему впечатляющих результатов.",
    color: "red",
    figure: raindrop2,
    type: "бенефиты",
  },
  {
    id: 2,
    title: "Курсы английского",
    description:
      "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям. Мы ценим творчество и свободу мысли и достигаем по-настоящему впечатляющих результатов.",
    color: "red",
    figure: raindrop2,
    type: "бенефиты",
  },
  {
    id: 3,
    title: "Личный ментор",
    description:
      "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям. Мы ценим творчество и свободу мысли и достигаем по-настоящему впечатляющих результатов.",
    color: "red",
    figure: raindrop3,
    type: "бенефиты",
  },
  {
    id: 4,
    title: "Гибкий график",
    description:
      "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям. Мы ценим творчество и свободу мысли и достигаем по-настоящему впечатляющих результатов.",
    color: "red",
    figure: raindrop4,
    type: "бенефиты",
  },
  {
    id: 5,
    title: "Развлечения",
    description:
      "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям. Мы ценим творчество и свободу мысли и достигаем по-настоящему впечатляющих результатов.",
    color: "red",
    figure: raindrop5,
    type: "бенефиты",
  },
  {
    id: 6,
    title: "Оформление практики",
    description:
      "Мы — не просто IT-компания, а дружная команда энтузиастов с общей страстью к технологиям и инновациям. Мы ценим творчество и свободу мысли и достигаем по-настоящему впечатляющих результатов.",
    color: "red",
    figure: raindrop6,
    type: "бенефиты",
  },
  {
    id: 7,
    title: "Сытый сотрудник",
    description: "Компания частично компенсирует расходы потраченные на обеды",
    color: "green",
    figure: raindrop7,
    type: "плюшки",
  },
  {
    id: 8,
    title: "Спорт и хобби",
    description: "Частичная компенсация расходов на ваше любимое дело",
    color: "green",
    figure: raindrop8,
    type: "плюшки",
  },
  {
    id: 9,
    title: "Транспорт",
    description:
      "Компания поможет вам сэкономить деньги, потраченные на дорогу в офис.",
    color: "green",
    figure: raindrop9,
    type: "плюшки",
  },
  {
    id: 10,
    title: "Sick Days",
    description:
      "В первый год работы доступно 3 дня в год, а начиная со второго 5 дней в год.",
    color: "green",
    figure: raindrop10,
    type: "плюшки",
  },
  {
    id: 11,
    title: "Техника",
    description:
      "Предоставляем помощь в приобретении необходимого оборудования",
    color: "green",
    figure: raindrop11,
    type: "плюшки",
  },
  {
    id: 12,
    title: "Забота о здоровье",
    description:
      "Наша компания помогает повышать доступность медицинских услуг.",
    color: "green",
    figure: raindrop12,
    type: "плюшки",
  },
];
