export type BenefitType = {
  id: number;
  title: string;
  description: string;
};

export const BENEFITS_DATA: Array<BenefitType> = [
  {
    id: 1,
    title: "Забота о здоровье",
    description:
      "Наша компания помогает повышать доступность медицинских услуг.",
  },
  {
    id: 2,
    title: "Sick Days",
    description:
      "В первый год работы доступно 3 дня в год, а начиная со второго 5 дней в год.",
  },
  {
    id: 3,
    title: "Спорт и хобби",
    description: "Частичная компенсация расходов на ваше любимое дело",
  },
  {
    id: 4,
    title: "Техника",
    description: "Педоставляем помощь в приобретении необходимого оборудования",
  },
  {
    id: 5,
    title: "Сытый сотрудник",
    description: "Компания частично компенсирует расходы потраченные на обеды",
  },
  {
    id: 6,
    title: "Транспорт",
    description:
      "Компания поможет вам сэкономить деньги, потраченные на дорогу в офис.",
  },
];
