"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";

import styles from "./Slider.module.scss";

import { ProgressBar } from "@/widget/Slider/ui/ProgressBar/ProgressBar";

import { ProgressBarsType, SliderType } from "./data";
import { Slide } from "./ui/Slide/Slide";

export type SliderProps = {
  slides: SliderType;
  bars: ProgressBarsType;
};

export const Slider: FC<SliderProps> = ({ bars, slides }) => {
  const [index, setIndex] = useState<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const changeIndex = useCallback(
    () =>
      setIndex((prev) =>
        prev === Object.values(slides).length - 1 ? 0 : prev + 1,
      ),
    [slides],
  );

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(changeIndex, 2500);

    return () => resetTimeout();
  }, [index, changeIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        {Object.values(bars).map((bar) => (
          <ProgressBar
            key={bar.id}
            title={bar.title}
            clickHandler={() => setIndex(bar.id)}
            active={bar.id === index ? "active" : ""}
          />
        ))}
      </div>
      <div className={styles.slidesContainer}>
        <div
          className={styles.slides}
          style={{ transform: `translateY(${-index * 400}px)` }}
        >
          {Object.values(slides).map((item) => (
            <Slide key={item.id} slide={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
