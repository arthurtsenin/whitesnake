import Image from "next/image";
import { FC } from "react";

import styles from "./CaseTeam.module.css";

import { caseTeamData } from "./types";

import user from "&/cases/user.svg";

type caseTeamProps = {
  teamData: caseTeamData[];
};

export const CaseTeam: FC<caseTeamProps> = ({ teamData }) => {
  return (
    <div className={styles.caseTeamContainer}>
      {teamData.map(({ teamName, teamCount }) => (
        <div key={teamName} className={styles.caseTeam}>
          <p className={styles.caseTeamTitle}>{teamCount}</p>
          <div className={styles.caseTeamDesc}>
            <Image src={user} alt="user" width={40} height={40} />
            <p>{teamName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
