import { FC } from "react";

export type VacancyCardType = {
  title: string;
  location: string;
  url: string;
};

type VacancyCardProps = object & VacancyCardType;

export const VacancyCard: FC<VacancyCardProps> = () => {
  return <div>xxxxxxxxxx</div>;
};
