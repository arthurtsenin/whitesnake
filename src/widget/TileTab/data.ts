import { StaticImageData } from "next/image";

import arrow from "&/images/internship/arrow.png";
import message from "&/images/internship/arrow.png";
import calendar from "&/images/internship/calendar.png";
import elka from "&/images/internship/elka.png";
import envelope from "&/images/internship/envelope.png";
import medal from "&/images/internship/medal.png";

export type TabType = {
  id: number;
  name: string;
};

export type InformationType = {
  id: number;
  description: string;
  image: StaticImageData | string;
};

export const BENEFITS = {
  ONE: "Курсы английского",
  TWO: "Гибкий график",
  THREE: "Эффективный рост",
  FOUR: "Развлечения",
  FIVE: "Личный ментор",
  SIX: "Оформление практики для студентов",
};

export const INDUSTRY_DATA: Record<string, InformationType> = {
  [BENEFITS.ONE]: {
    id: 1,
    description:
      "Наши персонализированные курсы английского языка включают индивидуальные личные занятия с опытным преподавателем. Ты сможешь расширить свой словарный запас, улучшить грамматику и развить разговорные навыки. Мы поможем тебе достичь владения английским на новом уровне и уверенно общаться как в рабочей среде, так и в повседневной жизни.",
    image: message,
  },
  [BENEFITS.TWO]: {
    id: 2,
    description:
      "Наши персонализированные курсы английского языка включают индивидуальные личные занятия с опытным преподавателем. Ты сможешь расширить свой словарный запас, улучшить грамматику и развить разговорные навыки. Мы поможем тебе достичь владения английским на новом уровне и уверенно общаться как в рабочей среде, так и в повседневной жизни.",
    image: calendar,
  },
  [BENEFITS.THREE]: {
    id: 3,
    description:
      "Наши персонализированные курсы английского языка включают индивидуальные личные занятия с опытным преподавателем. Ты сможешь расширить свой словарный запас, улучшить грамматику и развить разговорные навыки. Мы поможем тебе достичь владения английским на новом уровне и уверенно общаться как в рабочей среде, так и в повседневной жизни.",
    image: arrow,
  },
  [BENEFITS.FOUR]: {
    id: 4,
    description:
      "Наши персонализированные курсы английского языка включают индивидуальные личные занятия с опытным преподавателем. Ты сможешь расширить свой словарный запас, улучшить грамматику и развить разговорные навыки. Мы поможем тебе достичь владения английским на новом уровне и уверенно общаться как в рабочей среде, так и в повседневной жизни.",
    image: elka,
  },
  [BENEFITS.FIVE]: {
    id: 5,

    description:
      "Наши персонализированные курсы английского языка включают индивидуальные личные занятия с опытным преподавателем. Ты сможешь расширить свой словарный запас, улучшить грамматику и развить разговорные навыки. Мы поможем тебе достичь владения английским на новом уровне и уверенно общаться как в рабочей среде, так и в повседневной жизни.",
    image: medal,
  },
  [BENEFITS.SIX]: {
    id: 6,
    description:
      "Наши персонализированные курсы английского языка включают индивидуальные личные занятия с опытным преподавателем. Ты сможешь расширить свой словарный запас, улучшить грамматику и развить разговорные навыки. Мы поможем тебе достичь владения английским на новом уровне и уверенно общаться как в рабочей среде, так и в повседневной жизни.",
    image: envelope,
  },
};