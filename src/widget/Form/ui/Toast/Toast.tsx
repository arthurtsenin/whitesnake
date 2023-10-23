import classNames from "classnames";
import Image from "next/image";
import { FC, useEffect } from "react";

import styles from "./Toast.module.css";

import close from "&/images/vacancies/form/close.png";
type ToastProps = {
  toastType: string;
  toastText: string;
  isToastOpen: boolean;
  handleClick: () => void;
};

export const Toast: FC<ToastProps> = ({
  handleClick,
  toastType,
  toastText,
  isToastOpen,
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClick();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isToastOpen, handleClick]);

  return (
    <div
      onClick={handleClick}
      className={classNames(styles.basic, styles[toastType])}
    >
      <p>{toastText}</p>
      <Image src={close} alt="close icon" />
    </div>
  );
};
