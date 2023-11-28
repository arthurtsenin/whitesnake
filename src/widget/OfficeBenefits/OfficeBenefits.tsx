"use client";

import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import { FC, useCallback, useEffect, useLayoutEffect, useState } from "react";

import styles from "./OfficeBenefits.module.css";

import { MotionAnimatePresence } from "@/shared/motion/MotionAnimatePresence";

import { OfficeBenefitCard } from "./ui/OfficeBenefitCard";

import sliderArrLeft from "&/images/internship/slider_arrow_left.svg";
import sliderArrRight from "&/images/internship/slider_arrow_right.svg";

type OfficeBenefitsProps = {
  data: { id: number; icon: StaticImageData }[];
};

const OfficeBenefits: FC<OfficeBenefitsProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setdirection] = useState<number>(1);
  const [slidesNum, setSlidesNum] = useState<number | null>(null);
  const [deviseWidth, setDeviceWidth] = useState<number>(1200);

  const handleClickNext = useCallback(() => {
    setCurrentIndex((i) => (i >= data.length - 1 ? 0 : i + 1));
    setdirection(1);
  }, [data.length]);

  const handleClickPrev = () => {
    setCurrentIndex((i) => (i <= 0 ? data.length - 1 : i - 1));
    setdirection(-1);
  };

  useEffect(() => {
    if (deviseWidth >= 1200) {
      setSlidesNum(3);
    } else if (deviseWidth >= 744 && deviseWidth <= 1200) {
      setSlidesNum(2);
    } else if (deviseWidth >= 320 && deviseWidth <= 744) {
      setSlidesNum(1);
    }
  }, [deviseWidth]);

  useEffect(() => {
    const autoSwip = setTimeout(() => {
      handleClickNext();
    }, 3000);

    return () => {
      clearTimeout(autoSwip);
    };
  }, [handleClickNext, currentIndex]);

  useLayoutEffect(() => {
    if (typeof window != "undefined") {
      setDeviceWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDeviceWidth(window.innerWidth);
    });

    return window.removeEventListener("resize", () => {
      setDeviceWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className={styles.officeBenefits}>
      <button className={styles.sliderArrow} onClick={handleClickPrev}>
        <Image src={sliderArrLeft} alt="Slider left arrow." />
      </button>
      <MotionAnimatePresence custom={data[currentIndex].id}>
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
      </MotionAnimatePresence>
      <button className={styles.sliderArrow} onClick={handleClickNext}>
        <Image src={sliderArrRight} alt="Slider right arrow." />
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

export default OfficeBenefits;
