import classNames from "classnames";
import { animate, stagger } from "framer-motion";
import Image from "next/image";
import { FC, useEffect } from "react";

import styles from "./DynamicPannel.module.css";

import { MotionAnimatePresence } from "@/shared/motion/MotionAnimatePresence";
import { MotionComponent } from "@/shared/motion/MotionComponent";

import { TechnologieType } from "../../data";

export type DynamicPannelProps = {
  cards: TechnologieType;
};

// const cardVars = {
//   initial: {
//     opacity: 0,
//     translateX: -100,
//     transition: {
//       duration: 0.5,
//       ease: [0.37, 0, 0.63, 1],
//     },
//   },
//   hidden: {
//     opacity: [0, 1],
//     translateX: 0,
//     transition: {
//       ease: [0, 0.55, 0.45, 1],
//       duration: 0.7,
//     },
//   },
// };
// const containerVars = {
//   initial: {
//     transition: {
//       staggerChildren: 0.09,
//       staggerDirection: -1,
//     },
//   },
//   open: {
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.09,
//       staggerDirection: 1,
//     },
//   },
// };

export const DynamicPannel: FC<DynamicPannelProps> = ({ cards }) => {
  useEffect(() => {
    animate(
      ".animateItem",
      { transform: ["translateX(-100px)", "translateX(0)"], opacity: [0, 1] },
      { delay: stagger(0.06) },
    );
  }, [cards]);

  return (
    <MotionAnimatePresence>
      <div className={styles.container}>
        <div className={styles.pannels}>
          {cards.cards.map((card) => (
            <MotionComponent
              as="div"
              key={card.name}
              className={classNames(
                styles.item,
                styles[card.name],
                "animateItem",
              )}
            >
              <Image src={card.icon} alt={card.name} />
              <p className={styles.name}>{card.name}</p>
            </MotionComponent>
          ))}
        </div>
      </div>
    </MotionAnimatePresence>
  );
};
