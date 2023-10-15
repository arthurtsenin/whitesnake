import { CaseDataType } from "../types";

import laptop1 from "&/images/cases/fp&aSolutions/laptop1.webp";
import laptop2 from "&/images/cases/fp&aSolutions/laptop2.webp";
import laptop3 from "&/images/cases/fp&aSolutions/laptop3.webp";

export const FPA_DATA: CaseDataType = {
  hero: {
    title: "Автоматизированное решение FP&A на базе Excel",
    subtitle:
      "Платформа представляет собой инновационное решение для финансового планирования и анализа (FP&A), предназначенное для пользователей Excel, стремящихся автоматизировать свои финансовые процессы. Он оптимизирует сбор, анализ и отчетность данных, позволяя финансистам работать в привычной среде Excel.",
    keywords: [
      "Финансовое планирование",
      "Анализы",
      "Автоматизация",
      "Excel",
      "Сбор данных",
      "Python",
      "Backend разработка",
    ],
  },
  customer_title: "Клиент",
  customer_stats: {
    направление: "Финансы",
    страна: "Израиль",
    "дата старта": "2021",
  },
  customer_info: [
    "Наш клиент — международная компания по разработке программного обеспечения, которая предлагает платформы финансового планирования и анализа для пользователей Microsoft Excel.",
    "Подробная информация о клиенте не может быть предоставлена вследствие подписания NDA.",
  ],

  challenge_title: "Задача",
  challenge_info: [
    "Основная задача состояла в разработке и внедрении комплексной backend-части для панели финансового планирования и анализа. Требования клиента включали: обновление в режиме реального времени, широкий спектр графических отображений, а также расширенные функции сортировки, фильтрации и агрегирования данных. Все это необходимо было интегрировать для обработки сложных финансовых данных и автоматического создания подробных отчетов.",
  ],

  solution_title: "Решение",
  solution_info: {
    subtitle: [
      "В ответ на требования клиента к сложному и детализированному решению для финансового планирования и анализа наша команда взяла на себя полный комплекс обязанностей по разработке сложной backend-инфраструктуры. В обязанности также входило создание сложной финансовой панели мониторинга и многое другое.",
    ],
    items: [
      {
        id: 1,
        text: [
          "Важной задачей стала разработка системы для обработки и обновления данных в режиме реального времени. Учитывая постоянно меняющийся характер финансовых данных, было критически важно поддерживать актуальность и точность информации на панели мониторинга, которая включала график, график с накоплением, каскадную диаграмму, гистограмму, гистограмму с накоплением, таблицы, комбинированные и круговые диаграммы.",

          "Еще одной важной обязанностью, которую мы взяли на себя, был дизайн и разработка полнофункционального онлайн-редактора Excel. Этот уникальный инструмент позволял пользователям загружать, редактировать и хранить файлы Excel онлайн. Как результат, больше не было необходимости прикреплять объемные вложения в электронные письма при передаче файлов.",
        ],
        image: laptop1,
      },
      {
        id: 2,
        text: [
          "Важной частью проекта стало создание автоматизированной системы формирования и доставки отчетов на определенные адреса электронной почты. Это решение обеспечило постоянное обновление системы, а также помогло сэкономить на физических усилиях, необходимых для создания отчетов.",

          "Мы также разработали усовершенствованную систему управления данными с возможностью сортировки, фильтрации и агрегирования. Более того, мы внедрили специальные временные фильтры, такие как YTD, MTD и MTG. Они дают возможность пользователям осуществлять всесторонний анализ данных в определенных временных рамках.",
        ],
        image: laptop2,
      },
      {
        id: 3,
        text: [
          "Одной из важнейших задач было внедрение системы контроля доступа к приборной панели. Она регулирует возможности пользователей на основе прав доступа, тем самым повышая безопасность данных.",

          "Кроме того, в зоне нашей ответственности было обеспечение плавной интеграции с существующими рабочими процессами и системами клиента. Мы занимались созданием ряда API-интерфейсов, внедрением пользовательской бизнес-логики и поддержанием стабильности и производительности системы в условиях высокой нагрузки.",

          "В заключение, наша команда не только разработала динамичную и безопасную backend-инфраструктуру, поддерживающую интерактивную финансовую панель мониторинга, но и успешно внедрила полномасштабное решение FP&A. Это способствовало повышению эффективности принятия решений и операционной деятельности клиентов, тем самым удовлетворяя их конкретные бизнес-потребности.",
        ],
        image: laptop3,
      },
    ],
  },

  results_title: "Результаты",
  results_info: {
    summary:
      "Сосредоточившись на backend-разработке панели, наша команда внесла большой вклад в создание высокофункционального инструмента для финансового планирования и анализа. Это решение предоставило возможность анализа данных в режиме реального времени, использования разнообразных графических дисплеев и расширенных функций управления данными. Все это улучшило процесс принятия решений, поскольку теперь пользователи могут получать доступ к актуальной финансовой информации, выполнять сложный анализ и быстро составлять подробные отчеты. Таким образом, наше решение значительно повысило эффективность по финансовому планированию и анализу.",
  },
  results_cubes: [
    {
      title: "45M",
      subtitle: "долларов было заработано",
    },
    {
      title: "120",
      subtitle: "новых клиентов в год",
    },
  ],

  team_title: "Команда",
  team_info: [
    { id: 1, teamName: "Backend-разработчиков", teamCount: 8 },
    { id: 2, teamName: "Fullstack-разработчика", teamCount: 2 },
    { id: 3, teamName: "Dev-ops", teamCount: 1 },
  ],

  stack_title: "Технологии",

  stack_info: {
    backend: ["Pyton", "Django", "Django REST Framework", "Celery", "RabbitMQ"],
    ["Dev-ops"]: [
      "Docker",
      "Docker-compose",
      "Kubernetes",
      "Terraform",
      "CircleCI",
    ],
    платформы: ["Microsoft Azure"],
  },
};
