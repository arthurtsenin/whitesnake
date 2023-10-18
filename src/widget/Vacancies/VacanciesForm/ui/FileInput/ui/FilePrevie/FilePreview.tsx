import Image from "next/image";
import { FC } from "react";

import styles from "./FilePreview.module.css";

import complete from "&/images/vacancies/complete.png";

type FilePreviewProps = {
  name: string;
};
export const FilePreview: FC<FilePreviewProps> = ({ name }) => {
  return (
    <div className={styles.helper}>
      <Image className={styles.icon} src={complete} alt="complete" />
      <span className={styles.text}>{name}</span>
    </div>
  );
};
