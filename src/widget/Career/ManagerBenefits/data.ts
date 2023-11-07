export type ManagerBenefitType = {
  id?: number;
  position: string;
  title: string;
  subtitle: string;
};

export const MANAGER_BENEFITS_DATA: Array<ManagerBenefitType> = [
  {
    id: 1,
    position: "first",
    title: "Бонусы к з/п",
    subtitle:
      "Выработали прозрачную систему мотивации, где пропорционально количеству стажеров растет материальная компенсация и не только",
  },
  {
    id: 2,
    position: "second",
    title: "Собственный сквад",
    subtitle:
      "Максимально постараемся помочь в начале пути. Другие сквад-лиды поделятся опытом и дадут рекомендации",
  },
  {
    id: 3,
    position: "third",
    title: "Навыки менеджера",
    subtitle:
      "Дадим возможность уйти с проекта с сохранением оклада и контролировать работу сквада, выполнять задачи по офису",
  },
];
