import classNames from "classnames";

import styles from "./AiChatbots.module.css";

import { Container } from "@/shared";
import { CaseChallenge } from "@/widget/Case/CaseChallenge/CaseChallenge";
import { CaseCustomer } from "@/widget/Case/CaseCustomer/CaseCustomer";
import { CaseResults } from "@/widget/Case/CaseResults/CaseResults";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";
import { CaseTeam } from "@/widget/Case/CaseTeam/CaseTeam";
import { CaseTechnologyStack } from "@/widget/Case/CaseTechnologyStack/CaseTecnologyStack";
import { Divider } from "@/widget/Case/ui/Divider/Divider";

import { AI_CHATBOTS_DATA } from "./data";

export const AiChatbots = () => {
  return (
    <Container>
      <CaseCustomer
        title={AI_CHATBOTS_DATA.customer_title}
        stats={AI_CHATBOTS_DATA.customer_stats}
        info={AI_CHATBOTS_DATA.customer_info}
      />
      <Divider />
      <CaseChallenge
        title={AI_CHATBOTS_DATA.challenge_title}
        info={AI_CHATBOTS_DATA.challenge_info}
      />
      <Divider />
      <CaseSolution title={AI_CHATBOTS_DATA.solution_title}>
        <div className={styles.container}>
          {AI_CHATBOTS_DATA.solution_info.items.map((item, index) => (
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
        title={AI_CHATBOTS_DATA.results_title}
        text={AI_CHATBOTS_DATA.results_info.summary}
        cubes={AI_CHATBOTS_DATA.results_cubes}
      />
      <Divider />
      <CaseTeam
        title={AI_CHATBOTS_DATA.team_title}
        data={AI_CHATBOTS_DATA.team_info}
      />
      <Divider />
      <CaseTechnologyStack
        title={AI_CHATBOTS_DATA.stack_title}
        stack={AI_CHATBOTS_DATA.stack_info}
      />
    </Container>
  );
};
