import { StaticImageData } from "next/image";

import blot from "&/images/services/blot.png";
import architecture from "&/images/services/consulting/architecture.svg";
import backrev from "&/images/services/consulting/backend-review.svg";
import optimal from "&/images/services/consulting/optimal.svg";
import performance from "&/images/services/consulting/performance.svg";
import refactoring from "&/images/services/consulting/refactoring.svg";
import storage from "&/images/services/consulting/storage.svg";
import vulnerability from "&/images/services/consulting/vulnerability.svg";
import backdev from "&/images/services/end-to-end/backend-development.svg";
import dataeng from "&/images/services/end-to-end/data-eng.svg";
import dataadmin from "&/images/services/end-to-end/database-administration.svg";
import devops from "&/images/services/end-to-end/devops.svg";
import mvp from "&/images/services/end-to-end/launch-product.svg";
import testqa from "&/images/services/end-to-end/testingQa.svg";
import maintains from "&/images/services/end-to-end/testingQa.svg";
import web3dev from "&/images/services/end-to-end/web3-development.svg";
import sponge from "&/images/services/sponge.png";
import aiohttp from "&/images/services/team-extension/aiohttp.svg";
import aws from "&/images/services/team-extension/aws.svg";
import azure from "&/images/services/team-extension/azure.svg";
import django from "&/images/services/team-extension/django.svg";
import docker from "&/images/services/team-extension/docker.svg";
import fastapi from "&/images/services/team-extension/fastapi.svg";
import flask from "&/images/services/team-extension/flask.svg";
import gcp from "&/images/services/team-extension/gcp.svg";
import kubernetes from "&/images/services/team-extension/kubernetes.svg";
import pyramid from "&/images/services/team-extension/pyramid.svg";
import python from "&/images/services/team-extension/python.svg";
import tornado from "&/images/services/team-extension/tornado.svg";
import unittest from "&/images/services/team-extension/unittest.svg";
import web3py from "&/images/services/team-extension/web3py.svg";

export type ServiceCardType = {
  id: number;
  icon: StaticImageData;
  text: string;
};

export type ServiceDataType = {
  title: string;
  question: string;
  answer: Array<string>;
  cardContainerType?: string;
  cardItems: Array<ServiceCardType>;
  image?: StaticImageData;
  glowColor?: string;
};

export const TEAM_EXTENSION_DATA: ServiceDataType = {
  title: "Расширение команды",
  question: "Вашей команде нужны новые технические спецы? Или особые навыки?",
  answer: [
    "Вы можете легко интегрировать наших штатных специалистов в свою команду, как правило, в течение нескольких дней. Это не просто дополнительные рабочие руки - это квалифицированные специалисты, способные восполнить пробелы в квалификации вашей команды и ускорить темпы реализации проекта.",
    "Вы сохраняете полный контроль над ситуацией, а мы дополняем вашу команду необходимыми знаниями и опытом в области бэкенда. С нашей помощью вы сможете создать более эффективную команду, быстро адаптироваться к изменениям и обеспечить выполнение проекта в срок и в рамках бюджета.",
  ],
  cardContainerType: "grid",
  cardItems: [
    { id: 1, icon: python, text: "Python" },
    { id: 2, icon: django, text: "Django" },
    { id: 3, icon: fastapi, text: "FastAPI" },
    { id: 4, icon: flask, text: "Flask" },
    { id: 5, icon: pyramid, text: "Pyramid" },
    { id: 6, icon: tornado, text: "Tornado" },
    { id: 7, icon: aiohttp, text: "Aiohttp" },
    { id: 8, icon: web3py, text: "Web3py" },
    { id: 9, icon: unittest, text: "Unittest" },
    { id: 10, icon: docker, text: "Docker" },
    { id: 11, icon: kubernetes, text: "Kubernetes" },
    { id: 12, icon: azure, text: "Azure" },
    { id: 13, icon: gcp, text: "GCP" },
    { id: 14, icon: aws, text: "Amazon Web Services" },
  ],
  image: blot,
  glowColor: "red",
};

export const END_TO_END_DATA: ServiceDataType = {
  title: "Комплексная разработка на языке Python",
  question: "Нужна помощь в разработке бэкенда на python?",
  answer: [
    "Whitesnake - это тот партнер, которого вы давно искали. Наша штатная команда разработчиков и системных архитекторов выполнит весь цикл разработки бэкенда - от проектирования архитектуры системы и интеграции API до обеспечения безопасности данных и структурирования базы данных.",
    "Вы сохраняете контроль над ситуацией, а мы при необходимости предоставляем стратегические рекомендации. Поскольку мы занимаемся техническими вопросами, вы можете сосредоточиться на своей основной деятельности. Мы позаботимся об административных деталях, обеспечив плавный и прозрачный процесс разработки. Мы готовы превратить вашу идею в высокопроизводительный, масштабируемый продукт в срок и в рамках бюджета.",
  ],
  cardItems: [
    { id: 1, icon: backdev, text: "Backend development" },
    { id: 2, icon: web3dev, text: "Web3 development" },
    { id: 3, icon: dataeng, text: "Data engenieering" },
    { id: 4, icon: devops, text: "DevOps" },
    { id: 5, icon: maintains, text: "Maintenance" },
    { id: 6, icon: dataadmin, text: "Database administration" },
    { id: 7, icon: testqa, text: "Testing+QA" },
    { id: 8, icon: mvp, text: "Minimal Viable Product" },
  ],
  image: sponge,
  glowColor: "green",
};

export const CONSULTING_DATA: ServiceDataType = {
  title: "Экспертный Python-консалтинг",
  question:
    "У вас есть проблемы с вашим продуктом или вы считаете, что его можно улучшить?",
  answer: [
    "Наши эксперты готовы помочь. Мы соберем небольшую группу профессионалов из нашей команды, лучших в своих областях, для анализа вашего продукта. Они проведут детальный анализ, предложат стратегические рекомендации и будут тесно сотрудничать с Вами для внесения необходимых улучшений. Наша цель - помочь вам получить максимальную отдачу от вашего продукта, повысить его эффективность и успех вашего бизнеса.",
  ],
  cardItems: [
    { id: 1, icon: backrev, text: "Backend review" },
    { id: 2, icon: vulnerability, text: "Vulnerability & Bug detection" },
    { id: 3, icon: refactoring, text: "Refactoring" },
    { id: 4, icon: architecture, text: "Architecture improvement" },
    { id: 5, icon: optimal, text: "Optimal technologies selection" },
    { id: 6, icon: storage, text: "Storage optimization" },
    { id: 7, icon: performance, text: "Performance optimization" },
  ],
};
