import { FC } from "react";

import { SomeCompanyNumbersCardType } from "../../data";

type NumberCardProps = object & SomeCompanyNumbersCardType;

export const NumberCard: FC<NumberCardProps> = () => {
  return "NumberCard";
};
