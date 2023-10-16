import classNames from "classnames";
import { ComponentProps, FC } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./Input.module.css";

import { VacancyFormType } from "../../formKeys";

type InputProps = ComponentProps<"input"> & {
  error?: boolean;
  helperText?: string;
  refresh?: boolean;
  label: string;
  register: UseFormRegister<VacancyFormType>;
};

export const Input: FC<InputProps> = ({
  helperText,
  label,
  register,
  error,
  ...props
}) => {
  return (
    <>
      <input
        className={classNames(styles.input, {
          [styles.invalid]: error,
        })}
        {...register(label)}
        {...props}
      />
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </>
  );
};
