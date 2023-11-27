"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { FC } from "react";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./VacancyForm.module.css";

import { Button } from "@/shared";

import { VACANCY_FORM_TEMPLATE } from "./vacancyFormTemplate";
import { leaveRequestVacancyAction } from "../action";
import { FORM_KEYS, FormType } from "../params";
import { FileInput } from "../ui/FileInput/FileInput";
import { FormTitle } from "../ui/FormTitle/FormTitle";
import { Input } from "../ui/Input/Input";
import { Loader } from "../ui/Loader/Loader";
import { Textarea } from "../ui/Textarea/Textarea";
import { Toast } from "../ui/Toast/Toast";
import { FILE_REGEX, FORM_VACANCY_SCHEMA } from "../validation";
import { storage } from "../../../../firestore";

import raindrops from "&/images/vacancies/form/green-raindrops.png";

type VacancyFormProps = {
  jobTitle?: string;
  formTitle: string;
};

type FormStatusType = "pending" | "error" | "success" | "loading";

type ToastType = {
  isToastOpen: boolean;
  toastType: "error" | "success" | "pending";
  toastText: string;
};

const VacancyForm: FC<VacancyFormProps> = ({ jobTitle, formTitle }) => {
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [isFileDownloading, setIsFileDownloading] = useState<boolean>(false);

  const [toast, setToast] = useState<ToastType>({
    isToastOpen: false,
    toastType: "pending",
    toastText: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatusType>("pending");

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      [FORM_KEYS.name]: "",
      [FORM_KEYS.surname]: "",
      [FORM_KEYS.email]: "",
      [FORM_KEYS.phone]: "",
      [FORM_KEYS.telegram]: "",
      [FORM_KEYS.linkedIn]: "",
      [FORM_KEYS.message]: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(FORM_VACANCY_SCHEMA),
  });

  const uploadFile = async (name: string, file: File) => {
    setIsFileDownloading(true);
    const storageRef = ref(storage, `cv/${name}`);
    await uploadBytes(storageRef, file as File);
    await getDownloadURL(storageRef).then(async (downloadUrl) => {
      setDownloadUrl(downloadUrl);
      setSelectedFileName(name);
      setIsFileDownloading(false);
    });
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      await uploadFile(e.target.files[0].name, e.target.files[0]);
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const formSubmit: SubmitHandler<FormType> = async (formData) => {
    setFormStatus("loading");

    const result = await leaveRequestVacancyAction(
      formData,
      downloadUrl,
      jobTitle,
    );

    if (result.success) {
      setToast({
        isToastOpen: true,
        toastType: "success",
        toastText: result.success,
      });
      setFormStatus("success");
    }

    if (result.error) {
      setToast({
        isToastOpen: true,
        toastType: "error",
        toastText: result.error,
      });
      setFormStatus("error");
    }

    setSelectedFileName("");
    setDownloadUrl("");
    reset();
  };

  const isFileFormatValid =
    selectedFileName.length > 0 && !FILE_REGEX.test(selectedFileName);

  const isDisabled =
    isFileDownloading || isFileFormatValid || Object.keys(errors).length > 0;

  return (
    <section className={styles.container}>
      <div className={styles.glowBlue} />
      <div className={styles.raindrops}>
        <Image src={raindrops} alt="" priority />
      </div>

      <form
        noValidate
        autoComplete="off"
        id="leave-request"
        className={styles.form}
        onSubmit={handleSubmit(formSubmit)}
      >
        <FormTitle title={formTitle} />

        <div className={styles.fields}>
          <div className={styles.inputs}>
            {VACANCY_FORM_TEMPLATE.map((el) => (
              <Input
                key={el.id}
                type={el.type}
                placeholder={el.placeholder}
                label={el.form_key}
                error={!!errors[el.form_key]}
                helperText={errors?.[el.form_key]?.message as string}
                register={register}
              />
            ))}
            <Textarea
              placeholder="Расскажи немного о себе"
              label={FORM_KEYS.message}
              register={register}
            />
          </div>
          <FileInput
            isFileDownloading={isFileDownloading}
            selectedFileName={selectedFileName}
            handleFileChange={handleFileChange}
          />

          <div className={styles.button}>
            <Button variant="secondary" disabled={isDisabled}>
              <div className={styles.text}>
                {formStatus === "loading" ? <Loader /> : <p>Отправить</p>}
              </div>
            </Button>
            <p className={styles.privacy}>
              Нажимая на кнопку, вы даете согласие на обработку персональных
              данных и соглашаетесь c политикой конфиденциальности.
            </p>
          </div>
        </div>
      </form>

      {toast.isToastOpen && (
        <Toast
          isToastOpen
          handleClick={() => setToast({ ...toast, isToastOpen: false })}
          toastType={toast.toastType}
          toastText={toast.toastText}
        />
      )}
    </section>
  );
};

export default VacancyForm;
