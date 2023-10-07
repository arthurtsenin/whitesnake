"use client";

import { useEffect, useState } from "react";

export const useBurgerMenu = (
  initialState: boolean | (() => boolean) = false,
): {
  isVisible: boolean;
  toggleVisibility: () => void;
  setInvisible: () => void;
} => {
  const [isVisible, setIsVisible] = useState(initialState);

  useEffect(() => {
    isVisible
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");
  }, [isVisible]);

  const setInvisible = () => setIsVisible(false);
  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return { isVisible, toggleVisibility, setInvisible } as const;
};
