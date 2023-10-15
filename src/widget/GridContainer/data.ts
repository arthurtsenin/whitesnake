import { StaticImageData } from "next/image";

import { DYNAMIC_ROUTES } from "../Navigation/routes";

import ai from "&/cases-preview/ai-case-image.png";
import fp_a from "&/cases-preview/datarails-case-image.png";
import digital_asset from "&/cases-preview/digital-case-image.png";
import food_delivery from "&/cases-preview/food-case-image.png";
import healt_monitoring from "&/cases-preview/health-monitoring-case-image.png";
import healt_insurance from "&/cases-preview/healthcare-case-image.png";
import sdk from "&/cases-preview/sdk-case-image.png";

export type CasePreviewType = {
  id: number;
  caption: string;
  description: string;
  path: string;
  image: StaticImageData | string;
};

export const CASES_PREVIEW_CARDS: Array<CasePreviewType> = [
  {
    id: 0,
    caption: "Health Insurance Platform",
    description:
      "The platform is an innovative health insurance system that leverages full-stack technology to deliver accessible and cost-effective healthcare services. Designed to offer personalized experiences, the platform aims to provide member-focused services while adapting swiftly to evolving needs. With an emphasis on engagement and personalized guidance, it embodies a flexible, technology-driven approach to healthcare.",
    path: DYNAMIC_ROUTES.INSURANCE,
    image: healt_insurance,
  },
  {
    id: 1,
    caption: "Automated Excel-Based FP&A Solution",
    description:
      "The platform is an innovative financial planning and analysis (FP&A) solution designed for Excel users seeking to leverage automation in their financial processes. It streamlines data collection, analysis, and reporting while allowing finance professionals to work within their familiar Excel environment.",
    path: DYNAMIC_ROUTES.FPA_SOLUTION,
    image: fp_a,
  },
  {
    id: 2,
    caption: "Digital Asset Staking service",
    description:
      "The service offers a secure and user-friendly interface, enabling users to stake their cryptocurrencies, contribute to blockchain networks, and earn rewards. With a focus on security, transparency, and a seamless user experience, the aims to provide a rewarding staking experience for users.",
    path: DYNAMIC_ROUTES.DIGITAL_ASSET,
    image: digital_asset,
  },
  {
    id: 3,
    caption: "Food Delivery Service",
    description:
      "The platform serves as a unique and innovative food delivery service that provides customers with fresh produce boxes, filled with surplus farm products. The service aims to tackle food waste while promoting healthy nutrition habits.",
    path: DYNAMIC_ROUTES.FOOD_DELIVERY,
    image: food_delivery,
  },
  {
    id: 4,
    caption: "Health Monitoring Service",
    description:
      "An innovative health monitoring service that collects real-time health metrics from wearable devices, analyzes the data and alerts users to potential health issues. By enabling early detection of pathologies, the platform helps users receive timely medical assistance and supports preventive care.",
    path: DYNAMIC_ROUTES.HEALTH_MONITORING,
    image: healt_monitoring,
  },
  {
    id: 5,
    caption: "Platform for Customer Support with AI-Powered Chatbots",
    description:
      "An advanced system for creating AI-powered chatbots that automate customer support, with a visual bot constructor to design bots using blocks. It employs robust technologies and tools to handle massive data streams in real-time and analyze bot performance.",
    path: DYNAMIC_ROUTES.AI_CHATBOTS,
    image: ai,
  },
  {
    id: 6,
    caption: "Payroll Integration Multifunctional SDK",
    description:
      "The platform offers a secure and multifunctional SDK for bank account users, ensuring the safe exchange of sensitive information between banks and clients. By encrypting data, the platform significantly reduces the risk of data leaks during transactions.",
    path: DYNAMIC_ROUTES.INTEGRATION_SDK,
    image: sdk,
  },
];
