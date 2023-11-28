"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./BookACall.module.css";

import { Button } from "@/shared";

import { bookACallAction } from "../action";
import { FORM_KEYS, FormType } from "../params";
import { FormTitle } from "../ui/FormTitle/FormTitle";
import { Input } from "../ui/Input/Input";
import { Loader } from "../ui/Loader/Loader";
import {
  ErrorNotification,
  SuccessNotification,
} from "../ui/Notification/Notification";
import { Textarea } from "../ui/Textarea/Textarea";
import { BOOK_A_CALL_SCHEMA } from "../validation";

// import errorRaindrop from "&/images/form/5.png";

type FormStatusType = "pending" | "error" | "success" | "loading";

export const BookACallForm: FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatusType>("pending");
  const router = useRouter();

  const closeFormHandler = () => router.back();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      [FORM_KEYS.email]: "",
      [FORM_KEYS.message]: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(BOOK_A_CALL_SCHEMA),
  });

  const formSubmit: SubmitHandler<FormType> = async (formData) => {
    setFormStatus("loading");

    const result = await bookACallAction(formData);

    if (result.success) {
      setFormStatus("success");
    }

    if (result.error) {
      setFormStatus("error");
    }

    reset();
  };

  const isDisabled = Object.keys(errors).length > 0;

  if (formStatus === "success") {
    return <SuccessNotification closeFormHandler={closeFormHandler} />;
  }

  if (formStatus === "error") {
    return <ErrorNotification closeFormHandler={closeFormHandler} />;
  }

  return (
    <form
      noValidate
      autoComplete="off"
      id="leave-request"
      className={styles.form}
      onSubmit={handleSubmit(formSubmit)}
    >
      <FormTitle title="Оставьте свое сообщение, и мы свяжемся с Вами в ближайшее время" />
      <Input
        type="email"
        placeholder="Email*"
        label="email"
        error={!!errors.email}
        helperText={errors?.email?.message as string}
        register={register}
      />
      <Textarea
        placeholder="Ваше сообщение"
        label={FORM_KEYS.message}
        register={register}
      />

      <Button variant="secondary" disabled={isDisabled}>
        <div className={styles.text}>
          {formStatus === "loading" ? <Loader /> : <p>Отправить</p>}
        </div>
      </Button>
    </form>
  );
};
