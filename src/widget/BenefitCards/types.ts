import { StaticImageData } from "next/image";

export type BenefitCardData = {
  cardTitle: string;
  cardDesc: string;
  buttonText: string;
  icon?: StaticImageData;
  link: string;
};
