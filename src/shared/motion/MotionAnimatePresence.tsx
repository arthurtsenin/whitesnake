import { AnimatePresence, AnimatePresenceProps } from "framer-motion";
import React, { FC, ReactNode } from "react";

type MotionAnimatePresenceProps = {
  children: ReactNode;
} & AnimatePresenceProps;

export const MotionAnimatePresence: FC<MotionAnimatePresenceProps> = ({
  children,
  ...rest
}) => {
  return <AnimatePresence {...rest}>{children}</AnimatePresence>;
};
