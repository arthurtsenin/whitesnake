"use client";

import classNames from "classnames";
import Image from "next/image";
import { ChangeEvent, FC } from "react";

import styles from "./FileInput.module.css";

import { FilePreview } from "./ui/FilePreview/FilePreview";

import clip from "&/images/vacancies/clip.png";

type FileInputProps = {
  selectedFileName: string;
  isFileDownloading: boolean;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const FileInput: FC<FileInputProps> = ({
  handleFileChange,
  isFileDownloading,
  selectedFileName,
}) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.solidBorder]: selectedFileName,
      })}
    >
      <div className={styles.wrapper}>
        <Image src={clip} className={styles.icon} alt="upload CV" />
      </div>

      <div className={styles.placeholder}>
        {isFileDownloading ? (
          "Загрузка файла..."
        ) : selectedFileName ? (
          <FilePreview name={selectedFileName} />
        ) : (
          <>
            <span className={styles.short}>CV</span>
            <span className={styles.long}>Прикрепить файл (CV, портфолио)</span>
          </>
        )}
      </div>

      <input
        onChange={handleFileChange}
        accept=".pdf"
        type="file"
        name="file"
        placeholder="CV"
        className={styles.file}
      />
    </div>
  );
};
