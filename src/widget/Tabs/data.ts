import { StaticImageData } from "next/image";

export type TabType = {
  id: number;
  name: string;
};

export type TabsType = {
  [key: string]: TabType;
};

export type PanelType = {
  id: number;
  name: string;
  description: string;
  image: StaticImageData | string;
};

export type PanelsType = {
  [key: string]: PanelType;
};

const enum INDUSTRY {
  ONE = "Finance",
  TWO = "Insurance",
  THREE = "E-commerce",
  FOUR = "Healthcare",
  FIVE = "Web3",
  SIX = "Logistics",
  SEVEN = "E-learning",
}

export const INDUSTRY_TABS: TabsType = {
  [INDUSTRY.ONE]: { id: 1, name: INDUSTRY.ONE },
  [INDUSTRY.TWO]: { id: 2, name: INDUSTRY.TWO },
  [INDUSTRY.THREE]: { id: 3, name: INDUSTRY.THREE },
  [INDUSTRY.FOUR]: { id: 4, name: INDUSTRY.FOUR },
  [INDUSTRY.FIVE]: { id: 5, name: INDUSTRY.FIVE },
  [INDUSTRY.SIX]: { id: 6, name: INDUSTRY.SIX },
  [INDUSTRY.SEVEN]: { id: 7, name: INDUSTRY.SEVEN },
};

export const INDUSTRY_PANELS: PanelsType = {
  [INDUSTRY_TABS[INDUSTRY.ONE].name]: {
    id: INDUSTRY_TABS[INDUSTRY.ONE].id,
    name: INDUSTRY_TABS[INDUSTRY.ONE].name,
    description: "",
    image: "",
  },
  [INDUSTRY_TABS[INDUSTRY.TWO].name]: {
    id: INDUSTRY_TABS[INDUSTRY.TWO].id,
    name: INDUSTRY_TABS[INDUSTRY.TWO].name,
    description: "",
    image: "",
  },
  [INDUSTRY_TABS[INDUSTRY.THREE].name]: {
    id: INDUSTRY_TABS[INDUSTRY.THREE].id,
    name: INDUSTRY_TABS[INDUSTRY.THREE].name,
    description: "",
    image: "",
  },
  [INDUSTRY_TABS[INDUSTRY.FOUR].name]: {
    id: INDUSTRY_TABS[INDUSTRY.FOUR].id,
    name: INDUSTRY_TABS[INDUSTRY.FOUR].name,
    description: "",
    image: "",
  },
  [INDUSTRY_TABS[INDUSTRY.FIVE].name]: {
    id: INDUSTRY_TABS[INDUSTRY.FIVE].id,
    name: INDUSTRY_TABS[INDUSTRY.FIVE].name,
    description: "",
    image: "",
  },
  [INDUSTRY_TABS[INDUSTRY.SIX].name]: {
    id: INDUSTRY_TABS[INDUSTRY.SIX].id,
    name: INDUSTRY_TABS[INDUSTRY.SIX].name,
    description: "",
    image: "",
  },
  [INDUSTRY_TABS[INDUSTRY.SEVEN].name]: {
    id: INDUSTRY_TABS[INDUSTRY.SEVEN].id,
    name: INDUSTRY_TABS[INDUSTRY.SEVEN].name,
    description: "",
    image: "",
  },
};
