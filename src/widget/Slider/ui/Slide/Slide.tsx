import Image from "next/image";
import { FC } from "react";

import styles from "./Slide.module.scss";

import { SlideType } from "@/widget/Slider/data";

export type SliderItemProps = {
  slide: SlideType;
};

export const Slide: FC<SliderItemProps> = ({ slide }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        alt="Slide image"
        src={slide?.image || ""}
        quality={100}
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <h2 className={styles.text}>{slide?.text}</h2>
    </div>
  );
};