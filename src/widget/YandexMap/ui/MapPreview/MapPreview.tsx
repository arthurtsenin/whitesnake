import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./MapPreview.module.css";

import { YANDEX_MAP_URL } from "@/shared/constants/map";

import map from "&/images/internship/map.png";

export const MapPreview: FC = () => {
  return (
    <Link target="_blank" href={YANDEX_MAP_URL} className={styles.wrapper}>
      <Image alt="" src={map} placeholder="blur" fill />
    </Link>
  );
};
