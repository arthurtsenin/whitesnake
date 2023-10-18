import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

import styles from "./Toast.module.css";

import close from "&/images/vacancies/form/close.png";
type ToastProps = {
  toastType: string;
  toastText: string;
  handleClick: () => void;
};

export const Toast: FC<ToastProps> = ({
  handleClick,
  toastType,
  toastText,
}) => {
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
