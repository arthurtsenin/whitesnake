import classNames from "classnames";
import Image from "next/image";

import styles from "./InternshipWorkBenefits.module.css";

import { WorkBenefitsCardProps } from "./types";

import gear from "&/images/internship/work_benefit_image1.png";
import cash from "&/images/internship/work_benefit_image2.png";
import heart from "&/images/internship/work_benefit_image3.png";
import one from "&/images/internship/work_benefit_image4.png";
import sharp from "&/images/internship/work_benefit_image5.png";
import circleSpiral from "&/images/internship/work_benefit_image6.png";
import bubs from "&/images/internship/work_benefit_image7.png";

export const WORK_BENEFITS_DATA: WorkBenefitsCardProps[] = [
  {
    id: 1,
    title: "Возможности роста",
    text: "Открой двери к бесконечным возможностям: персональные менторы и индивидуальное руководство для вашего профессионального роста",
    image: (
      <div className={classNames(styles.first, styles.imageWrapper)}>
        <Image src={sharp} alt="Возможности роста" />
        <Image src={one} alt="Возможности роста" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Work&life баланс",
    text: "Живите полной жизнью: возможности работы в режиме гибкого графика, отпуска и корпоративы, события, способствующие сохранению баланса между работой и личной жизнью",
    image: (
      <div className={classNames(styles.second, styles.imageWrapper)}>
        <Image src={circleSpiral} alt="Work&life баланс" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Сплоченность",
    text: "Живите полной жизнью: возможности работы в режиме гибкого графика, отпуска и корпоративы, события, способствующие сохранению баланса между работой и личной жизнью",
    image: (
      <div className={classNames(styles.third, styles.imageWrapper)}>
        <Image src={bubs} alt="Сплоченность" />
      </div>
    ),
  },
  {
    id: 4,
    title: "Прозрачная система мотивации",
    text: "Открой двери к бесконечным возможностям: персональные менторы и индивидуальное руководство для вашего профессионального роста",
    image: (
      <div className={classNames(styles.forth, styles.imageWrapper)}>
        <Image src={cash} alt="Прозрачная система мотивации" />
      </div>
    ),
  },
  {
    id: 5,
    title: "Равные возможности",
    text: "Открой двери к бесконечным возможностям: персональные менторы и индивидуальное руководство для вашего профессионального роста",
    image: (
      <div className={classNames(styles.fifth, styles.imageWrapper)}>
        <Image src={heart} alt="Равные возможности" />
      </div>
    ),
  },
  {
    id: 6,
    title: "Корпоративная ответственность",
    text: "Открой двери к бесконечным возможностям: персональные менторы и индивидуальное руководство для вашего профессионального роста",
    image: (
      <div className={classNames(styles.six, styles.imageWrapper)}>
        <Image src={gear} alt="Корпоративная ответственность" />
      </div>
    ),
  },
];
