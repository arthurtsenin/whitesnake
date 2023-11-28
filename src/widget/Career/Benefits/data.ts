import { StaticImageData } from "next/image";

import benefitCardBg1 from "&/images/career/benefits/benefit-card-bg-1.webp";
import benefitCardBg2 from "&/images/career/benefits/benefit-card-bg-2.webp";
import benefitCardBg3 from "&/images/career/benefits/benefit-card-bg-3.webp";
import benefitCardBg4 from "&/images/career/benefits/benefit-card-bg-4.webp";
import benefitCardBg5 from "&/images/career/benefits/benefit-card-bg-5.webp";
import benefitCardBg6 from "&/images/career/benefits/benefit-card-bg-6.webp";

export type BenefitType = {
  id: number;
  title: string;
  description: string;
  imageSrc: StaticImageData;
};

export const BENEFITS_DATA: Array<BenefitType> = [
  {
    id: 1,
    title: "Забота о здоровье",
    description:
      "Наша компания помогает повышать доступность медицинских услуг.",
    imageSrc: benefitCardBg1,
  },
  {
    id: 2,
    title: "Sick Days",
    description:
      "В первый год работы доступно 3 дня в год, а начиная со второго 5 дней в год.",
    imageSrc: benefitCardBg2,
  },
  {
    id: 3,
    title: "Спорт и хобби",
    description: "Частичная компенсация расходов на ваше любимое дело",
    imageSrc: benefitCardBg3,
  },
  {
    id: 4,
    title: "Техника",
    description:
      "Предоставляем помощь в приобретении необходимого оборудования",
    imageSrc: benefitCardBg4,
  },
  {
    id: 5,
    title: "Сытый сотрудник",
    description: "Компания частично компенсирует расходы потраченные на обеды",
    imageSrc: benefitCardBg5,
  },
  {
    id: 6,
    title: "Транспорт",
    description:
      "Компания поможет вам сэкономить деньги, потраченные на дорогу в офис.",
    imageSrc: benefitCardBg6,
  },
];
