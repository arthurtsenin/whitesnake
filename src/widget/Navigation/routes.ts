export type LinkType = {
  id: number;
  href: string;
  label: string;
};

export type LinksType = Record<string, LinkType>;

export const HOME_LINK: LinkType = {
  id: 1,
  href: "/",
  label: "WhiteSnake",
};

export const ROUTES = {
  ONE: { label: "Стажировка", href: "internship" },
  TWO: { label: "Портфолио", href: "portfolio" },
  THREE: { label: "Услуги", href: "services" },
  FOUR: { label: "О нас", href: "about" },
  FIVE: { label: "Вакансии", href: "vacancies" },
};

export const DYNAMIC_ROUTES: Record<string, string> = {
  INSURANCE: "health-insurance-platform",
  FPA_SOLUTION: "fpa-solution",
  DIGITAL_ASSET: "digital-asset-staking-service",
  FOOD_DELIVERY: "food-delivery-service",
  HEALTH_MONITORING: "health-monitoring-service",
  AI_CHATBOTS: "ai-powered-chatbots-building-platform",
  INTEGRATION_SDK: "payroll-integration-sdk",
};

export const NAVIGATION_LINKS: LinksType = {
  [ROUTES.ONE.href]: {
    id: 1,
    href: `/${ROUTES.ONE.href}`,
    label: ROUTES.ONE.label,
  },
  [ROUTES.TWO.href]: {
    id: 2,
    href: `/${ROUTES.TWO.href}`,
    label: ROUTES.TWO.label,
  },
  [ROUTES.THREE.href]: {
    id: 3,
    href: `/${ROUTES.THREE.href}`,
    label: ROUTES.THREE.label,
  },
  [ROUTES.FOUR.href]: {
    id: 4,
    href: `/${ROUTES.FOUR.href}`,
    label: ROUTES.FOUR.label,
  },
  [ROUTES.FIVE.href]: {
    id: 5,
    href: `/${ROUTES.FIVE.href}`,
    label: ROUTES.FIVE.label,
  },
};
