import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

import styles from "./CaseTeam.module.css";

import { caseTeamData } from "./types";
import { CaseTitle } from "../ui/Title/CaseTitle";

import user from "&/cases/user.svg";

type caseTeamProps = {
  data: caseTeamData[];
  title: string;
};

export const CaseTeam: FC<caseTeamProps> = ({ data, title }) => {
  return (
    <div className={styles.team}>
      <CaseTitle title={title} />
      <div
        className={classNames(styles.container, {
          [styles.tree]: data.length === 3,
        })}
      >
        {data.map(({ teamName, teamCount }) => (
          <div key={teamName} className={styles.caseTeam}>
            <p className={styles.caseTeamTitle}>{teamCount}</p>
            <div className={styles.caseTeamDesc}>
              <Image src={user} alt="user" width={40} height={40} />
              <p>{teamName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
