"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC, useState } from "react";
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import styles from "./CustomSelect.module.css";

import { VacancyFormType } from "../../formKeys";

import arrow from "&/arrow-down-white.svg";

type CustomSelectProps = {
  placeholder: string;
  label: string;
  options: Array<string>;
  helperText?: string;
  register: UseFormRegister<VacancyFormType>;
  getValues: UseFormGetValues<VacancyFormType>;
  setValue: UseFormSetValue<VacancyFormType>;
  error?: boolean;
};

export const CustomSelect: FC<CustomSelectProps> = ({
  label,
  placeholder,
  options,
  helperText,
  register,
  getValues,
  setValue,
  // ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleVisibility = () => setOpen((prev) => !prev);

  const handleClickItem = (item: string) => {
    setValue(label, item);
    setOpen(false);
  };

  return (
    <>
      <div className={styles.container} data-custom-select>
        <button
          type="button"
          className={styles.select}
          onClick={toggleVisibility}
        >
          <span>{getValues(label) || placeholder}</span>
          <div className={styles.arrow}>
            <Image
              src={arrow}
              alt="arrow which opens dropdown in order to choose job title"
            />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className={styles.dropdown}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
            >
              {options.map((optionName, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={styles.dropdownItem}
                  onClick={() => handleClickItem(optionName)}
                >
                  {optionName}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <input type="text" className={styles.hidden} {...register(label)} />
      </div>

      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </>
  );
};
