import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

import styles from "./ScrollCard.module.css";
type ScrollCardProps = {
  image: StaticImageData;
  order: string;
  title: string;
  description: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const ScrollCard = ({
  image,
  order,
  title,
  description,
}: ScrollCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const opacityParentContainer = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // const orderTextPosition = useTransform(scrollYProgress, [0.5, 1], ['60%', '0%']);

  const iconRotateProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["-15deg", "0deg"],
  );

  const markOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const markPosition = useTransform(scrollYProgress, [0.6, 1], ["-40%", "0%"]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      ref={ref}
      variants={container}
      style={{ opacity: opacityParentContainer }}
      className={styles.container}
    >
      <motion.div
        style={{ rotate: iconRotateProgress }}
        className={styles.imageWrapper}
      >
        <Image src={image} alt="marker" />
      </motion.div>
      <div className={styles.text}>
        <motion.mark style={{ translateY: markPosition, opacity: markOpacity }}>
          {order}
        </motion.mark>
        <motion.p style={{ translateY: markPosition, opacity: markOpacity }}>
          {title}
        </motion.p>
        <motion.p style={{ translateY: markPosition, opacity: markOpacity }}>
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};