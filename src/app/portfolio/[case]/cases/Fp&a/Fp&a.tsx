import styles from "./Fp&a.module.css";

import { Container } from "@/shared";
import { CaseChallenge } from "@/widget/Case/CaseChallenge/CaseChallenge";
import { CaseCustomer } from "@/widget/Case/CaseCustomer/CaseCustomer";
import { CaseResults } from "@/widget/Case/CaseResults/CaseResults";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";
import { CaseTeam } from "@/widget/Case/CaseTeam/CaseTeam";
import { CaseTechnologyStack } from "@/widget/Case/CaseTechnologyStack/CaseTecnologyStack";
import { Divider } from "@/widget/Case/ui/Divider/Divider";

import { FPA_DATA } from "./data";

export const Fpa = () => {
  return (
    <Container>
      <CaseCustomer
        title={FPA_DATA.customer_title}
        stats={FPA_DATA.customer_stats}
        info={FPA_DATA.customer_info}
      />
      <Divider />
      <CaseChallenge
        title={FPA_DATA.challenge_title}
        info={FPA_DATA.challenge_info}
      />
      <Divider />
      <CaseSolution
        title={FPA_DATA.solution_title}
        subtitle={FPA_DATA.solution_info.subtitle}
      >
        <div className={styles.container}>
          {FPA_DATA.solution_info.items.map((item) => (
            <div key={item.id} className={styles.item}>
              <SolutionItem text={item.text} image={item.image} />
            </div>
          ))}
        </div>
      </CaseSolution>
      <Divider />
      <CaseResults
        title={FPA_DATA.results_title}
        text={FPA_DATA.results_info.summary}
        cubes={FPA_DATA.results_cubes}
      />
      <Divider />
      <CaseTeam title={FPA_DATA.team_title} data={FPA_DATA.team_info} />
      <Divider />
      <CaseTechnologyStack
        title={FPA_DATA.stack_title}
        stack={FPA_DATA.stack_info}
      />
    </Container>
  );
};
