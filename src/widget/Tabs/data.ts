import { StaticImageData } from "next/image";

import artboard1 from "$/artboards/Artboard1-min.webp";
import artboard2 from "$/artboards/Artboard2-min.webp";
import artboard3 from "$/artboards/Artboard3-min.webp";
import artboard4 from "$/artboards/Artboard4-min.webp";
import artboard5 from "$/artboards/Artboard5-min.webp";
import artboard6 from "$/artboards/Artboard6-min.webp";
import artboard7 from "$/artboards/Artboard7-min.webp";

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
  image: StaticImageData;
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
    description:
      "At Pynest, we bring our expertise to the finance industry, enabling us to develop customized applications that cater to your specific financial needs. Whether you require robust accounting software, comprehensive budgeting tools, advanced risk management solutions, or insightful financial reporting systems, our team can create tailored applications that optimize your financial processes and drive your business forward.",
    image: artboard1,
  },
  [INDUSTRY_TABS[INDUSTRY.TWO].name]: {
    id: INDUSTRY_TABS[INDUSTRY.TWO].id,
    name: INDUSTRY_TABS[INDUSTRY.TWO].name,
    description:
      "Pynest has extensive experience in the insurance sector, enabling us to develop versatile applications that address the complex requirements of insurance companies. Our custom solutions cover policy administration, claims processing, underwriting, and risk assessment, empowering you to streamline your operations, enhance customer experiences, and remain competitive in the insurance market.",
    image: artboard2,
  },
  [INDUSTRY_TABS[INDUSTRY.THREE].name]: {
    id: INDUSTRY_TABS[INDUSTRY.THREE].id,
    name: INDUSTRY_TABS[INDUSTRY.THREE].name,
    description: `Pynest understands the dynamics of the e-commerce industry and can develop tailored 
      applications to propel your online business. Whether you require robust inventory management systems, 
      seamless order processing platforms, customer relationship management (CRM) software, 
      or secure payment gateways, our team can create scalable and user-friendly applications that 
      enhance your e-commerce operations and drive customer satisfaction.`,
    image: artboard3,
  },
  [INDUSTRY_TABS[INDUSTRY.FOUR].name]: {
    id: INDUSTRY_TABS[INDUSTRY.FOUR].id,
    name: INDUSTRY_TABS[INDUSTRY.FOUR].name,
    description:
      "Pynest brings innovative solutions to healthcare. We can help with creation of applications redefine patient care, from efficient appointment scheduling to managing electronic health records securely.  Embrace an era of advanced patient-centric care with Pynest's expertise.",
    image: artboard4,
  },
  [INDUSTRY_TABS[INDUSTRY.FIVE].name]: {
    id: INDUSTRY_TABS[INDUSTRY.FIVE].id,
    name: INDUSTRY_TABS[INDUSTRY.FIVE].name,
    description:
      "At Pynest, we are at the forefront of Web3 technology, allowing us to develop cutting-edge applications that leverage the power of decentralized networks and blockchain solutions. Whether you need decentralized app (dApp) development, smart contract implementation, or secure data storage solutions, our team has the expertise to create innovative applications that harness the advantages of Web3, such as transparency, security, and decentralization.",
    image: artboard5,
  },
  [INDUSTRY_TABS[INDUSTRY.SIX].name]: {
    id: INDUSTRY_TABS[INDUSTRY.SIX].id,
    name: INDUSTRY_TABS[INDUSTRY.SIX].name,
    description:
      "Pynest's specialized knowledge in the logistics industry enables us to develop tailored applications that cater to the unique demands of logistics and transportation management. Whether you need solutions to optimize employee performance, streamline vehicle maintenance, improve freight management, or boost overall business revenue, our team can design custom logistics software that integrates seamlessly with your existing systems.",
    image: artboard6,
  },
  [INDUSTRY_TABS[INDUSTRY.SEVEN].name]: {
    id: INDUSTRY_TABS[INDUSTRY.SEVEN].id,
    name: INDUSTRY_TABS[INDUSTRY.SEVEN].name,
    description:
      "With our expertise in e-learning technologies, we can develop transformative applications that revolutionize education and training. From comprehensive learning management systems to content authoring tools, assessment platforms, and analytics solutions, our applications empower educational institutions and corporate training providers to deliver engaging, personalized learning experiences while ensuring compliance with industry standards and regulations.",
    image: artboard7,
  },
};
