import classNames from "classnames";
import { animate } from "framer-motion";
import Image from "next/image";
import { FC, useEffect } from "react";

import styles from "./StaticPannel.module.css";

import { useMobileScreen } from "@/shared/hooks/use-mobile-screen";
import { MotionAnimatePresence } from "@/shared/motion/MotionAnimatePresence";
import { MotionComponent } from "@/shared/motion/MotionComponent";
import { IndustryType } from "@/widget/Tabs/data";

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

const base64EncodedPixel =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN01ND4DwAC1QGS7X+1fgAAAABJRU5ErkJggg==";
const placeholderDataURL = `data:image/gif;base64,${base64EncodedPixel}`;

export const StaticPannel: FC<StaticPannelProps> = ({ panel }) => {
  const isMobile = useMobileScreen();

  useEffect(() => {
    // if (!isMobile) {
    animate(
      ".animateContainer",
      {
        transform: ["translateX(-50px)", "translateX(0px)"],
        opacity: [0, 1],
      },
      { duration: 0.8 },
    );
    animate(
      ".animateTitle",
      {
        transform: ["translateX(-40px)", "translateX(0px)"],
        opacity: [0, 0, 0.5, 1],
      },
      { duration: 0.5, delay: 0.4 },
    );
    animate(
      ".animateDescription",
      {
        transform: ["translateX(-40px)", "translateX(0px)"],
        opacity: [0, 0, 0.5, 1],
      },
      { duration: 0.5, delay: 0.2 },
    );
    // }
  }, [panel, isMobile]);

  return (
    <MotionAnimatePresence>
      <MotionComponent
        as="div"
        className={classNames(styles.container, "animateContainer")}
      >
        <div className={styles.wrapper}>
          <Image
            alt={panel.name}
            src={panel.image}
            placeholder={placeholderDataURL}
            fill
          />
          <div className={styles.text}>
            <MotionComponent
              as="h3"
              className={classNames(styles.title, "animateTitle")}
            >
              {panel.name}
            </MotionComponent>
            <MotionComponent
              as="p"
              className={classNames(styles.description, "animateDescription")}
            >
              {panel.description}
            </MotionComponent>
          </div>
        </div>
      </MotionComponent>
    </MotionAnimatePresence>
  );
};
