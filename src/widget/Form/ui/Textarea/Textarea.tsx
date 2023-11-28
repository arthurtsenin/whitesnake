import { ComponentProps, FC } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./Textarea.module.css";

import { FormType } from "../../params";

type TextareaProps = ComponentProps<"textarea"> & {
  label: string;
  required?: boolean;
  register: UseFormRegister<FormType>;
};

export const Textarea: FC<TextareaProps> = ({ label, register, ...props }) => {
  return (
    <textarea className={styles.textarea} {...register(label)} {...props} />
  );
};
