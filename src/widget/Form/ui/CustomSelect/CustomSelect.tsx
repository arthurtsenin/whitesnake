"use client";

import cn from "classnames";
import Image from "next/image";
import { FC, useState } from "react";
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import styles from "./CustomSelect.module.css";

import { useOutsideClick } from "@/shared/hooks/use-outside-click";
import { MotionAnimatePresence } from "@/shared/motion/MotionAnimatePresence";
import { MotionComponent } from "@/shared/motion/MotionComponent";

import { FormType } from "../../params";

import arrowRed from "&/images/icons/arrow-down-red.svg";
import arrow from "&/images/icons/arrow-down-white.svg";

type CustomSelectProps = {
  placeholder: string;
  label: string;
  options: Array<string>;
  error?: boolean;
  helperText: string;
  register: UseFormRegister<FormType>;
  getValues: UseFormGetValues<FormType>;
  setValue: UseFormSetValue<FormType>;
};

type SpanProps = {
  placeholder: string;
  value: string;
};

const Span: FC<SpanProps> = ({ placeholder, value }) => (
  <span
    className={cn({
      [styles.placeholder]: !value,
    })}
  >
    {!value ? placeholder : value}
  </span>
);

export const CustomSelect: FC<CustomSelectProps> = ({
  label,
  placeholder,
  options,
  error,
  helperText,
  register,
  getValues,
  setValue,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const chosenValue = getValues(label);

  const toggleVisibility = () => setOpen((prev) => !prev);

  const handleClickItem = (item: string) => {
    setValue(label, item, {
      shouldTouch: true,
      shouldValidate: true,
    });

    setOpen(false);
  };

  const handleOutsideClick = () => {
    setOpen(false);
  };

  const divOutsideRef = useOutsideClick(handleOutsideClick);

  return (
    <div className={styles.container} data-custom-select ref={divOutsideRef}>
      <button
        type="button"
        className={cn(styles.select, {
          [styles.open]: open,
          [styles.invalid]: error,
        })}
        onClick={toggleVisibility}
      >
        <Span value={chosenValue} placeholder={placeholder} />
        <div className={styles.arrow}>
          <Image src={error ? arrowRed : arrow} alt="" />
        </div>
      </button>

      <MotionAnimatePresence initial={false}>
        {open && (
          <MotionComponent
            as="div"
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
          </MotionComponent>
        )}
      </MotionAnimatePresence>

      <input
        type="text"
        className={styles.hidden}
        {...register(label)}
        {...props}
      />
      {helperText && <p className={styles.helper}>{helperText}</p>}
    </div>
  );
};
