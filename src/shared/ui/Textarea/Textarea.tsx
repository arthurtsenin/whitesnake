"use client";

import classNames from "classnames";
import { FC, useId, useState } from "react";

import styles from "./Input.module.scss";

type TextareaProps = {
  name?: string;
  label?: string;
  value: string;
  required?: boolean;
  helperText?: string;
  placeholder: string;
  ChangeHandler: (value: string) => void;
};

export const Textarea: FC<TextareaProps> = ({
  name,
  label,
  value,
  required,
  helperText,
  placeholder,
  ChangeHandler,
}) => {
  const [isBlur, setIsBlur] = useState<boolean>(false);
  const inputId = useId();

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={inputId}>
        {required && <span className={styles.asterisk} />}
        {label}
      </label>
      <textarea
        name={name}
        id={inputId}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        onChange={(e) => ChangeHandler(e.target.value)}
        onBlur={() => setIsBlur(true)}
      />
      {isBlur && helperText?.length && (
        <p
          className={classNames({
            [styles.helperText]: isBlur && helperText?.length,
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
