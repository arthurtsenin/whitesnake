"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

import styles from "./Navigation.module.css";

import { checkPath } from "@/shared/utils/checkPath";

import { NAVIGATION_LINKS } from "./routes";

type NavigationProps = {
  clickHandler?: () => void;
};

export const Navigation: FC<NavigationProps> = ({ clickHandler }) => {
  const pathname = usePathname();

  return (
    <>
      {Object.values(NAVIGATION_LINKS).map((link) => (
        <Link
          key={link.id}
          href={link.href}
          onClick={() => checkPath(pathname, link.href, clickHandler)}
          className={classNames(styles.link, {
            [styles.active]: pathname.includes(link.href),
          })}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};
