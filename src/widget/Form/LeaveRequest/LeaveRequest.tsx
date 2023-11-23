"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./LeaveRequest.module.css";

import { Button } from "@/shared";

import { LEAVE_REQUEST_FORM_TEMPLATE } from "./leaveRequestFormTemplate";
import { leaveRequestAction } from "../action";
import { FORM_KEYS, FormType } from "../params";
import { FormTitle } from "../ui/FormTitle/FormTitle";
import { Input } from "../ui/Input/Input";
import { Loader } from "../ui/Loader/Loader";
import {
  ErrorNotification,
  SuccessNotification,
} from "../ui/Notification/Notification";
import { Textarea } from "../ui/Textarea/Textarea";
import { LEAVE_REQUEST_SCHEMA } from "../validation";

type FormStatusType = "pending" | "error" | "success" | "loading";

export const LeaveRequestForm: FC = () => {
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
      [FORM_KEYS.company]: "",
      [FORM_KEYS.phone]: "",
      [FORM_KEYS.message]: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(LEAVE_REQUEST_SCHEMA),
  });

  const formSubmit: SubmitHandler<FormType> = async (formData) => {
    setFormStatus("loading");

    const result = await leaveRequestAction(formData);

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
    return <ErrorNotification />;
  }

  return (
    <form
      noValidate
      autoComplete="off"
      id="leave-request"
      className={styles.form}
      onSubmit={handleSubmit(formSubmit)}
    >
      <FormTitle title="Расскажите о задаче и мы с вами скоро свяжемся" />
      <div className={styles.inputs}>
        {LEAVE_REQUEST_FORM_TEMPLATE.map((item) => (
          <Input
            key={item.id}
            type={item.type}
            label={item.form_key}
            placeholder={item.placeholder}
            error={!!errors[item.form_key]}
            helperText={errors?.[item.form_key]?.message as string}
            register={register}
          />
        ))}
      </div>
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
