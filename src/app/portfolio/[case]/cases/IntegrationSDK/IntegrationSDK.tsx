import classNames from "classnames";

import styles from "./IntegrationSDK.module.css";

import { Container } from "@/shared";
import { CaseChallenge } from "@/widget/Case/CaseChallenge/CaseChallenge";
import { CaseCustomer } from "@/widget/Case/CaseCustomer/CaseCustomer";
import { CaseResults } from "@/widget/Case/CaseResults/CaseResults";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";
import { CaseTeam } from "@/widget/Case/CaseTeam/CaseTeam";
import { CaseTechnologyStack } from "@/widget/Case/CaseTechnologyStack/CaseTecnologyStack";
import { Divider } from "@/widget/Case/ui/Divider/Divider";

import { INTEGRATION_SDK_DATA } from "./data";

export const IntegrationSDK = () => {
  return (
    <Container>
      <CaseCustomer
        title={INTEGRATION_SDK_DATA.customer_title}
        stats={INTEGRATION_SDK_DATA.customer_stats}
        info={INTEGRATION_SDK_DATA.customer_info}
      />
      <Divider />
      <CaseChallenge
        title={INTEGRATION_SDK_DATA.challenge_title}
        info={INTEGRATION_SDK_DATA.challenge_info}
      />
      <Divider />
      <CaseSolution
        title={INTEGRATION_SDK_DATA.solution_title}
        subtitle={INTEGRATION_SDK_DATA.solution_info.subtitle}
      >
        <div className={styles.container}>
          {INTEGRATION_SDK_DATA.solution_info.items.map((item, index) => (
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
        title={INTEGRATION_SDK_DATA.results_title}
        text={INTEGRATION_SDK_DATA.results_info.summary}
        cubes={INTEGRATION_SDK_DATA.results_cubes}
      />
      <Divider />
      <CaseTeam
        title={INTEGRATION_SDK_DATA.team_title}
        data={INTEGRATION_SDK_DATA.team_info}
      />
      <Divider />
      <CaseTechnologyStack
        title={INTEGRATION_SDK_DATA.stack_title}
        stack={INTEGRATION_SDK_DATA.stack_info}
      />
    </Container>
  );
};
