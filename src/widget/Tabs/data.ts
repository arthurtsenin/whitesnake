import { StaticImageData } from "next/image";

import commerce from "&/pannels/commerce.png";
import finance from "&/pannels/finance.png";
import healthcare from "&/pannels/healthcare.png";
import insurance from "&/pannels/insurance.png";
import learning from "&/pannels/learning.png";
import logistics from "&/pannels/logistics.png";
import web3 from "&/pannels/web3.png";
import aiohttpLogo from "&/tech-stack/aiohttp-logo.png";
import airFlow from "&/tech-stack/airflow-icon.png";
import auroradb from "&/tech-stack/auroradb-icon.png";
import awsLogo from "&/tech-stack/aws-icon.png";
import azureLogo from "&/tech-stack/azure-icon.png";
import bashLogo from "&/tech-stack/bach-icon.png";
import celeryLogo from "&/tech-stack/celery-icon.png";
import djangoLogo from "&/tech-stack/django-logo.png";
import dockercomposeLogo from "&/tech-stack/docker-compose-icon.png";
import dockerLogo from "&/tech-stack/docker-icon.png";
import dynamo from "&/tech-stack/dynamodb-icon.png";
import fastApiLogo from "&/tech-stack/fastapi-logo.png";
import flaskLogo from "&/tech-stack/flask-logo.png";
import gcpLogo from "&/tech-stack/gcp-icon.png";
import golangLogo from "&/tech-stack/golang-icon.png";
import kafkaLogo from "&/tech-stack/kafka-icon.png";
import kubernetesLogo from "&/tech-stack/kubernetes-icon.png";
import matplotlibLogo from "&/tech-stack/matplodlib-icon.png";
import mongo from "&/tech-stack/mongodb-icon.png";
import mysql from "&/tech-stack/mysql-icon.png";
import pandasLogo from "&/tech-stack/pandas-icon.png";
import plotly from "&/tech-stack/plotly.png";
import postgreSQL from "&/tech-stack/postgresql-icon.png";
import pyramidLogo from "&/tech-stack/pyramid-logo.png";
import pythonLogo from "&/tech-stack/python-icon.png";
import rabbitmqLogo from "&/tech-stack/rabbitmq-icon.png";
import redis from "&/tech-stack/redis-icon.png";
import seabornLogo from "&/tech-stack/seaborn-icon.png";
import solidityLogo from "&/tech-stack/solidity.png";
import sparkLogo from "&/tech-stack/spark-icon.png";
import tensorflow2 from "&/tech-stack/tensorflow-2.png";
import tensorFlowLogo from "&/tech-stack/tensorflow-icon.png";
import terraformLogo from "&/tech-stack/terraform-icon.png";
import tornadoLogo from "&/tech-stack/tornado-logo.png";
import web3pyLogo from "&/tech-stack/web3py-icon.png";

export type TabType = {
  id: number;
  name: string;
};

export type IndustryType = TabType & {
  description: string;
  image: StaticImageData | string;
};

export type TechnologieType = TabType & {
  cards: Array<{ name: string; icon: StaticImageData | string }>;
};

export type DataType<T> = Record<string, T>;

const INDUSTRY = {
  ONE: "Финансы",
  TWO: "Страхование",
  THREE: "Здоровье",
  FOUR: "E-commerce",
  FIVE: "Web3",
  SIX: "Логистика",
  SEVEN: "Образование",
};

