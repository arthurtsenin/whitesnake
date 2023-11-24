import Image from "next/image";
import { FC } from "react";

import styles from "./Notification.module.css";

import { Button } from "@/shared";

import errorRaindrop from "&/images/form/5.png";
import successRaindrop from "&/images/form/11.png";

type NotificationType = {
  closeFormHandler?: () => void;
};

export const SuccessNotification: FC<NotificationType> = ({
  closeFormHandler,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Мы приняли вашу заявку и свяжемся в течение суток!
      </p>
      <div className={styles.wrapper}>
        <Image src={successRaindrop} alt="" />
      </div>
      <Button variant="secondary" onClick={closeFormHandler}>
        Отлично!!!
      </Button>
    </div>
  );
};

export const ErrorNotification: FC<NotificationType> = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Ваша заявка не была отправлена</p>
      <div className={styles.wrapper}>
        <Image src={errorRaindrop} alt="" />
      </div>
      <p className={styles.text}>Попробуйте позже</p>
    </div>
  );
};
