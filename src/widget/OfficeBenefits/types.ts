import { StaticImageData } from "next/image";

export type OfficeBenefitData = {
  variant?: "square" | "circle" | "rectangle";
  icon: StaticImageData;
  title: string;
  desc: string;
};
