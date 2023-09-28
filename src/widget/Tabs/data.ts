import { StaticImageData } from "next/image";

import artboard1 from "&/artboards/Artboard1-min.webp";
import artboard2 from "&/artboards/Artboard2-min.webp";
import artboard3 from "&/artboards/Artboard3-min.webp";
import artboard4 from "&/artboards/Artboard4-min.webp";
import artboard5 from "&/artboards/Artboard5-min.webp";
import artboard6 from "&/artboards/Artboard6-min.webp";
import artboard7 from "&/artboards/Artboard7-min.webp";
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

const enum INDUSTRY {
  ONE = "Finance",
  TWO = "Insurance",
  THREE = "E-commerce",
  FOUR = "Healthcare",
  FIVE = "Web3",
  SIX = "Logistics",
  SEVEN = "E-learning",
}

export const INDUSTRY_DATA: DataType<IndustryType> = {
  [INDUSTRY.ONE]: {
    id: 1,
    name: INDUSTRY.ONE,
    description: "",
    image: artboard1,
  },
  [INDUSTRY.TWO]: {
    id: 2,
    name: INDUSTRY.TWO,
    description: "",
    image: artboard2,
  },
  [INDUSTRY.THREE]: {
    id: 3,
    name: INDUSTRY.THREE,
    description: "",
    image: artboard3,
  },
  [INDUSTRY.FOUR]: {
    id: 4,
    name: INDUSTRY.FOUR,
    description: "",
    image: artboard4,
  },
  [INDUSTRY.FIVE]: {
    id: 5,
    name: INDUSTRY.FIVE,
    description: "",
    image: artboard5,
  },
  [INDUSTRY.SIX]: {
    id: 6,
    name: INDUSTRY.SIX,
    description: "",
    image: artboard6,
  },
  [INDUSTRY.SEVEN]: {
    id: 7,
    name: INDUSTRY.SEVEN,
    description: "",
    image: artboard7,
  },
};

const enum TECHNOLOGIE {
  ONE = "Web frameworks",
  TWO = "Databases",
  THREE = "Data Engineering",
  FOUR = "DevOps",
  FIVE = "Message brockers",
  SIX = "Web3",
  SEVEN = "Cloud services",
}

export const TECHNOLOGIE_DATA: DataType<TechnologieType> = {
  [TECHNOLOGIE.ONE]: {
    id: 1,
    name: TECHNOLOGIE.ONE,
    cards: [
      { name: "FastAPI", icon: fastApiLogo },
      { name: "Django", icon: djangoLogo },
      { name: "Flask", icon: flaskLogo },
      { name: "Tornado", icon: tornadoLogo },
      { name: "Aiohttp", icon: aiohttpLogo },
      { name: "Pyramid", icon: pyramidLogo },
    ],
  },
  [TECHNOLOGIE.TWO]: {
    id: 2,
    name: TECHNOLOGIE.TWO,
    cards: [
      { name: "PostgreSQL", icon: postgreSQL },
      { name: "MySQL", icon: mysql },
      { name: "AuroraDB", icon: auroradb },
      { name: "MongoDB", icon: mongo },
      { name: "Redis", icon: redis },
      { name: "DynamoDB", icon: dynamo },
    ],
  },
  [TECHNOLOGIE.THREE]: {
    id: 3,
    name: TECHNOLOGIE.THREE,
    cards: [
      { name: "Spark", icon: sparkLogo },
      { name: "AirFlow", icon: airFlow },
      { name: "TensorFlow", icon: tensorFlowLogo },
      { name: "Pandas", icon: pandasLogo },
      { name: "Matplotlib", icon: matplotlibLogo },
      { name: "Seaborn", icon: seabornLogo },
      { name: "Plotly", icon: plotly },
      { name: "NumPy", icon: tensorflow2 },
    ],
  },
  [TECHNOLOGIE.FOUR]: {
    id: 4,
    name: TECHNOLOGIE.FOUR,
    cards: [
      { name: "Docker", icon: dockerLogo },
      { name: "Terraform", icon: terraformLogo },
      { name: "Bash", icon: bashLogo },
      { name: "Docker-compose", icon: dockercomposeLogo },
      { name: "Kubernetes", icon: kubernetesLogo },
    ],
  },
  [TECHNOLOGIE.FIVE]: {
    id: 5,
    name: TECHNOLOGIE.FIVE,
    cards: [
      { name: "Kafka", icon: kafkaLogo },
      { name: "RabbitMQ", icon: rabbitmqLogo },
      { name: "Celery", icon: celeryLogo },
    ],
  },
  [TECHNOLOGIE.SIX]: {
    id: 6,
    name: TECHNOLOGIE.SIX,
    cards: [
      { name: "Python", icon: pythonLogo },
      { name: "Web3py", icon: web3pyLogo },
      { name: "Golang", icon: golangLogo },
      { name: "Solidity", icon: solidityLogo },
    ],
  },
  [TECHNOLOGIE.SEVEN]: {
    id: 7,
    name: TECHNOLOGIE.SEVEN,
    cards: [
      { name: "Azure", icon: azureLogo },
      { name: "AWS", icon: awsLogo },
      { name: "GCP", icon: gcpLogo },
    ],
  },
};
