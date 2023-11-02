import classNames from "classnames";
import { animate, AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect } from "react";

import styles from "./StaticPannel.module.css";

import { IndustryType } from "@/widget/Tabs/data";

import { useMobileScreen } from "../../../../shared/hooks/use-mobile-screen";

type StaticPannelProps = {
  panel: IndustryType;
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
export const StaticPannel: FC<StaticPannelProps> = ({ panel }) => {
  const isMobile = useMobileScreen();
  useEffect(() => {
    if (!isMobile) {
      animate(
        ".pipka",
        {
          transform: ["translateX(-50px)", "translateX(0px)"],
          opacity: [0, 1],
        },
        { duration: 0.4 },
      );
      animate(
        ".panelTitle",
        {
          transform: ["translateX(-40px)", "translateX(0px)"],
          opacity: [0, 0, 0.5, 1],
        },
        { duration: 0.5, delay: 0.4 },
      );
      animate(
        ".panelDescription",
        {
          transform: ["translateX(-40px)", "translateX(0px)"],
          opacity: [0, 0, 0.5, 1],
        },
        { duration: 0.5, delay: 0.2 },
      );
    }
  }, [panel, isMobile]);
  return (
    <AnimatePresence>
      <motion.div className={classNames(styles.container, "pipka")}>
        <div className={styles.wrapper}>
          <Image alt={panel.name} src={panel.image} placeholder="blur" fill />
          <div className={styles.text}>
            <motion.h3 className={classNames(styles.title, "panelTitle")}>
              {panel.name}
            </motion.h3>
            <motion.p
              className={classNames(styles.description, "panelDescription")}
            >
              {panel.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
