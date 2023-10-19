import { StaticImageData } from "next/image";

import { DYNAMIC_ROUTES } from "../Navigation/routes";

import ai from "&/cases-preview/ai-case-image.webp";
import fp_a from "&/cases-preview/datarails-case-image.webp";
import digital_asset from "&/cases-preview/digital-case-image.webp";
import food_delivery from "&/cases-preview/food-case-image.webp";
import healt_monitoring from "&/cases-preview/health-monitoring-case-image.webp";
import healt_insurance from "&/cases-preview/healthcare-case-image.webp";
import sdk from "&/cases-preview/sdk-case-image.webp";

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
    caption: "Платформа для медицинского страхования",
    description:
      "Данная платформа для медицинского страхования — это инновационная система, предоставляющая медицинские услуги. Платформа работает в соответствии с индивидуальными предпочтениями пользователя, при этом способна быстро адаптироваться к меняющимся потребностям клиентов. Система предлагает гибкий, технологичный и современный подход к здравоохранению.",
    path: DYNAMIC_ROUTES.INSURANCE,
    image: healt_insurance,
  },
  {
    id: 1,
    caption: "Автоматизированное решение FP&A на основе Excel",
    description:
      "Платформа представляет собой инновационное решение для FP&A (финансовое планирование и анализ), разработанное для пользователей Excel, стремящихся внедрить автоматизацию в свои финансовые процессы. Это упрощает сбор, анализ и предоставление данных, позволяя финансовым специалистам работать в привычной среде Excel.",
    path: DYNAMIC_ROUTES.FPA_SOLUTION,
    image: fp_a,
  },
  {
    id: 2,
    caption: "Сервис для стейкинга цифровых активов",
    description:
      "Сервис предлагает безопасный и удобный интерфейс, позволяющий пользователям держать свои криптовалюты, вкладываться в блокчейн-сети и получать прибыль. Большое внимание уделяется безопасности, прозрачности и удобству работы, а также этот сервис позволяет пользователю получить полезный опыт стейкинга.",
    path: DYNAMIC_ROUTES.DIGITAL_ASSET,
    image: digital_asset,
  },
  {
    id: 3,
    caption: "Сервис доставки еды",
    description:
      "Данная уникальная и инновационная платформа занимается поставкой свежих фермерских продуктов, которые остались в избыточном количестве. Служба помогает уменьшить количество пищевых отходов и пропагандирует привычки здорового питания.",
    path: DYNAMIC_ROUTES.FOOD_DELIVERY,
    image: food_delivery,
  },
  {
    id: 4,
    caption: "Сервис для мониторинга состояния здоровья",
    description:
      "Инновационный сервис мониторинга здоровья отслеживает самочувствие пациентов в режиме реального времени с носимых устройств, анализирует данные и предупреждает пользователей о потенциальных проблемах со здоровьем. Платформа учитывает ранее выявленные патологии и помогает пользователям получать своевременную медицинскую помощь.",
    path: DYNAMIC_ROUTES.HEALTH_MONITORING,
    image: healt_monitoring,
  },
  {
    id: 5,
    caption:
      "Платформа с чат-ботами на базе искусственного интеллекта для поддержки клиентов",
    description:
      "Продвинутая система с визуальным конструктором чат-ботов на базе искусственного интеллекта, которая автоматизирует поддержку клиентов. Платформа использует надежные технологии и инструменты для обработки больших потоков данных в режиме реального времени и для анализа производительности ботов.",
    path: DYNAMIC_ROUTES.AI_CHATBOTS,
    image: ai,
  },
  {
    id: 6,
    caption: "Многофункциональный SDK для интеграции расчета заработной платы",
    description:
      "Платформа предлагает безопасный и многофункциональный SDK (комплект для разработки программного обеспечения) для владельцев банковских счетов, обеспечивая надежный обмен конфиденциальной информацией между банком и клиентом. Платформа шифрует данные и значительно снижает риск утечки информации во время транзакций.",
    path: DYNAMIC_ROUTES.INTEGRATION_SDK,
    image: sdk,
  },
];
