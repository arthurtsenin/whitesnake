import classNames from "classnames";

import styles from "./AiChatbots.module.css";

import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";

import { AI_CHATBOTS_DATA } from "./data";
import { CasePageLayout } from "../CasePageLayout";

export const AiChatbotsPage = () => {
  return (
    <CasePageLayout data={AI_CHATBOTS_DATA}>
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
    </CasePageLayout>
  );
};
