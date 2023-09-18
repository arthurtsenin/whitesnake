"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";

import styles from "./Loop.module.scss";

export type LoopProps = {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
};

export type DirectionType = {
  [key: string]: string;
};

const LOOP_DIRECTION: DirectionType = {
  left: "normal",
  right: "reverse",
};

export const Loop: FC<LoopProps> = ({
  speed = 10,
  direction = LOOP_DIRECTION.left,
  children,
}) => {
  const [duplicateInstances, setDuplicateInstances] = useState<number>(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const resetAnimation = useCallback(() => {
    resetTimeout();

    if (childRef?.current) {
      childRef.current.setAttribute("data-animate", "false");

      timeoutRef.current = setTimeout(() => {
        if (childRef?.current) {
          childRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }, []);

  const setupInstances = useCallback(() => {
    if (!childRef?.current || !parentRef?.current) return;

    const { width: parentWidth } = parentRef.current.getBoundingClientRect();
    const { width: childWidth } = childRef.current.getBoundingClientRect();
    const widthDeficit = parentWidth - childWidth;
    const instanceWidth = childWidth / childRef.current.children.length;

    if (widthDeficit) {
      setDuplicateInstances(
        duplicateInstances + Math.ceil(widthDeficit / instanceWidth) + 1,
      );
    }

    resetAnimation();
  }, [duplicateInstances, resetAnimation]);

  useEffect(() => {
    setupInstances();

    return () => resetTimeout();
  }, [setupInstances]);

  // useEffect(() => {
  //   window.addEventListener("resize", setupInstances);

  //   return () => {
  //     window.removeEventListener("resize", setupInstances);
  //   };
  // }, [duplicateInstances, setupInstances]);

  return (
    <div className={styles.loop} ref={parentRef}>
      <div className={styles.list} ref={childRef}>
        {Array.from({ length: duplicateInstances }, (_, i) => i).map(
          (instance) => (
            <div
              key={instance}
              className={styles.item}
              style={{
                animationDuration: `${speed}s`,
                animationDirection: LOOP_DIRECTION[direction],
              }}
            >
              {children}
            </div>
          ),
        )}
      </div>
    </div>
  );
};
