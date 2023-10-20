"use client";
import Image from "next/image";
import { ChangeEvent, FC } from "react";

import styles from "./FileInput.module.css";

import { FilePreview } from "./ui/FilePreview/FilePreview";

import clip from "&/images/vacancies/clip.png";

type FileInputProps = {
  selectedName: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const FileInput: FC<FileInputProps> = ({
  handleFileChange,
  selectedName,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={clip} className={styles.icon} alt="upload CV" />
      </div>

      <div className={styles.placeholder}>
        {selectedName ? (
          <FilePreview name={selectedName} />
        ) : (
          <>
            <span className={styles.short}>CV</span>
            <span className={styles.long}>Прикрепить файл (CV, портфолио)</span>
          </>
        )}
      </div>

      <input
        onChange={handleFileChange}
        type="file"
        name="file"
        placeholder="CV"
        className={styles.file}
      />
    </div>
  );
};
