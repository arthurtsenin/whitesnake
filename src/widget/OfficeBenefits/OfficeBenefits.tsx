"use client";

import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC, useCallback, useEffect, useState } from "react";

import styles from "./OfficeBenefits.module.css";

import { OfficeBenefitCard } from "./ui/OfficeBenefitCard";

import sliderArrLeft from "&/images/internship/slider_arrow_left.svg";
import sliderArrRight from "&/images/internship/slider_arrow_right.svg";

type OfficeBenefitsProps = {
  data: { id: number; icon: StaticImageData }[];
};

export const OfficeBenefits: FC<OfficeBenefitsProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setdirection] = useState<number>(1);
  const [slidesNum, setSlidesNum] = useState<number | null>(null);

  const SCREEN_WIDTH = window.innerWidth;

  const handleClickNext = useCallback(() => {
    setCurrentIndex((i) => (i >= data.length - 1 ? 0 : i + 1));
    setdirection(1);
  }, [data.length]);

  const handleClickPrev = () => {
    setCurrentIndex((i) => (i <= 0 ? data.length - 1 : i - 1));
    setdirection(-1);
  };

  useEffect(() => {
    if (SCREEN_WIDTH >= 1200) {
      setSlidesNum(3);
    } else if (SCREEN_WIDTH >= 744 && SCREEN_WIDTH <= 1200) {
      setSlidesNum(2);
    } else if (SCREEN_WIDTH >= 320 && SCREEN_WIDTH <= 744) {
      setSlidesNum(1);
    }
  }, [SCREEN_WIDTH]);

  useEffect(() => {
    const autoSwip = setTimeout(() => {
      handleClickNext();
    }, 2500);

    return () => {
      clearTimeout(autoSwip);
    };
  }, [handleClickNext, currentIndex]);

  return (
    <div className={styles.officeBenefits}>
      <button className={styles.sliderArrow} onClick={handleClickPrev}>
        <Image src={sliderArrLeft} alt="slider arrow" />
      </button>
      <AnimatePresence custom={data[currentIndex].id}>
        <div className={styles.slidesContainer}>
          {slidesNum && slidesNum > 2 && (
            <OfficeBenefitCard
              keyK={currentIndex + 6}
              direction={direction}
              icon={
                data[currentIndex === 0 ? data.length - 1 : currentIndex - 1]
                  .icon
              }
              id={
                data[currentIndex === 0 ? data.length - 1 : currentIndex - 1].id
              }
            />
          )}

          <OfficeBenefitCard
            keyK={currentIndex + 228}
            direction={direction}
            icon={data[currentIndex].icon}
            id={data[currentIndex].id}
            active
          />
          {slidesNum !== 1 && (
            <OfficeBenefitCard
              keyK={
                data[currentIndex === data.length - 1 ? 0 : currentIndex + 1].id
              }
              direction={direction}
              icon={
                data[currentIndex === data.length - 1 ? 0 : currentIndex + 1]
                  .icon
              }
              id={
                data[currentIndex === data.length - 1 ? 0 : currentIndex + 1].id
              }
            />
          )}
        </div>
      </AnimatePresence>
      <button className={styles.sliderArrow} onClick={handleClickNext}>
        <Image src={sliderArrRight} alt="slider arrow" />
      </button>
      {slidesNum === 1 && (
        <div className={styles.dotsContainer}>
          {data.map((_, index) => (
            <button
              key={index}
              className={classNames(styles.sliderDot, {
                [styles.activeDot]: currentIndex === index,
              })}
              onClick={() => {
                if (index < currentIndex) {
                  setdirection(-1);
                } else {
                  setdirection(1);
                }
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
