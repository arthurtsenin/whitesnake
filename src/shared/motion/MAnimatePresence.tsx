import { AnimatePresence, AnimatePresenceProps } from "framer-motion";
import React, { FC, ReactNode } from "react";

type MAnimatePresenceProps = {
  children: ReactNode;
} & AnimatePresenceProps;

export const MAnimatePresence: FC<MAnimatePresenceProps> = ({
  children,
  ...rest
}) => {
  return <AnimatePresence {...rest}>{children}</AnimatePresence>;
};
