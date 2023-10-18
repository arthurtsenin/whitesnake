"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { FC } from "react";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./VacancyForm.module.css";

import { Button } from "@/shared";

import { sendEmail } from "./action";
import { FORM_KEYS, VacancyFormType } from "./formKeys";
import { FileInput } from "./ui/FileInput/FileInput";
import { FormTitle } from "./ui/FormTitle/FormTitle";
import { Input } from "./ui/Input/Input";
import { Textarea } from "./ui/Textarea/Textarea";
import { FORM_VACANCY_SCHEMA } from "./validation";
import { storage } from "../../../../firestore";

import raindrops from "&/images/vacancies/form/green-raindrops.png";

type VacancyFormProps = {
  jobTitle: string;
};

export const VacancyForm: FC<VacancyFormProps> = ({ jobTitle }) => {
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [downloadUrl, setDownloadUrl] = useState<string>("");

  const {
    reset,
    register,
    formState: { errors, isValid },
  } = useForm<VacancyFormType>({
    defaultValues: {
      [FORM_KEYS.name]: "",
      [FORM_KEYS.surname]: "",
      [FORM_KEYS.email]: "",
      [FORM_KEYS.phone]: "",
      [FORM_KEYS.telegram]: "",
      [FORM_KEYS.linkedIn]: "",
      [FORM_KEYS.message]: "",
    },
    mode: "onTouched",
    resolver: yupResolver(FORM_VACANCY_SCHEMA),
  });

  const uploadFile = async (name: string, file: File) => {
    const storageRef = ref(storage, `cv/${name}`);
    await uploadBytes(storageRef, file as File);
    await getDownloadURL(storageRef).then(async (downloadUrl) =>
      setDownloadUrl(downloadUrl),
    );
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFileName(e.target.files[0].name);
      await uploadFile(e.target.files[0].name, e.target.files[0]);
    }
  };

  const actionHandler = async (FormData: FormData) => {
    FormData.append(FORM_KEYS.url, downloadUrl);
    FormData.append(FORM_KEYS.jobTitle, jobTitle);

    await sendEmail(FormData);

    setSelectedFileName("");
    reset();
  };

  return (
    <section className={styles.container}>
      <div className={styles.glowBlue} />

      <div className={styles.raindrops}>
        <Image src={raindrops} alt="raindrops" />
      </div>
      <form
        className={styles.form}
        action={actionHandler}
        autoComplete="off"
        id="leave-request"
      >
        <FormTitle title="Оставить заявку" />

        <div className={styles.fields}>
          <div className={styles.inputs}>
            <Input
              type="text"
              placeholder="Имя*"
              label={FORM_KEYS.name}
              error={!!errors[FORM_KEYS.name]}
              register={register}
            />
            <Input
              type="text"
              placeholder="Фамилия*"
              label={FORM_KEYS.surname}
              error={!!errors[FORM_KEYS.surname]}
              register={register}
            />
            <Input
              type={FORM_KEYS.email}
              placeholder="Email*"
              label={FORM_KEYS.email}
              error={!!errors[FORM_KEYS.email]}
              register={register}
            />
            <Input
              type="text"
              placeholder="Телефон"
              label={FORM_KEYS.phone}
              error={!!errors[FORM_KEYS.phone]}
              register={register}
            />
            <Input
              type="text"
              placeholder="Telegram"
              label={FORM_KEYS.telegram}
              error={!!errors[FORM_KEYS.telegram]}
              register={register}
            />
            <Input
              type="text"
              placeholder="LinkedIn"
              label={FORM_KEYS.linkedIn}
              error={!!errors[FORM_KEYS.linkedIn]}
              register={register}
            />
            <Textarea
              placeholder="Расскажи немного о себе"
              label={FORM_KEYS.message}
              register={register}
            />
          </div>

          <FileInput
            selectedName={selectedFileName}
            handleFileChange={handleFileChange}
          />

          <Button variant="secondary" disabled={!isValid}>
            Отправить
          </Button>
        </div>
      </form>
    </section>
  );
};
