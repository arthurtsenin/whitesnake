import { ComponentProps, FC } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./Textarea.module.css";

import { VacancyFormType } from "../../formKeys";

type TextareaProps = ComponentProps<"textarea"> & {
  label: string;
  required?: boolean;
  helperText?: string;
  register: UseFormRegister<VacancyFormType>;
};

export const Textarea: FC<TextareaProps> = ({
  helperText,
  label,
  register,
  ...props
}) => {
  return (
    <>
      <textarea className={styles.textarea} {...register(label)} {...props} />
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </>
  );
};
