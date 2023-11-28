import { StaticImageData } from "next/image";

import aiohttpLogo from "&/images/dynamic-tabs/aiohttp.svg";
import airFlow from "&/images/dynamic-tabs/airflow.svg";
import auroradb from "&/images/dynamic-tabs/auroradb.svg";
import awsLogo from "&/images/dynamic-tabs/aws.svg";
import azureLogo from "&/images/dynamic-tabs/azure.svg";
import bashLogo from "&/images/dynamic-tabs/bash.svg";
import celeryLogo from "&/images/dynamic-tabs/celery-icon.png";
import djangoLogo from "&/images/dynamic-tabs/django.svg";
import dockerLogo from "&/images/dynamic-tabs/docker.svg";
import dockercomposeLogo from "&/images/dynamic-tabs/docker-compose-icon.png";
import dynamo from "&/images/dynamic-tabs/dynamodb.svg";
import fastApiLogo from "&/images/dynamic-tabs/fastapi-logo.svg";
import flaskLogo from "&/images/dynamic-tabs/flask.svg";
import golangLogo from "&/images/dynamic-tabs/golang.svg";
import gcpLogo from "&/images/dynamic-tabs/google-cloud.svg";
import kafkaLogo from "&/images/dynamic-tabs/kafka.svg";
import kubernetesLogo from "&/images/dynamic-tabs/kubernets.svg";
import matplotlibLogo from "&/images/dynamic-tabs/matplotlib.svg";
import mongo from "&/images/dynamic-tabs/mongodb.svg";
import mysql from "&/images/dynamic-tabs/mysql.svg";
import tensorflow2 from "&/images/dynamic-tabs/numpy.svg";
import pandasLogo from "&/images/dynamic-tabs/pandas.svg";
import plotly from "&/images/dynamic-tabs/plotly.svg";
import postgreSQL from "&/images/dynamic-tabs/postgresql.svg";
import pyramidLogo from "&/images/dynamic-tabs/pyramid.svg";
import pythonLogo from "&/images/dynamic-tabs/python.svg";
import rabbitmqLogo from "&/images/dynamic-tabs/rabbitmq.svg";
import redis from "&/images/dynamic-tabs/redis-icon.svg";
import seabornLogo from "&/images/dynamic-tabs/seaborn.svg";
import solidityLogo from "&/images/dynamic-tabs/solidity.svg";
import sparkLogo from "&/images/dynamic-tabs/spark.png";
import tensorFlowLogo from "&/images/dynamic-tabs/tensorflow.svg";
import terraformLogo from "&/images/dynamic-tabs/terraform.svg";
import tornadoLogo from "&/images/dynamic-tabs/tornado.png";
import web3pyLogo from "&/images/dynamic-tabs/web3.svg";
import commerce from "&/images/static-tabs/commerce.webp";
import finance from "&/images/static-tabs/finance.webp";
import healthcare from "&/images/static-tabs/healthcare.webp";
import insurance from "&/images/static-tabs/insurance.webp";
import learning from "&/images/static-tabs/learning.webp";
import logistics from "&/images/static-tabs/logistics.webp";
import web3 from "&/images/static-tabs/web3.webp";

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
  FOUR: "Электронная коммерция",
  FIVE: "Web3",
  SIX: "Логистика",
  SEVEN: "Образование",
};

export const INDUSTRY_DATA: DataType<IndustryType> = {
  [INDUSTRY.ONE]: {
    id: 1,
    name: INDUSTRY.ONE,
    description:
      "Большой опыт в финансовой отрасли позволяет нам разрабатывать  приложения в соответствии с вашими требованиями. Надежное бухгалтерское ПО, комплексные инструменты планирования бюджета, передовые решения по управлению рисками или эффективные системы финансовой отчетности — наша команда может создать индивидуальные решения, которые помогут оптимизировать ваши финансовые процессы и будут способствовать развитию вашего бизнеса.",
    image: finance.src,
  },
  [INDUSTRY.TWO]: {
    id: 2,
    name: INDUSTRY.TWO,
    description:
      "Большой опыт в сфере страхования позволяет нам разрабатывать универсальные приложения, которые отвечают сложным требованиям страховых компаний. Наши решения: администрирование договоров страхования, обработка претензий, андеррайтинг и оценивание рисков. Мы помогаем оптимизировать работу, улучшить качество обслуживания клиентов и оставаться конкурентоспособными на страховом рынке.",
    image: insurance.src,
  },
  [INDUSTRY.THREE]: {
    id: 3,
    name: INDUSTRY.THREE,
    description:
      "Мы предлагаем инновационные решения в сфере здравоохранения. Наша команда может помочь в создании приложений, позволяющих по-новому взглянуть на проблему контроля за пациентами: от эффективного планирования приема до безопасного управления электронными медицинскими записями.",
    image: healthcare.src,
  },
  [INDUSTRY.FOUR]: {
    id: 4,
    name: INDUSTRY.FOUR,
    description:
      "Мы понимаем динамику индустрии электронной коммерции и можем разработать индивидуальные приложения для продвижения вашего онлайн-бизнеса. Надежные системы управления запасами, бесперебойные платформы обработки заказов, системы CRM или безопасные платежные шлюзы — наша команда может создать масштабируемые и удобные в использовании приложения, которые улучшат ваши электронные операции и повысят качество обслуживания клиентов.",
    image: commerce.src,
  },
  [INDUSTRY.FIVE]: {
    id: 5,
    name: INDUSTRY.FIVE,
    description:
      "Важнейшим направлением для Pynest является создание инновационных технологий в сфере Web3. Наш энтузиазм и большой опыт позволяет разрабатывать передовые приложения, использующие возможности децентрализованных сетей и блокчейн-решений. Если надо разработать децентрализованные приложения (DApp), внедрить смарт-контракты или найти прозрачные решения для безопасного хранения данных, наша команда готова создать уникальные приложения, использующие преимущества Web3.",
    image: web3.src,
  },
  [INDUSTRY.SIX]: {
    id: 6,
    name: INDUSTRY.SIX,
    description:
      "Профессиональные знания в области логистики позволяют нам разрабатывать индивидуальные приложения, удовлетворяющие уникальным требованиям управления перевозками. Если вам нужны решения для оптимизации работы сотрудников, модернизирования технического обслуживания транспортных средств, улучшения управления перевозками или увеличения общего дохода бизнеса, наша команда может разработать индивидуальное ПО, которое легко интегрируется с вашими текущими системами.",
    image: logistics.src,
  },
  [INDUSTRY.SEVEN]: {
    id: 7,
    name: INDUSTRY.SEVEN,
    description:
      "Благодаря нашему опыту в сфере онлайн-образования, мы можем разрабатывать передовые приложения, которые могут кардинально изменить эту область. Комплексные системы управления в процессе обучения, инструменты для создания контента, платформы для оценивания — наши приложения обеспечивают образовательные учреждения и корпоративные тренинги увлекательным, персонализированным обучением, учитывая отраслевые стандарты и нормативные акты.",
    image: learning.src,
  },
};

const TECHNOLOGIE = {
  ONE: "Фреймворки",
  TWO: "Базы данных",
  THREE: "Дата Инжиниринг",
  FOUR: "ДевОпс",
  FIVE: "Брокер сообщений",
  SIX: "Web3",
  SEVEN: "Облачные сервисы",
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
