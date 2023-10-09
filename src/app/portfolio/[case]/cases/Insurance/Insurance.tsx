import classNames from "classnames";

import styles from "./Insurance.module.css";

import { Container } from "@/shared";
import { CaseChallenge } from "@/widget/Case/CaseChallenge/CaseChallenge";
import { CaseCustomer } from "@/widget/Case/CaseCustomer/CaseCustomer";
import { CaseResults } from "@/widget/Case/CaseResults/CaseResults";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";
import { CaseTeam } from "@/widget/Case/CaseTeam/CaseTeam";
import { CaseTechnologyStack } from "@/widget/Case/CaseTechnologyStack/CaseTecnologyStack";
import { Divider } from "@/widget/Case/ui/Divider/Divider";

import { INSURANCE_DATA } from "./data";

export const Insurance = () => {
  return (
    <Container>
      <CaseCustomer
        title={INSURANCE_DATA.customer_title}
        stats={INSURANCE_DATA.customer_stats}
        info={INSURANCE_DATA.customer_info}
      />
      <Divider />
      <CaseChallenge
        title={INSURANCE_DATA.challenge_title}
        info={INSURANCE_DATA.challenge_info}
      />
      <Divider />
      <CaseSolution title={INSURANCE_DATA.solution_title}>
        <div className={styles.container}>
          {INSURANCE_DATA.solution_info.items.map((item, index) => (
            <div
              key={item.id}
              className={classNames(styles.item, {
                [styles.reverse]: index % 2,
              })}
            >
              <SolutionItem text={item.text} image={item.image} />
            </div>
          ))}
        </div>
      </CaseSolution>
      <Divider />
      <CaseResults
        title={INSURANCE_DATA.results_title}
        text={INSURANCE_DATA.results_info}
        cubes={INSURANCE_DATA.results_cubes}
      />
      <Divider />
      <CaseTeam
        title={INSURANCE_DATA.team_title}
        data={INSURANCE_DATA.team_info}
      />
      <Divider />
      <CaseTechnologyStack
        title={INSURANCE_DATA.stack_title}
        stack={INSURANCE_DATA.stack_info}
      />
    </Container>
  );
};
