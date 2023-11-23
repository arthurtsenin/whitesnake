import classNames from "classnames";
import { ComponentProps, FC } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./Input.module.css";

import { FormType } from "../../params";

type InputProps = ComponentProps<"input"> & {
  error?: boolean;
  refresh?: boolean;
  label: string;
  register: UseFormRegister<FormType>;
  helperText: string;
};

export const Input: FC<InputProps> = ({
  label,
  register,
  error,
  helperText,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <input
        className={classNames(styles.input, {
          [styles.invalid]: error,
        })}
        {...register(label)}
        {...props}
      />
      {helperText && <p className={styles.helper}>{helperText}</p>}
    </div>
  );
};
