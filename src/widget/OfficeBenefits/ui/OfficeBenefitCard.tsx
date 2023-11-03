import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./OfficeBenefitCard.module.css";

import { MotionComponent } from "@/shared/motion/MotionComponent";

type officeBenefitsCardProps = {
  icon: StaticImageData;
  id: number;
  active?: boolean;
  direction: number;
  keyK: number;
};

const transitionVar = {
  translateX: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
};

export const OfficeBenefitCard: FC<officeBenefitsCardProps> = ({
  keyK,
  direction,
  id,
  icon,
  active,
}) => {
  return (
    <MotionComponent
      as="div"
      className={classNames(styles.slide, { [styles.active]: active })}
      initial={{
        opacity: 0,
        translateX: direction > 0 ? 350 : -350,
      }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{
        opacity: 0,
        translateX: direction > 0 ? -350 : 350,
      }}
      transition={transitionVar}
      key={keyK}
      custom={id}
    >
      <Image alt="photo" src={icon} />
    </MotionComponent>
  );
};
