import classNames from "classnames";

import styles from "./DigitalAsset.module.css";

import { Container } from "@/shared";
import { CaseChallenge } from "@/widget/Case/CaseChallenge/CaseChallenge";
import { CaseCustomer } from "@/widget/Case/CaseCustomer/CaseCustomer";
import { CaseResults } from "@/widget/Case/CaseResults/CaseResults";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";
import { CaseTeam } from "@/widget/Case/CaseTeam/CaseTeam";
import { CaseTechnologyStack } from "@/widget/Case/CaseTechnologyStack/CaseTecnologyStack";
import { Divider } from "@/widget/Case/ui/Divider/Divider";

import { DIGITAL_ASSET_DATA } from "./data";

export const DigitalAsset = () => {
  return (
    <Container>
      <CaseCustomer
        title={DIGITAL_ASSET_DATA.customer_title}
        stats={DIGITAL_ASSET_DATA.customer_stats}
        info={DIGITAL_ASSET_DATA.customer_info}
      />
      <Divider />
      <CaseChallenge
        title={DIGITAL_ASSET_DATA.challenge_title}
        info={DIGITAL_ASSET_DATA.challenge_info}
      />
      <Divider />
      <CaseSolution
        title={DIGITAL_ASSET_DATA.solution_title}
        subtitle={DIGITAL_ASSET_DATA.solution_info.subtitle}
      >
        <div className={styles.container}>
          {DIGITAL_ASSET_DATA.solution_info.items.map((item, index) => (
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
        title={DIGITAL_ASSET_DATA.results_title}
        text={DIGITAL_ASSET_DATA.results_info}
        cubes={DIGITAL_ASSET_DATA.results_cubes}
      />
      <Divider />
      <CaseTeam
        title={DIGITAL_ASSET_DATA.team_title}
        data={DIGITAL_ASSET_DATA.team_info}
      />
      <Divider />
      <CaseTechnologyStack
        title={DIGITAL_ASSET_DATA.stack_title}
        stack={DIGITAL_ASSET_DATA.stack_info}
      />
    </Container>
  );
};
