import Image from "next/image";
import { FC } from "react";

import styles from "./FilePreview.module.css";

import complete from "&/images/vacancies/complete.png";
import error from "&/images/vacancies/error.png";

type FilePreviewProps = {
  name: string;
};

export const FilePreview: FC<FilePreviewProps> = ({ name }) => {
  return (
    <div className={styles.helper}>
      <Image
        className={styles.icon}
        src={/pdf/.test(name) ? complete : error}
        alt={
          /pdf/.test(name)
            ? "Файл загружен."
            : "Ошибка загрузки (поддерживается только формат pdf)."
        }
      />
      <span className={styles.text}>{name}</span>
    </div>
  );
};
