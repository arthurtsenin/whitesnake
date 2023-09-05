import { FC } from "react";

import styles from "@/shared/ui/SolutionContainer/SolutionContainer.module.scss";

import { SolutionItem } from "@/shared/ui/SolutionItem/SolutionItem";

import { SOLUTIONS } from "./data";

export const SolutionContainer: FC = () => {
  return (
    <div className={styles.container}>
      {SOLUTIONS.map((solution, index) => (
        <SolutionItem
          direction={index % 2 ? "reverse" : ""}
          key={solution.id}
          image={solution.image}
          text={solution.text}
        />
      ))}
    </div>
  );
};
