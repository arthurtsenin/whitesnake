import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

import styles from "./Logo.module.css";

import { checkPath } from "@/shared/utils/checkPath";

import { HOME_LINK } from "../../routes";

import logo from "&/logo.png";

type LogoProps = {
  variant: "header" | "footer";
  clickHandler?: () => void;
};

export const Logo: FC<LogoProps> = ({ variant, clickHandler }) => {
  const pathname = usePathname();

  return (
    <Link
      href={HOME_LINK.href}
      className={styles.logo}
      onClick={() => checkPath(pathname, HOME_LINK.href, clickHandler)}
    >
      <Image
        src={logo}
        alt="WhiteSnake logo"
        className={styles[variant]}
        priority
      />
    </Link>
  );
};
