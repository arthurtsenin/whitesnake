import classNames from "classnames";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./OfficeBenefitCard.module.css";

type officeBenefitsCardProps = {
  icon: StaticImageData;
  id: number;
  active?: boolean;
  direction: number;
  keyK: number;
};

const transitionVar = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.5 },
};

export const OfficeBenefitCard: FC<officeBenefitsCardProps> = ({
  keyK,
  direction,
  id,
  icon,
  active,
}) => {
  return (
    <motion.div
      className={classNames(styles.slide, { [styles.active]: active })}
      initial={{
        opacity: 0,
        translateX: direction > 0 ? 200 : -200,
      }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{
        opacity: 0,
        translateX: direction > 0 ? -200 : 200,
      }}
      transition={transitionVar}
      key={keyK}
      custom={id}
    >
      <Image alt="photo" src={icon} />
    </motion.div>
  );
};
