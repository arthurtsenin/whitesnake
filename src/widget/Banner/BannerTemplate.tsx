import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./BannerTemplate.module.css";

import { Container } from "@/shared";

export type BannerTemplateProps = {
  children: React.ReactNode;
  image: StaticImageData | string;
};

export const BannerTemplate: FC<BannerTemplateProps> = ({
  image,
  children,
}) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Image
          alt="banner"
          src={image}
          placeholder="blur"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className={styles.content}>{children}</div>
      </div>
    </Container>
  );
};
