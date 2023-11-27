import Image from "next/image";
import { FC } from "react";

import styles from "./FilePreview.module.css";

import { FILE_REGEX } from "@/widget/Form/validation";

import complete from "&/images/icons/complete.png";
import error from "&/images/icons/error.png";

type FilePreviewProps = {
  name: string;
};

export const FilePreview: FC<FilePreviewProps> = ({ name }) => {
  return (
    <div className={styles.helper}>
      <Image
        className={styles.icon}
        src={FILE_REGEX.test(name) ? complete : error}
        alt={
          FILE_REGEX.test(name)
            ? "Файл загружен."
            : "Поддерживаются форматы: doc, docx, txt, png, pdf, jpeg"
        }
      />
      <span className={styles.text}>
        {FILE_REGEX.test(name)
          ? name
          : "Поддерживаются форматы: doc, docx, txt, png, pdf, jpeg"}
      </span>
    </div>
  );
};