export const INDUSTRY_DATA: DataType<IndustryType> = {
  [INDUSTRY.ONE]: {
    id: 1,
    name: INDUSTRY.ONE,
    description:
      "At Pynest, we bring our expertise to the finance industry, enabling us to develop customized applications that cater to your specific financial needs. Whether you require robust accounting software, comprehensive budgeting tools, advanced risk management solutions, or insightful financial reporting systems, our team can create tailored applications that optimize your financial processes and drive your business forward.",
    image: finance,
  },
  [INDUSTRY.TWO]: {
    id: 2,
    name: INDUSTRY.TWO,
    description:
      "Pynest has extensive experience in the insurance sector, enabling us to develop versatile applications that address the complex requirements of insurance companies. Our custom solutions cover policy administration, claims processing, underwriting, and risk assessment, empowering you to streamline your operations, enhance customer experiences, and remain competitive in the insurance market.",
    image: insurance,
  },
  [INDUSTRY.THREE]: {
    id: 3,
    name: INDUSTRY.THREE,
    description:
      "Pynest brings innovative solutions to healthcare. We can help with creation of applications redefine patient care, from efficient appointment scheduling to managing electronic health records securely. Embrace an era of advanced patient-centric care with Pynest’s expertise.",
    image: healthcare,
  },
  [INDUSTRY.FOUR]: {
    id: 4,
    name: INDUSTRY.FOUR,
    description:
      "Pynest understands the dynamics of the e-commerce industry and can develop tailored applications to propel your online business. Whether you require robust inventory management systems, seamless order processing platforms, customer relationship management (CRM) software, or secure payment gateways, our team can create scalable and user-friendly applications that enhance your e-commerce operations and drive customer satisfaction.",
    image: commerce,
  },
  [INDUSTRY.FIVE]: {
    id: 5,
    name: INDUSTRY.FIVE,
    description:
      "At Pynest, we are at the forefront of Web3 technology, allowing us to develop cutting-edge applications that leverage the power of decentralized networks and blockchain solutions. Whether you need decentralized app (dApp) development, smart contract implementation, or secure data storage solutions, our team has the expertise to create innovative applications that harness the advantages of Web3, such as transparency, security, and decentralization.",
    image: web3,
  },
  [INDUSTRY.SIX]: {
    id: 6,
    name: INDUSTRY.SIX,
    description:
      "Pynest’s specialized knowledge in the logistics industry enables us to develop tailored applications that cater to the unique demands of logistics and transportation management. Whether you need solutions to optimize employee performance, streamline vehicle maintenance, improve freight management, or boost overall business revenue, our team can design custom logistics software that integrates seamlessly with your existing systems.",
    image: logistics,
  },
  [INDUSTRY.SEVEN]: {
    id: 7,
    name: INDUSTRY.SEVEN,
    description:
      "With our expertise in e-learning technologies, we can develop transformative applications that revolutionize education and training. From comprehensive learning management systems to content authoring tools, assessment platforms, and analytics solutions, our applications empower educational institutions and corporate training providers to deliver engaging, personalized learning experiences while ensuring compliance with industry standards and regulations.",
    image: learning,
  },
};

const TECHNOLOGIE = {
  ONE: "Web frameworks",
  TWO: "Databases",
  THREE: "Data Engineering",
  FOUR: "DevOps",
  FIVE: "Message brockers",
  SIX: "Web3",
  SEVEN: "Cloud services",
};

export const TECHNOLOGIE_DATA: DataType<TechnologieType> = {
  [TECHNOLOGIE.ONE]: {
    id: 1,
    name: TECHNOLOGIE.ONE,
    cards: [
      { name: "fastAPI", icon: fastApiLogo },
      { name: "django", icon: djangoLogo },
      { name: "flask", icon: flaskLogo },
      { name: "tornado", icon: tornadoLogo },
      { name: "aiohttp", icon: aiohttpLogo },
      { name: "pyramid", icon: pyramidLogo },
    ],
  },
  [TECHNOLOGIE.TWO]: {
    id: 2,
    name: TECHNOLOGIE.TWO,
    cards: [
      { name: "postgreSQL", icon: postgreSQL },
      { name: "mySQL", icon: mysql },
      { name: "auroraDB", icon: auroradb },
      { name: "mongoDB", icon: mongo },
      { name: "redis", icon: redis },
      { name: "dynamoDB", icon: dynamo },
    ],
  },
  [TECHNOLOGIE.THREE]: {
    id: 3,
    name: TECHNOLOGIE.THREE,
    cards: [
      { name: "spark", icon: sparkLogo },
      { name: "airFlow", icon: airFlow },
      { name: "tensorFlow", icon: tensorFlowLogo },
      { name: "pandas", icon: pandasLogo },
      { name: "matplotlib", icon: matplotlibLogo },
      { name: "seaborn", icon: seabornLogo },
      { name: "plotly", icon: plotly },
      { name: "numPy", icon: tensorflow2 },
    ],
  },
  [TECHNOLOGIE.FOUR]: {
    id: 4,
    name: TECHNOLOGIE.FOUR,
    cards: [
      { name: "docker", icon: dockerLogo },
      { name: "terraform", icon: terraformLogo },
      { name: "bash", icon: bashLogo },
      { name: "docker-compose", icon: dockercomposeLogo },
      { name: "kubernetes", icon: kubernetesLogo },
    ],
  },
  [TECHNOLOGIE.FIVE]: {
    id: 5,
    name: TECHNOLOGIE.FIVE,
    cards: [
      { name: "kafka", icon: kafkaLogo },
      { name: "rabbitMQ", icon: rabbitmqLogo },
      { name: "celery", icon: celeryLogo },
    ],
  },
  [TECHNOLOGIE.SIX]: {
    id: 6,
    name: TECHNOLOGIE.SIX,
    cards: [
      { name: "python", icon: pythonLogo },
      { name: "web3py", icon: web3pyLogo },
      { name: "golang", icon: golangLogo },
      { name: "solidity", icon: solidityLogo },
    ],
  },
  [TECHNOLOGIE.SEVEN]: {
    id: 7,
    name: TECHNOLOGIE.SEVEN,
    cards: [
      { name: "azure", icon: azureLogo },
      { name: "aWS", icon: awsLogo },
      { name: "gCP", icon: gcpLogo },
    ],
  },
};
